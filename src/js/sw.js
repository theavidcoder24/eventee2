// This code is used to register a service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('src/js/sw.js').then(function (registration) {
      // Registration success!
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // Registration Failed
      console.log('Error during service worker registration: ', err);
    });
  });
}
// Set cache name
var CACHE_NAME = 'Eventee Cache';
// var CACHE_VERSION = 12;
var filecache = [
  '/',
  '../css/style.css',
  'script.js',
  '../../index.html'
];
// install and return filecache
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(filecache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - so return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});
