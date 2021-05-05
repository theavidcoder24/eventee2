import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import React from "react";
// import ReactDOM from "react-dom";
import "materialize-css";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    /* Prevent Form Redirect */
    preventDefault() {
        return false;
    }

    successmessage(message) {
        var successmessage = document.querySelector("#successmessage");
        successmessage.innerHTML = message;
        successmessage.style.display = "block";
        window.setTimeout(function () {
            successmessage.style.display = 'none';
        }, 7000)
    }

    errormessage(message) {
        var errormessage = document.querySelector("#errormessage");
        errormessage.innerHTML = message;
        errormessage.style.display = "block";
        window.setTimeout(function () {
            errormessage.style.display = 'none';
        }, 7000)
    }


    // postLoginFetch() {
    //     loadPage();
    //     var log_email = document.getElementById("log_email");
    //     var log_pass = document.getElementById("log_pass");
    //     var login_details = new FormData();
    //     login_details.set('action', 'login');
    //     login_details.set('log_email', log_email.value);
    //     login_details.set('log_pass', log_pass.value);
    //     login_details.set('login_user', login_user.value);
    //     // each form element goes into the login_details object ^
    //     fetch('api/ws.php?action=login', {
    //         method: 'POST',
    //         body: login_details,
    //         credentials: 'include',
    //     })
    //         .then(function (response) {
    //             // Force error into console
    //             response.text().then(function (text) {
    //                 console.log(text);
    //             });
    //             // HTTP Response Codes
    //             if (response.status === 202) {
    //                 localStorage.setItem('login', "true");
    //                 successmessage('Yay Successfully Logged in!');
    //                 displayUserInfo();
    //                 // sessionStorage.setItem("UserID", UserID);
    //                 console.log('Login Successful');
    //             }
    //             if (response.status === 401) {
    //                 console.log('Not permitted');
    //                 errormessage("Error: Not implemented");
    //                 // localStorage.setItem('login', "false");
    //                 // fetch('api/ws.php?action=logout', {
    //                 //   method: 'GET'
    //                 // })
    //             }
    //             if (response.status === 501) {
    //                 console.log('Not implemented');
    //                 errormessage("Error: Not implemented");
    //                 // localStorage.setItem('login', "false");
    //                 // fetch('api/ws.php?action=logout', {
    //                 //   method: 'GET'
    //                 // })
    //             }
    //         })
    //         .catch(function (err) {
    //             console.log("Connection unavailable");
    //             console.log(err);
    //         });
    // }
    // render() {
    //     return (
    //       <div className="Login">
    //         {this.state.errorMessage && (
    //           <p className="error"> {this.state.errorMessage} </p>
    //         )}
    //         <form>
    //           <div className="namel">
    //             <label>Username</label>
    //             <input
    //               type="text"
    //               autoFocus
    //               name="namel"
    //               id={this.state.namel}
    //               onChange={this.set}
    //             />
    //           </div>
    //           <div className="passwordl">
    //             <label>Password</label>
    //             <input
    //               type="password"
    //               name="passwordl"
    //               value={this.state.passwordl}
    //               type="password"
    //               onChange={this.set}
    //             />
    //           </div>
    //           <button
    //             className="submit-btn"
    //             type="submit"
    //             name="action"
    //             onClick={this.login}
    //           >
    //             Login
    //           </button>
    //         </form>
    //       </div>
    //     );
    //   }

    isLogged() {
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

    userLogout() {
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
    postCreateEvents() {
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
    displayEvents() {
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


    /* - Autofill Update Form - */
    fillUpdate(eventid) {
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
    postUpdateEvent() {
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
    deleteRemoveEvent(eventid) {
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

}

