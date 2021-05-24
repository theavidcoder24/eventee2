// Test script link
// console.log("Hello");

// Call setup functions
window.onload = function () {
  // loadPage();
  console.log(localStorage.getItem("login"));
  if (localStorage.getItem('login') == 'true') {
    isLogged();
  }
  // if (localStorage.getItem('login') == 'false') {
  //   userLogout();
  // }
  if (localStorage.getItem('access_rights') == 'Admin') {
    document.getElementById("#admin_logo").style.display = 'block';
  }
  if (localStorage.getItem('access_rights') == 'User') {
    document.getElementById("#admin_logo").style.display = 'none';
  }
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
  localStorage.setItem("page_selected", "home");
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

/* Display User Profile Information */
function displayUserInfo() {
  if (localStorage.getItem('login') == 'true') {
    document.getElementById("login_icon").style.display = "none";
    document.getElementById("user_icon").style.display = "block";
    document.getElementById("editprof_icon").style.display = "block";
    document.getElementById("myevents_icon").style.display = "block";
    document.getElementById("logout_icon").style.display = "block";
  }
}

/* Hide User Profile Information */
function hideUserInfo() {
  if (localStorage.getItem('login') == 'false') {
    document.getElementById("login_icon").style.display = "block";
    document.getElementById("user_icon").style.display = "none";
    document.getElementById("editprof_icon").style.display = "none";
    document.getElementById("myevents_icon").style.display = "none";
    document.getElementById("logout_icon").style.display = "none";
  }
}

/* Display User Login */
function displayLogin() {
  document.getElementById("login_container").style.display = "block";
  localStorage.setItem("page_selected", "login");
  hideHome();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

/* Hide User Login */
function hideLogin() {
  document.getElementById("login_container").style.display = "none";
}

/* Display User Register */
function displayRegister() {
  document.getElementById("register_container").style.display = "block";
  localStorage.setItem("page_selected", "register");
  hideLogin();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

/* Display User Register */
function hideRegister() {
  document.getElementById("register_container").style.display = "none";
}

/* Display User Edit Profile */
function displayEditProf() {
  document.getElementById("edit_prof").style.display = "block";
  localStorage.setItem("page_selected", "editprofile");
  hideLogin();
  hideRegister();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

/* Hide User Edit Profile */
function hideEditProf() {
  document.getElementById("edit_prof").style.display = "none";
}

/* Display User Events */
function displayMyEvents() {
  document.getElementById("my_events").style.display = "block";
  localStorage.setItem("page_selected", "myevents");
  hideLogin();
  hideRegister();
  hideEditProf();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

/* Hide User Events */
function hideMyEvents() {
  document.getElementById("my_events").style.display = "none";
}

/* Display Create User Events */
function displayCreateEvent() {
  document.getElementById("create_event").style.display = "block";
  localStorage.setItem("page_selected", "createevents");
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCommunity();
  hideSettings();
  hideFAQ();
}

/* Hide Create User Events */
function hideCreateEvent() {
  document.getElementById("create_event").style.display = "none";
}

/* Display User Community */
function displayCommunity() {
  document.getElementById("community").style.display = "block";
  localStorage.setItem("page_selected", "community");
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideSettings();
  hideFAQ();
}

/* Hide User Community */
function hideCommunity() {
  document.getElementById("community").style.display = "none";
}

/* Display Settings */
function displaySettings() {
  document.getElementById("settings").style.display = "block";
  localStorage.setItem("page_selected", "settings");
  hideHome();
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideFAQ();
}

/* Hide Settings */
function hideSettings() {
  document.getElementById("settings").style.display = "none";
}

/* Display Frequently Asked Questions */
function displayFAQ() {
  document.getElementById("faq").style.display = "block";
  localStorage.setItem("page_selected", "faq");
  hideHome();
  hideLogin();
  hideRegister();
  hideEditProf();
  hideMyEvents();
  hideCreateEvent();
  hideCommunity();
  hideSettings();
}

/* Hide Frequently Asked Questions */
function hideFAQ() {
  document.getElementById("faq").style.display = "none";
}

/* == Fetch Responses == */
/* - Register - */
function postRegFetch() {
  // loadPage();
  // var errStr = "";
  // if (reg_name.checkValidity() === false) {
  //   errStr += "Please type a valid name ";
  //   console.log("Error: Full Name");
  //   return;
  // }
  // if (reg_phone.checkValidity() === false) {
  //   errStr += "Please type a valid phone number ";
  //   console.log("Error: Phone Number");
  //   return;
  // }
  // if (reg_dob.checkValidity() === false) {
  //   errStr += "Please insert a valid date of birth ";
  //   console.log("Error: Date of Birth");
  //   return;
  // }
  // if (reg_email.checkValidity() === false) {
  //   errStr += "Please type in a valid email ";
  //   console.log("Error: Email");
  //   return;
  // }
  // if (reg_pass.checkValidity() === false) {
  //   errStr += "Please type in a valid password ";
  //   console.log("Error: Password");
  //   return;
  // }
  var fd = new FormData();
  var reg_name = document.getElementById("reg_name");
  var reg_phone = document.getElementById("reg_phone");
  var reg_email = document.getElementById("reg_email");
  var reg_dob = document.getElementById("reg_dob");
  var reg_pass = document.getElementById("reg_pass");
  var access_rights = document.getElementById("access_rights");
  var register_user = document.getElementById("register_user");
  fd.append('action', 'register');
  fd.append('reg_name', reg_name.value);
  fd.append('reg_phone', reg_phone.value);
  fd.append('reg_email', reg_email.value);
  fd.append('reg_dob', reg_dob.value);
  fd.append('reg_pass', reg_pass.value);
  fd.append('access_rights', access_rights.value);
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
        // errormessage("Bad Request");
        return;
      }
      if (response.status === 401) {
        console.log('Not permitted');
        // errormessage("Not Permitted");
        return;
      }
      if (response.status === 501) {
        console.log('Not implemented');
        // errormessage("Server Error Try Again");
        return;
      }
      if (response.status === 202) {
        // loadPage();
        console.log('Registration Successful');
        // successmessage('Yay Successfully Registered!');
        return;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}


/* - Login - */
function postLoginFetch() {
  loadPage();
  // var log_email = document.getElementById("log_email");
  // var log_pass = document.getElementById("log_pass");
  var login_details = new FormData();
  login_details.set('action', 'login_user');
  login_details.set('log_email', log_email.value);
  login_details.set('log_pass', log_pass.value);
  login_details.set('login_user', login_user.value);
  // each form element goes into the login_details object ^
  fetch('api/ws.php?action=login', {
    method: 'POST',
    body: login_details,
    credentials: 'include',
  })
    .then(function (response) {
      // Force error into console
      // response.text().then(function (text) {
      //   console.log(text);
      // });
      // HTTP Response Codes
      if (response.status === 200) {
        errormessage("Type a vaild email and password");
      }
      if (response.status === 202) {
        localStorage.setItem('login', "true");
        successmessage('Yay Successfully Logged in!');
        displayUserInfo();
        // sessionStorage.setItem("UserID", UserID);
        console.log('Login Successful');
      }
      if (response.status === 401) {
        console.log('Not permitted');
        errormessage("Error: Not implemented");
        // localStorage.setItem('login', "false");
        // fetch('api/ws.php?action=logout', {
        //   method: 'GET'
        // })
      }
      if (response.status === 501) {
        console.log('Not implemented');
        errormessage("Error: Not implemented");
        // localStorage.setItem('login', "false");
        // fetch('api/ws.php?action=logout', {
        //   method: 'GET'
        // })
      }
    })
    .catch(function (err) {
      console.log("Connection unavailable");
      console.log(err);
    });
}

// function postAdminLogin() {
//   var log_email = document.getElementById("log_email");
//   var log_pass = document.getElementById("log_pass");
//   var access_rights = document.getElementById("access_rights");
//   var admin_details = new FormData();
//   admin_details.set('action', 'login_admin');
//   admin_details.set('log_email', log_email.value);
//   admin_details.set('log_pass', log_pass.value);
//   admin_details.set('access_rights', access_rights.value);
//   admin_details.set('login_admin', login_admin.value);
//   // each form element goes into the admin_details object ^
//   fetch('api/ws.php?action=adminLogin', {
//     method: 'POST',
//     body: admin_details,
//     credentials: 'include',
//   })
//     .then(function (response) {
//       // Force error into console
//       response.text().then(function (text) {
//         console.log(text);
//       });
//       // HTTP Response Codes
//       if (response.status === 202) {
//         localStorage.setItem('login', "true");
//         successmessage('Yay Successfully Logged in!');
//         console.log('Login Successful');
//       }
//       if (response.status === 401) {
//         console.log('Not permitted');
//         errormessage("Error: Not implemented");
//         // localStorage.setItem('login', "false");
//         // fetch('api/ws.php?action=logout', {
//         //   method: 'GET'
//         // })
//       }
//     })
//     .catch(function (err) {
//       console.log("Connection unavailable");
//       console.log(err);
//     });
// }

/* - is logged in Fetch - */
function isLogged() {
  loadPage();
  fetch('api/ws.php?action=is_logged_in', {
    method: 'GET',
  })
    // HTTP Response Codes
    .then(function (response) {
      if (response.status === 202) {
        localStorage.setItem('login', "true");
        localStorage.setItem('LoginEmail', log_email);
        if (localStorage.getItem('login') == 'true') {
          console.log('Logged In!!');
          sessionStorage.setItem("login", "true");
          hideAll();
          displayUserInfo();
        }
      }
      else {
        localStorage.setItem('login', "false");
        userLogout();
        hideUserInfo();
      }
      if (response.status === 401) {
        loadPage();
        console.log('Not logged in failed');
        errormessage("Error: Not implemented");
        localStorage.setItem('login', "false");
        if (localStorage.getItem('login') == 'false') {
          userLogout();
          hideUserInfo();
        }
        return;
      }
      if (response.status === 429) {
        console.log('Rate limit exceeded');
        localStorage.setItem('login', "false");
        if (localStorage.getItem('login') == 'false') {
          userLogout();
          hideUserInfo();
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

// function currentuserid() {
//   return fetch('api/api.php?action=userid', {
//     method: 'GET',
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       var userid = JSON.parse(data);
//       return userid;
//     })
// }

/* - User Logout - */
function userLogout() {
  fetch('api/ws.php?action=logout', {
    method: 'GET'
  })
    .then(function (response) {
      // HTTP Response Codes
      if (response.status === 202) {
        console.log("Logout Success");
        successmessage("Success, You're Logged Out");
        localStorage.setItem('login', "false");
        sessionStorage.clear();
        hideUserInfo();
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
      // else {
      //   errormessage("Error - Internal Server error not logged out");
      // }
    })
    .catch(function (err) {
      // console.log("Connection unavailable");
      console.log(err);
    });
}

/* - Create Events - */
function postCreateEvents() {
  loadPage();
  // var errStr = "";
  // if (event_name.checkValidity() === false) {
  //   errStr += "Please type a valid name ";
  //   console.log("Error: Event Name");
  //   return;
  // }
  // if (event_desc.checkValidity() === false) {
  //   errStr += "Please type a valid description ";
  //   console.log("Error: Event Name");
  //   return;
  // }
  // if (event_cat.checkValidity() === false) {
  //   errStr += "Please type a valid category ";
  //   console.log("Error: Event Name");
  //   return;
  // }
  // if (event_address.checkValidity() === false) {
  //   errStr += "Please type a valid address ";
  //   console.log("Error: Event Name");
  //   return;
  // }
  // if (event_loc.checkValidity() === false) {
  //   errStr += "Please type a valid location ";
  //   console.log("Error: Event Name");
  //   return;
  // }
  // if (event_date.checkValidity() === false) {
  //   errStr += "Please type a valid date ";
  //   console.log("Error: Event Name");
  //   return;
  // }
  // if (event_time.checkValidity() === false) {
  //   errStr += "Please type a valid time ";
  //   console.log("Error: Event Name");
  //   return;
  // }
  var fd = new FormData();
  fd.append('action', 'createEvent');
  fd.append('event_name', event_name.value);
  fd.append('event_desc', event_desc.value);
  fd.append('event_cat', event_cat.value);
  fd.append('event_address', event_address.value);
  fd.append('event_loc', event_loc.value);
  fd.append('event_date', event_date.value);
  fd.append('event_time', event_time.value);
  fd.append('createEvent', createEvent.value);
  // each form element goes into the fd object ^
  fetch('api/ws.php?action=createEvents', {
    method: 'POST',
    body: fd,
    credentials: 'include'
  })
    // Force error into console
    .then(function (response) {
      response.text().then(function (text) {
        console.log(text);
      });
      // HTTP Response Codes
      if (response.status === 202) {
        console.log('Creation Successful');
        successmessage("Success: Event Created!");
        return;
      }
      if (response.status === 400) {
        console.log('Bad Request');
        errormessage('Error: Bad Request');
        return;
      }
      if (response.status === 401) {
        console.log('Not permitted');
        errormessage('Error: Not Permitted');
        return;
      }
      if (response.status === 501) {
        console.log('Not implemented :(');
        errormessage('Error: Not Implemented');
        return;
      }
    });
  return false;
}

/* - Display Events - */
function displayEvents() {
  loadPage();
  // Define output string that will display the database data
  var outStr = '';
  var outStr2 = '';
  fetch('api/ws.php?action=displayEvents', {
    method: "GET",
    credentials: "include",
  })
    .then(function (response) {
      loadPage();
      response.json().then(function (data) {
        localStorage.setItem("events", JSON.stringify(data));
        // console.log(data);
        data.forEach(row => {
          outStr +=
            '<tr><td>' + row.eventID +
            '</td><td>' + row.eventName +
            '</td><td>' + row.eventDescription +
            '</td><td>' + row.eventCategory +
            '</td><td>' + row.eventAddress +
            '</td><td>' + row.eventLocation +
            '</td><td>' + row.eventDate +
            '</td><td>' + row.eventTime +
            '</td><td><button href="#update_events" class="modal-trigger" onclick="fillUpdate(' + row.eventID + ')" value="' + row.eventID + '"><i class="material-icons">edit</i></button>' +
            '</td><td>' + '<button onclick="deleteRemoveEvent(' + row.eventID + ')" value="' + row.eventID + '"><i class="material-icons">delete</i></button>' +
            '</td></tr>';
          outStr2 =
            `<div class="modal-content">
            <h5 class="modal-close right" onclick="closeModal()">&#10005;</h5>
              <h4>Update Events</h4>
                <form action="api/ws.php" method="POST" onclick="return preventDefault()" novalidate>
                    <div class="input-field">
                        <i class="material-icons prefix">title</i>
                        <input id="update_ev_name" name="update_ev_name" placeholder="Event Name" type="text">
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">notes</i>
                        <textarea id="update_ev_desc" name="update_ev_desc" class="materialize-textarea"
                            placeholder="Event Description"></textarea>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">category</i>
                        <input type="text" id="update_ev_cat" name="update_ev_cat" placeholder="Enter Your Event Type">
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">map</i>
                        <input type="text" id="update_ev_address" name="update_ev_address" placeholder="Enter Your Address">
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">flag</i>
                        <input type="text" id="update_ev_loc" name="update_ev_loc" placeholder="Event Location">
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">date_range</i>
                        <input type="text" id="update_ev_date" class="datepicker" placeholder="Event Date">
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">schedule</i>
                        <input type="text" id="update_ev_time" class="timepicker" placeholder="Event Time">
                    </div>
                    <input type="hidden" name="eventid" value="`+ row.eventID + `" id="eventid">
                    <input type="hidden" name="action" value="update" id="updateEvent">
                    <button class="btn waves-effect waves-light" type="submit" onclick="postUpdateEvent()">Update
                        Event</button>
                </form>
            </div>`
        });
        document.getElementById('eventsTable').innerHTML = outStr;
        document.getElementById('update_events').innerHTML = outStr2;
      });
    });
}

// Get List of attendees by Event ID
function getattendees() {
  fetch('api/ws.php?action=checkAttendance', {
    method: '',
    body: fd,
    credentials: 'include'
  })
}

// Add user to event
function attendEvent() {
  if (checkAnswer.checked == true) {
    loadPage();
    var fd = new FormData();
    var reg_name = document.getElementById("reg_name");
    var reg_phone = document.getElementById("reg_phone");
    var reg_email = document.getElementById("reg_email");
    fd.append('reg_name', reg_name.value);
    fd.append('reg_phone', reg_phone.value);
    fd.append('reg_email', reg_email.value);
    fd.append('event_name', event_name.value);
    fd.append('action', 'attendEvent');
    // each form element goes into the fd object ^
    fetch('api/ws.php?action=attendEvent', {
      method: 'UPDATE',
      body: fd,
      credentials: 'include'
    })
      // Force error into console
      .then(function (response) {
        response.text().then(function (text) {
          console.log(text);
        });
        // HTTP Response Codes
        if (response.status === 202) {
          console.log('Successful Attendance Recorded');
          successmessage("Success: Attendance Recorded");
          return;
          // if (checkAnswer > 5) {

          // } elseif (checkAnswer < 5) {

          // }
        }
        if (response.status === 400) {
          console.log('Bad Request');
          errormessage('Error: Bad Request');
          return;
        }
        if (response.status === 401) {
          console.log('Not permitted');
          errormessage('Error: Not Permitted');
          return;
        }
        if (response.status === 501) {
          console.log('Not implemented :(');
          errormessage('Error: Not Implemented');
          return;
        }
      });
    return false;
  } else {
  }
}

/* - Autofill Update Form - */
function fillUpdate(eventid) {
  console.log("Fill event with id " + eventid);

  events = JSON.parse(localStorage.getItem("events"));
  // console.log(events);

  selectedEvent = events.filter(event => event[0] == eventid)[0];

  if (selectedEvent != null) {
    console.log(selectedEvent);
    document.getElementById("eventid").value = selectedEvent[0];
    document.getElementById("update_ev_name").value = selectedEvent[1];
    document.getElementById("update_ev_desc").value = selectedEvent[2];
    document.getElementById("update_ev_cat").value = selectedEvent[3];
    document.getElementById("update_ev_address").value = selectedEvent[4];
    document.getElementById("update_ev_loc").value = selectedEvent[5];
    document.getElementById("update_ev_date").value = selectedEvent[6];
    document.getElementById("update_ev_time").value = selectedEvent[7];
  }
}

/* - Update Events - */
function postUpdateEvent() {
  var eventid = document.getElementById("eventid").value;
  console.log("Update event with id " + eventid);

  var userUpdate = {
    'eventid': document.getElementById("eventid").value,
    'update_ev_name': document.getElementById("update_ev_name").value,
    'update_ev_desc': document.getElementById("update_ev_desc").value,
    'update_ev_cat': document.getElementById("update_ev_cat").value,
    'update_ev_address': document.getElementById("update_ev_address").value,
    'update_ev_loc': document.getElementById("update_ev_loc").value,
    'update_ev_date': document.getElementById("update_ev_date").value,
    'update_ev_time': document.getElementById("update_ev_time").value
  }

  fetch('api/ws.php?action=updateEvent', {
    method: "POST",
    body: JSON.stringify(userUpdate),
    credentials: 'include',
  })
    // Force error into console
    .then(function (response) {
      response.text().then(function (text) {
        console.log(text);
      });
      // HTTP Response Codes
      if (response.status === 200) {
        // loadPage();
        console.log(eventid.value);
      }
      if (response.status === 202) {
        console.log('Update Successful');
      }
      if (response.status === 400) {
        errormessage('Error: Bad Request');
        console.log('Bad Request');
        // console.log(eventid.value);
        return;
      }
      if (response.status === 401) {
        console.log('Not permitted');
        return;
      }
      if (response.status === 501) {
        errormessage('Error: Not implemented');
        console.log('Not implemented :(');
        return;
      }
    });
}

/* Delete Events */
function deleteRemoveEvent(eventid) {
  console.log("Delete event with id " + eventid);

  events = JSON.parse(localStorage.getItem("events"));

  selectedEvent = events.filter(event => event[0] == eventid)[0];

  if (selectedEvent != null) {
    console.log(selectedEvent);
    document.getElementById("update_ev_name").value = selectedEvent[1];
    document.getElementById("update_ev_desc").value = selectedEvent[2];
    document.getElementById("update_ev_cat").value = selectedEvent[3];
    document.getElementById("update_ev_address").value = selectedEvent[4];
    document.getElementById("update_ev_loc").value = selectedEvent[5];
    document.getElementById("update_ev_date").value = selectedEvent[6];
    document.getElementById("update_ev_time").value = selectedEvent[7];
  }

  var removefd = new FormData();
  removefd.append('action', 'deleteRemoveEvent');
  removefd.append('eventid', eventid);

  fetch('api/ws.php?action=removeEvent', {
    method: 'POST',
    body: removefd,
  })
    .then(function (response) {
      // Force error into console
      response.text().then(function (text) {
        console.log(text);
      });
      // HTTP Response Codes
      if (response.status == 202) {
        loadPage();
        successmessage("Success: Removal Successful");
      }
      if (response.status === 400) {
        console.log('Bad Request');
        errormessage('Error: Bad Request');
        return;
      }
      if (response.status === 401) {
        console.log('Not permitted');
        errormessage('Error: Not Permitted');
        return;
      }
    });
}

/* ==== User Profile Local Storage ==== */
window.addEventListener("load", function () {
  log_name_e.value = localStorage.getItem("log_name_e");
  // log_email_e.value = localStorage.getItem("log_email_e");
  log_phone_e.value = localStorage.getItem("log_phone_e");
  log_dob_e.value = localStorage.getItem("log_dob_e");
  // log_pass_e.value = localStorage.getItem("log_pass_e");
  if (localStorage.getItem("log_name_e", "log_phone_e", "log_dob_e") == null) {
    checkProf.checked = false;
  } else {
    checkProf.checked = true;
  }
})

function setLocal() {
  if (checkProf.checked == true) {
    localStorage.setItem("log_name_e", log_name_e.value);
    localStorage.setItem("log_email_e", log_email_e.value);
    localStorage.setItem("log_phone_e", log_phone_e.value);
    localStorage.setItem("log_dob_e", log_dob_e.value);
    // localStorage.setItem("log_pass_e", log_pass_e.value);

  } else {
    localStorage.removeItem("log_name_e");
    localStorage.removeItem("log_email_e");
    localStorage.removeItem("log_phone_e");
    localStorage.removeItem("log_dob_e");
    // localStorage.removeItem("log_pass_e");
  }
}

/* Saves the user's name input */
function saveName(checkProf) {
  if (checkProf.checked == true) {
    var save = document.getElementById("log_name_e");
    localStorage.setItem("log_name_e", log_name_e.value);
  }
}

/* Saves the user's email input */
function saveEmail(checkProf) {
  if (checkProf.checked == true) {
    var save = document.getElementById("log_email_e");
    localStorage.setItem("log_email_e", log_email_e.value);
  }
}

/* Saves the user's phone input */
function savePhone(checkProf) {
  if (checkProf.checked == true) {
    var save = document.getElementById("log_phone_e");
    localStorage.setItem("log_phone_e", log_phone_e.value);
  }
}

// /* Saves the user's date of birth input */
function saveDOB(checkProf) {
  if (checkProf.checked == true) {
    var save = document.getElementById("log_dob_e");
    localStorage.setItem("log_dob_e", log_dob_e.value);
  }
}

/* Saves the user's password input */
function savePass(checkProf) {
  if (checkProf.checked == true) {
    var save = document.getElementById("log_pass_e");
    localStorage.setItem("log_pass_e", log_pass_e.value);
  }
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
