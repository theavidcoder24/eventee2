
console.log("Hello");

function preventDefault() {
  return false;
}


/* == Preloader == */
function loadPage() {
  // document.getElementById("mainContainer").style.display = 'none';
  document.querySelector(".loadprogress").classList.add('progress');
  document.querySelector(".runningbar").classList.add('indeterminate');

  setTimeout(function () {
    document.querySelector(".loadprogress").classList.remove('progress');
    document.querySelector(".runningbar").classList.remove('indeterminate');
    // document.getElementById("mainContainer").style.display = 'block';
    // document.getElementById("mainContainer").style.visibility = 'visible';
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
  hideSettings();
  hideFAQ();
}

function displayLogin() {
  document.getElementById("login_container").style.display = "block";
  hideHome();
}

function hideLogin() {
  document.getElementById("login_container").style.display = "none";
}

function displayRegister() {
  document.getElementById("register").style.display = "block";
  hideLogin();
}

function hideRegister() {
  document.getElementById("register").style.display = "none";
}

function displaySettings() {
  document.getElementById("settings").style.display = "block";
  hideHome();
}

function hideSettings() {
  document.getElementById("settings").style.display = "none";
}

function displayFAQ() {
  document.getElementById("faq").style.display = "block";
  hideHome();
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
    document.getElementById("menu-icon").style.color = "white";
    // Navigation UL Tag Restyle
    document.getElementById("slide-out").style.backgroundColor = "#474747";
  } else {
    checkBG.checked = false;
    // Body Default
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // Hamburger Menu Default
    document.getElementById("menu-icon").style.color = "black";
    // Navigation UL Tag Default
    document.getElementById("slide-out").style.backgroundColor = "#fff";
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
    document.getElementById("menu-icon").style.color = "white";
    // Navigation UL Tag Restyle
    document.getElementById("slide-out").style.backgroundColor = "#474747";
    localStorage.setItem("darktheme", "true");
  } else {
    // Body Default
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // Hamburger Menu Default
    document.getElementById("menu-icon").style.color = "black";
    // Navigation UL Tag Default
    document.getElementById("slide-out").style.backgroundColor = "#fff";
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