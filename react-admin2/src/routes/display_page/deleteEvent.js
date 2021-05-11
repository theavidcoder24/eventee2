
/* Delete Events */
function DeleteRemoveEvent(eventid) {
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
    removefd.append('action', 'DeleteRemoveEvent');
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

export default DeleteRemoveEvent;
