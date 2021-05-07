// import React from 'react';

/* - Create Events - */
export function CreateEvents() {
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
    // fd.append('event_name', event_name.value);
    // fd.append('event_desc', event_desc.value);
    // fd.append('event_cat', event_cat.value);
    // fd.append('event_address', event_address.value);
    // fd.append('event_loc', event_loc.value);
    // fd.append('event_date', event_date.value);
    // fd.append('event_time', event_time.value);
    // fd.append('createEvent', createEvent.value);
    // each form element goes into the fd object ^
    fetch('http://localhost/eventee2/api/ws.php?action=createEvents', {
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
                // successmessage("Success: Event Created!");
                return;
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
            if (response.status === 501) {
                console.log('Not implemented :(');
                // errormessage('Error: Not Implemented');
                return;
            }
        });

    return (
        <div>
            <h4>Create Event</h4>
            <form action="api/ws.php" method="POST" onclick="return preventDefault()">
                <div class="input-field col s12">
                    <i class="material-icons prefix">title</i>
                    <input id="event_name" type="text" class="validate" placeholder="Event Name"></input>
                    <span class="helper-text" data-error="Please enter a valid name" data-success="Correct"></span>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">notes</i>
                    <textarea name="event_desc" id="event_desc" class="materialize-textarea" placeholder="Event Description"
                        cols="30" rows="10"></textarea>
                    <span class="helper-text" data-error="Please enter a valid email" data-success="Correct"></span>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">category</i>
                    <select class="icons" id="event_cat">
                        <option value="" disabled selected>Choose your Category</option>
                        <option value="Auto" data-icon="src/images/icons/round_drive_eta_black_48dp.png">
                            Auto</option>
                        <option value="Business" data-icon="src/images/icons/baseline_business_center_black_48dp.png">
                            Business</option>
                        <option value="Charity" data-icon="src/images/icons/round_payments_black_48dp.png">
                            Charity
                    </option>
                        <option value="Family" data-icon="src/images/icons/round_family_restroom_black_48dp.png">Family
                    </option>
                        <option value="Fashion" data-icon="src/images/icons/round_shopping_cart_black_48dp.png">Fashion
                    </option>
                        <option value="Food & Drink" data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Food & Drink
                    </option>
                    </select>
                    <span class="helper-text" data-error="Please enter a valid category" data-success="Correct"
                        max="20"></span>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">map</i>
                    <input id="event_address" type="text" class="validate" placeholder="Event Address"></input>
                    <span class="helper-text" data-error="Please enter a valid password" data-success="Correct"
                        max="20"></span>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">flag</i>
                    <input id="event_loc" type="text" class="validate" placeholder="Event Location"></input>
                    <span class="helper-text" data-error="Please enter a valid password" data-success="Correct"
                        max="20"></span>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">date_range</i>
                    <input type="text" class="datepicker autoClose" id="event_date" placeholder="Event Date"></input>
                    <span class="helper-text" data-error="Please enter a valid date" data-success="Correct" max="20"></span>
                </div>
                <div class="input-field col s12">
                    <i class="material-icons prefix">schedule</i>
                    <input type="text" class="timepicker autoClose" id="event_time" placeholder="Event Time"></input>
                    <span class="helper-text" data-error="Please enter a valid time" data-success="Correct" max="20"></span>
                </div>
                <input type="hidden" name="action" value="createEvent" id="createEvent"></input>
                <a class="btn indigo waves-effect waves-light modal-trigger" type="submit" name="createEvent"
                    onclick="postCreateEvents()" href="#event_success">Create
                Event<i class="material-icons right">send</i></a>
                <div id="event_success" class="modal bottom-sheet">
                    <div class="modal-content">
                        <h4>You've successfully created an Event!</h4>
                        <a href="#my_events" onclick="displayMyEvents(); hideHome(); hideCreateEvent()"
                            class="modal-close"><i class="material-icons">today</i>My Events</a>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </form>

        </div>
    )
}


