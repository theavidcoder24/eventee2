// Test script link
console.log("Hello");

// Call setup functions
window.onload = function () {
  loadPage();
  console.log(localStorage.getItem("login"))
  console.log(localStorage.getItem("LoginName"))
  // console.log(localStorage.getItem("LoginPhone"))
  // console.log(localStorage.getItem("LoginEmail"))
  // console.log(localStorage.getItem("LoginDOB"))
  // console.log(localStorage.getItem("LoginPassword"))
  // if (localStorage.getItem('login') == 'true') {
  //   // isLogged();
  // }
  // if (localStorage.getItem('login') == 'false') {
  //   userLogout();
  // }
}

/* Prevent Form Redirect */
function preventDefault() {
  return false;
}

/* == Preloader == */
function loadPage() {
  // document.getElementById("main_container").style.display = 'none';
  document.querySelector(".loadprogress").classList.add('progress');
  document.querySelector(".runningbar").classList.add('indeterminate');
  document.querySelector(".content").style.display = 'none';

  setTimeout(function () {
    document.querySelector(".loadprogress").classList.remove('progress');
    document.querySelector(".runningbar").classList.remove('indeterminate');
    document.querySelector(".content").style.display = 'block';
  }, 600);
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

/* == Display Sections == */
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
  localStorage.setItem("selectedpage", "editprofile");
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

/* == Fetch Responses == */
/* - Register - */
function postRegFetch() {
  loadPage();
  var fd = new FormData();
  var reg_name = document.getElementById("reg_name");
  var reg_phone = document.getElementById("reg_phone");
  var reg_email = document.getElementById("reg_email");
  var reg_dob = document.getElementById("reg_dob");
  var reg_pass = document.getElementById("reg_pass");
  fd.append('action', 'register');
  fd.append('reg_name', reg_name.value);
  fd.append('reg_phone', reg_phone.value);
  fd.append('reg_email', reg_email.value);
  fd.append('reg_dob', reg_dob.value);
  fd.append('reg_pass', reg_pass.value);
  fd.append('register_user', register_user.value);
  // each form element goes into the fd object ^
  fetch('api/ws.php?action=register', {
    method: 'POST',
    body: fd,
    credentials: 'include',
  })
    .then(function (response) {
      // Force error into console
      response.text().then(function (text) {
        console.log(text);
      });
      // HTTP Response Codes
      if (response.status === 400) {
        console.log('Bad Request');
        errormessage("Bad Request");
        return;
      }
      if (response.status === 401) {
        console.log('Not permitted');
        errormessage("Not Permitted");
        return;
      }
      // if (response.status === 501) {
      //   console.log('Not implemented');
      //   errormessage("Server Error Try Again");
      //   return;
      // }
      if (response.status === 202) {
        // loadPage();
        console.log('Registration Successful');
        successmessage('Yay Successfully Registered!');
        localStorage.setItem('LoginName', reg_name);
        localStorage.setItem('LoginPhone', reg_phone);
        localStorage.setItem('LoginEmail', reg_email);
        localStorage.setItem('LoginDOB', reg_dob);
        localStorage.setItem('LoginPassword', reg_pass);
        return;
      }
      // response.json().then(function (data) {
      //   localStorage.setItem('credentials', JSON.stringify(data));
      // })
    })
    .catch(function (err) {
      console.log("Connection unavailable");
      console.log(err);
    });
}


/* - Login - */
function postLoginFetch() {
  loadPage();
  var log_email = document.getElementById("log_email");
  var log_pass = document.getElementById("log_pass");
  var login_details = new FormData();
  login_details.append('log_email', log_email.value);
  login_details.append('log_pass', log_pass.value);
  login_details.append('action', 'login');
  // each form element goes into the login_details object ^
  fetch('api/ws.php?action=login', {
    method: 'POST',
    body: login_details,
    credentials: 'include',
  })
    .then(function (response) {
      // Force error into console
      response.text().then(function (text) {
        console.log(text);
      });
      // HTTP Response Codes
      if (response.status === 202) {
        localStorage.setItem('login', "true");
        successmessage('Yay Successfully Logged in!');
        var log_email = document.getElementById("log_email");
        var login_details = new FormData();
        login_details.append('log_email', log_email.value);
        fetch('api/ws.php?action=is_logged_in', {
          method: 'GET',
          body: login_details,
          credentials: 'include',
        })
        console.log('Login Successful');
        localStorage.setItem('LoginEmail', log_email);
        localStorage.getItem('LoginPassword', log_pass);
      }
      if (response.status === 401) {
        console.log('Not permitted');
        errormessage("Error: Not implemented");
        localStorage.setItem('login', "false");
        fetch('api/ws.php?action=logout', {
          method: 'GET'
        })
      }
      if (response.status === 501) {
        console.log('Not implemented');
        errormessage("Error: Not implemented");
        localStorage.setItem('login', "false");
        fetch('api/ws.php?action=logout', {
          method: 'GET'
        })
      }
    })
    .catch(function (err) {
      console.log("Connection unavailable");
      console.log(err);
    });
}


/* - is logged in Fetch - */
function isLogged() {
  fetch('api/ws.php?action=is_logged_in', {
    method: 'GET',
    body: login_details,
    credentials: 'include',
  })
    // HTTP Response Codes
    .then(function (response) {
      response.text().then(function (text) {
        console.log(text);
      });
      if (response.status === 202) {
        localStorage.setItem('login', "true");
        console.log('Logged In!!');
        loadPage();
      }
      if (response.status === 401) {
        loadPage();
        console.log('Not logged in failed');
        errormessage("Error: Not implemented");
        localStorage.setItem('login', "false");
        return;
      }
      if (response.status === 429) {
        console.log('Rate limit exceeded');
      }
    })
    .catch(function (err) {
      console.log("Connection unavailable");
      console.log(err);
    });
}

/* - User Logout - */
function userLogout() {
  fetch('api/ws.php?action=logout', {
    method: 'GET'
  })
    .then(function (response) {
      // Force error into console
      response.text().then(function (text) {
        console.log(text);
      });
      // HTTP Response Codes
      if (response.status === 202) {
        console.log("Logout Success");
        successmessage("Success, You're Logged Out");
        // var createquestion = document.querySelector("#createquestion");
        // createquestion.style.display = "none";
        localStorage.removeItem('Login Email', log_email);
        localStorage.removeItem('Login Password', log_pass);
        localStorage.setItem('login', "false");
      }
      if (response.status === 401) {
        console.log("Not permitted");
        errormessage("Internal Server - Not Permitted");
        return;
      }
      if (response.status === 501) {
        console.log("Logout Failed");
        return;
      }
      if (response.status === 429) {
        console.log('Rate limit exceeded');
      }
      else {
        errormessage("Error - Internal Server error not logged out");
      }
    })
    .catch(function (err) {
      console.log("Connection unavailable");
      console.log(err);
    });
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
