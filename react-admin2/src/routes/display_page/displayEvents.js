import React, { useEffect, useState } from 'react';
// import { createUseStyles } from 'react-jss';
// import CreateEvents from './routes/create_page/createEvents.js';
import DeleteRemoveEvent from './deleteEvent.js';
import fillUpdate from './updateEvent.js';
import updateEvent from './updateEvent.js';

/* - Display Events - */
function DisplayEvents() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    pullEvents();
  }, []);

  function pullEvents() {
    fetch('http://localhost/eventee2/api/ws.php?action=displayEvents', {
      method: "GET",
      credentials: "include",
    }).then((res) => {
      if (res.status === 202) {
        res.json().then((data) => {
          setEvent(data);
          console.log(data);
        });
      }
      if (res.status === 501) {
        setEvent("no event");
      }
    })
  }

  return (
    <div>
      <h2>Events List</h2>
      {/* <button onClick={pullEvents()}>Display Events</button> */}
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
          {/* <table id="eventsTable" className="striped">
          </table> */}
        </table>
        {event.map((event, index) => (
          <tr>
            <td>{event.eventID}</td>,
            <td>{event.eventName}</td>,
            <td>{event.eventDescription}</td>,
            <td>{event.eventCategory}</td>,
            <td>{event.eventAddress}</td>,
            <td>{event.eventLocation}</td>,
            <td>{event.eventDate}</td>,
            <td>{event.eventTime}</td>
            {/* <button href="#update_events" class="modal-trigger" onclick={fillUpdate(' + row.eventID + ')} value="' + row.eventID + '"><i class="material-icons">edit</i></button> */}
            <div id="update_events" class="modal">
              <h5 class="modal-close right" onclick="closeModal()">&#10005;</h5>
              <div class="modal-content">
                <h4>Update Events</h4>
                <form action="api/ws.php" method="POST" onclick="return preventDefault()" novalidate>
                  <div class="input-field">
                    <i class="material-icons prefix">title</i>
                    <input id="update_ev_name" name="update_ev_name" placeholder="Event Name" type="text"></input>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">notes</i>
                    <textarea id="update_ev_desc" name="update_ev_desc" class="materialize-textarea"
                      placeholder="Event Description"></textarea>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">category</i>
                    <input type="text" id="update_ev_cat" name="update_ev_cat" placeholder="Enter Your Event Type"></input>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">map</i>
                    <input type="text" id="update_ev_address" name="update_ev_address" placeholder="Enter Your Address"></input>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">flag</i>
                    <input type="text" id="update_ev_loc" name="update_ev_loc" placeholder="Event Location"></input>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">date_range</i>
                    <input type="text" id="update_ev_date" class="datepicker" placeholder="Event Date"></input>
                  </div>
                  <div class="input-field col s6">
                    <i class="material-icons prefix">schedule</i>
                    <input type="text" id="update_ev_time" class="timepicker" placeholder="Event Time"></input>
                  </div>
                  <input type="hidden" name="eventid" value="`+ row.eventID + `" id="eventid"></input>
                  <input type="hidden" name="action" value="update" id="updateEvent"></input>
                  {/* <button class="btn waves-effect waves-light" type="submit" onClick={updateEvent()}>Update
                        Event</button> */}
                </form>
              </div>

            </div>
            {/* <button onClick={DeleteRemoveEvent(' + row.eventID + ')} value="' + row.eventID + '"><i class="material-icons">delete</i></button> */}
          </tr>
        ))}
      </div>
    </div>
  )
}

export default DisplayEvents;
