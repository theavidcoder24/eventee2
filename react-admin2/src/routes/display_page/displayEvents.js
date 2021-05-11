import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
// import { createUseStyles } from 'react-jss';
// import CreateEvents from './routes/create_page/createEvents.js';
// import DeleteRemoveEvent from './deleteEvent.js';
// import PostUpdateEvent from './updateEvent.js';

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
          </tr>
        ))}

      </div>
    </div>
  )
}

export default DisplayEvents;
