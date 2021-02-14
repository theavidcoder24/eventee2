
console.log("Hello");

function preventDefault() {
  return false;
}

/* == Preloader == */
function loadPage() {
  // document.getElementById("main_container").style.display = 'none';
  document.querySelector(".loadprogress").classList.add('progress');
  document.querySelector(".runningbar").classList.add('indeterminate');

  setTimeout(function () {
    document.querySelector(".loadprogress").classList.remove('progress');
    document.querySelector(".runningbar").classList.remove('indeterminate');
    document.getElementById("main_container").style.display = 'block';
    document.getElementById("main_container").style.visibility = 'visible';
  }, 500);
}

/* Success Messages */
function successmessage(message) {
  var successmessage = document.querySelector("#successmessage");
  successmessage.innerHTML = message;
  successmessage.style.display = "block";
  window.setTimeout(function () {
    successmessage.style.display = 'none';
  }, 7000)
}

/* Error Messages */
function errormessage(message) {
  var errormessage = document.querySelector("#errormessage");
  errormessage.innerHTML = message;
  errormessage.style.display = "block";
  window.setTimeout(function () {
    errormessage.style.display = 'none';
  }, 7000)
}

/* Display Sections */
function hideHome() {
  document.getElementById("home").style.display = "none";
}

function displayHome() {
  document.getElementById("home").style.display = "block";
}

/* Hide all sections except home section */
function hideAll() {
  displayHome();
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

function displayLogin() {
  document.getElementById("login_container").style.display = "block";
  hideHome();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

function hideLogin() {
  document.getElementById("login_container").style.display = "none";
}

function displayRegister() {
  document.getElementById("register_container").style.display = "block";
  hideLogin();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

function hideRegister() {
  document.getElementById("register_container").style.display = "none";
}

function displayEditProf() {
  document.getElementById("edit_prof").style.display = "block";
  hideLogin();
  hideRegister();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

function hideEditProf() {
  document.getElementById("edit_prof").style.display = "none";
}

function displayMyEvents() {
  document.getElementById("my_events").style.display = "block";
  hideLogin();
  hideRegister();
  hideEditProf();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

function hideMyEvents() {
  document.getElementById("my_events").style.display = "none";
}

function displayCreateEvent() {
  document.getElementById("create_event").style.display = "block";
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

function hideCreateEvent() {
  document.getElementById("create_event").style.display = "none";
}

function displayCommunity() {
  document.getElementById("community").style.display = "block";
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideSettings();
  hideFAQ();
}

function hideCommunity() {
  document.getElementById("community").style.display = "none";
}

function displaySettings() {
  document.getElementById("settings").style.display = "block";
  hideHome();
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideFAQ();
}

function hideSettings() {
  document.getElementById("settings").style.display = "none";
}

function displayFAQ() {
  document.getElementById("faq").style.display = "block";
  hideHome();
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
}

function hideFAQ() {
  document.getElementById("faq").style.display = "none";
}

/* ==== Switch Dark Mode Theme + Local Storage ==== */
// Onload of page
window.addEventListener("load", function () {
  console.log(localStorage.getItem("darktheme"))
  if (localStorage.getItem("darktheme") == "true") {
    checkBG.checked = true;
    // Body Restyle
    document.body.style.backgroundColor = "#050505";
    document.body.style.color = "white";
    // event.preventDefault();
    // Hamburger Menu Restyle
    document.getElementById("menu_icon").style.color = "white";
    document.getElementById("login_icon").style.color = "white";
    // Navigation UL Tag Restyle
    document.getElementById("slide-out").style.backgroundColor = "#4d4d4d";
  } else {
    checkBG.checked = false;
    // Body Default
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // Hamburger Menu Default
    document.getElementById("menu_icon").style.color = "black";
    document.getElementById("login_icon").style.color = "black";

    // Navigation UL Tag Default
    document.getElementById("slide-out").style.backgroundColor = "white";
  }
})

// Store values in localStorgae
function switchBG(checkBG) {
  if (checkBG.checked == true) {
    // Save to local storage
    // Body Restyle
    document.body.style.backgroundColor = "#050505";
    document.body.style.color = "white";
    // Hamburger Menu Restyle
    document.getElementById("menu_icon").style.color = "white";
    document.getElementById("login_icon").style.color = "white";
    // Navigation UL Tag Restyle
    document.getElementById("slide-out").style.backgroundColor = "#4d4d4d";
    localStorage.setItem("darktheme", "true");
  } else {
    // Body Default
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // Hamburger Menu Default
    document.getElementById("menu_icon").style.color = "black";
    document.getElementById("login_icon").style.color = "black";
    // Navigation UL Tag Default
    document.getElementById("slide-out").style.backgroundColor = "white";
    localStorage.setItem("darktheme", "false");
  }
}

/* == Navigation == */
$(document).ready(function () {
  $('.sidenav').sidenav();
});

/* == Modal == */
$(document).ready(function () {
  $('.modal').modal();
  // closeOnClick: true;
});

/* == Select == */
$(document).ready(function () {
  $('select').formSelect();
});

/* == Date Picker == */
$(document).ready(function () {
  $('.datepicker').datepicker();
});

/* == Time Picker == */
$(document).ready(function () {
  $('.timepicker').timepicker();
});


/* == Chip == */
var chip = {
  tag: 'chip content',
  image: '', //optional
};


/* Maps */

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();
//   const locationButton = document.createElement("button");
//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }
