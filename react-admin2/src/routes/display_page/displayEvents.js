import React from 'react';
// import React, { useState } from 'react';
// import { createUseStyles } from 'react-jss';
// import DeleteEvents from './routes/create_page/createEvents.js';

/* - Display Events - */
function DisplayEvents() {
  // Define output string that will display the database data
  var outStr = '';
  var outStr2 = '';
  fetch('http://localhost/eventee2/api/ws.php?action=displayEvents', {
    method: "GET",
    credentials: "include",
  })
    .then(function (response) {
      // loadPage();
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

  return (
    <div>
      <h2>Event List</h2>
      {/* <displayEvents /> */}
      <button onClick={DisplayEvents()}>Display Events</button>
      <div className="content">
        <table>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Event Description</th>
          <th>Event Category</th>
          <th>Event Address</th>
          <th>Event Location</th>
          <th>Event Date</th>
          <th>Event Time</th>
          <table id="eventsTable" className="striped">
          </table>
        </table>
      </div>
    </div>
  )
}

export default DisplayEvents;
