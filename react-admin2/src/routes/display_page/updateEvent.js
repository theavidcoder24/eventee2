
/* - Update Events - */
function PostUpdateEvent() {

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

    function updateEvent() {
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
}

export default PostUpdateEvent;