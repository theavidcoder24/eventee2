// This code is used to register a service worker.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('js/sw.js').then(function (registration) {
      // Registration success!
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // Registration Failed
      console.log('Error during service worker registration: ', err);
    });
  });
}
var CACHE_NAME = 'Eventee Cache';
// var CACHE_VERSION = 12;
var filecache = [
  'style.css',
  '/',
  'script.js',
  '../index.html'
];
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(filecache);
      })
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache reached return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
      )
  );
});
