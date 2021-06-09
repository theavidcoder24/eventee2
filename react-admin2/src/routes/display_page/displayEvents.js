import React, { useEffect, useState } from 'react';
// import { createUseStyles } from 'react-jss';
// import DeleteRemoveEvent from './deleteEvent';
// import fillUpdate from './updateEvent.js';
// import updateEvent from './updateEvent.js';

/* - Display Events - */
function DisplayEvents() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    pullEvents();
  }, []);

  function pullEvents() {
    fetch('http://localhost/eventee2/api/ws.php?action=displayEvents',
      // https://adminpanel.malloriecini.com/api/ws.php?action=displayEvents
      // http://localhost/eventee2/api/ws.php?action=displayEvents
      {
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
          setEvent([]);
        }
      })
  }

  /* Delete Events */
  function DeleteRemoveEvent(eventid) {
    console.log("Delete event with id " + eventid);

    var removefd = new FormData();
    removefd.append('action', 'DeleteRemoveEvent');
    removefd.append('eventid', eventid);

    fetch('http://localhost/eventee2/api/ws.php?action=removeEvent', {
      // http://localhost/eventee2/api/ws.php?action=removeEvent
      // https://adminpanel.malloriecini.com/api/ws.php?action=removeEvent
      method: 'POST',
      body: removefd,
      credentials: 'include'
    })
      .then(async function (response) {
        // Force error into console
        response.text().then(function (text) {
          console.log(text);
        });
        // HTTP Response Codes
        if (response.status == 202) {
          // successmessage("Success: Removal Successful");
        }
        if (response.status === 400) {
          console.log('Bad Request');
          // errormessage('Error: Bad Request');
          return;
        }
        if (response.status === 401) {
          console.log('Not permitted');
          // errormessage('Error: Not Permitted');
          return;
        }
      });
  }

  return (
    <div>
      <h3>Events List</h3>
      <div className="content">
        <table className="striped">
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Event Description</th>
          <th>Event Category</th>
          <th>Event Address</th>
          <th>Event Location</th>
          <th>Event Date</th>
          <th>Event Time</th>
          {event.map((event, index) => (
            <tr>
              <td>{event.eventID}</td>
              <td>{event.eventName}</td>
              <td>{event.eventDescription}</td>
              <td>{event.eventCategory}</td>
              <td>{event.eventAddress}</td>
              <td>{event.eventLocation}</td>
              <td>{event.eventDate}</td>
              <td>{event.eventTime}</td>
              <button onClick={() => DeleteRemoveEvent(event.eventID)}><i class="material-icons">delete</i></button>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default DisplayEvents;
