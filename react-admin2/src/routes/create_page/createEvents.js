import React from 'react';
import { useForm } from "react-hook-form";
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";

/* - Create Events - */
function CreateEvents() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // document.addEventListener('DOMContentLoaded', function () {
    //     var options = {
    //         defaultDate: new Date(),
    //         setDefaultDate: true
    //     };
    //     var elems = document.querySelectorAll('.datepicker');
    //     var instances = M.Datepicker.init(elems, options);
    //     instances.setDate(new Date());
    // });

    const addEvent = () => {
        var event_name = document.getElementById("event_name");
        var event_desc = document.getElementById("event_desc");
        var event_cat = document.getElementById("event_cat");
        var event_address = document.getElementById("event_address");
        var event_loc = document.getElementById("event_loc");
        var event_date = document.getElementById("event_date");
        var event_date = document.getElementById("event_date");
        var event_time = document.getElementById("event_time");
        var createEvent = document.getElementById("createEvent");
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
        fetch('https://eventeeadmin.malloriecini.com/api/ws.php?action=createEvents', {
            // https://adminpanel.malloriecini.com/api/ws.php?action=createEvents
            // http://localhost/eventee2/api/ws.php?action=createEvents
            method: 'POST',
            body: fd,
            credentials: 'include'
        })
            // Force error into console
            .then(function (response) {
                // HTTP Response Codes
                if (response.status === 202) {
                    console.log('Creation Successful');
                    document.getElementById("successmessage").innerHTML = "Creation Successful";
                    return;
                }
                if (response.status === 200) {
                    console.log('Fill in empty input fields');
                    document.getElementById("errormessage").innerHTML = "Fill in empty input fields";
                    return;
                }
                if (response.status === 400) {
                    console.log('Bad Request');
                    document.getElementById("errormessage").innerHTML = "Error: Bad Request";
                    return;
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                    document.getElementById("errormessage").innerHTML = "Error: Not permitted";
                    return;
                }
                if (response.status === 501) {
                    console.log('Not implemented :(');
                    document.getElementById("errormessage").innerHTML = "Error: Not implemented";
                    return;
                }
            });
    }

    return (
        <div>
            <h3>Create Event</h3>
            <p id="successmessage" className="green"></p>
            <p id="errormessage" className="red"></p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field col s12">
                    <i className="material-icons prefix">title</i>
                    <input id="event_name" type="text" className="validate" placeholder="Event Name" {...register("eventname", { required: true })} required></input>
                    {/* errors will return when field validation fails  */}
                    {errors.eventname && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid name with more than 1 character" data-success="Correct"></span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">notes</i>
                    <textarea name="event_desc" id="event_desc" className="materialize-textarea" placeholder="Event Description"
                        cols="30" rows="10" {...register("eventdesc", { required: true, maxLength: 500 })} required></textarea>
                    {/* errors will return when field validation fails  */}
                    {errors.eventdesc && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid description with max length of 500 characters" data-success="Correct"></span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">category</i>
                    <select {...register("eventcat", { required: true })} className="icons" id="event_cat" required>
                        <option value="" selected disabled>Choose your Category</option>
                        <option value="Auto"
                            data-icon="src/images/icons/round_drive_eta_black_48dp.png">
                            Auto</option>
                        <option value="Business"
                            data-icon="src/images/icons/baseline_business_center_black_48dp.png">
                            Business</option>
                        <option value="Charity"
                            data-icon="src/images/icons/round_payments_black_48dp.png">
                            Charity
                        </option>
                        <option value="Comedy"
                            data-icon="src/images/icons/round_family_restroom_black_48dp.png">Comedy
                        </option>
                        <option value="Family"
                            data-icon="src/images/icons/round_family_restroom_black_48dp.png">Family
                        </option>
                        <option value="Fashion"
                            data-icon="src/images/icons/round_shopping_cart_black_48dp.png">Fashion
                        </option>
                        <option value="Festivals & Fairs"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Festivals & Fairs
                        </option>
                        <option value="Film & Media"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Film & Media
                        </option>
                        <option value="Food & Drink"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Food & Drink
                        </option>
                        <option value="Health & Beauty"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Health & Beauty
                        </option>
                        <option value="Music"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Music
                        </option>
                        <option value="Networking"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Networking
                        </option>
                        <option value="Nightlife"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Nightlife
                        </option>
                        <option value="Performance"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Performance
                        </option>
                        <option value="Politics"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Politics
                        </option>
                        <option value="Sports"
                            data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
                            Sports
                        </option>
                    </select>
                    {/* errors will return when field validation fails  */}
                    {errors.eventcat && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid category" data-success="Correct"
                        max="20"></span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">map</i>
                    <input id="event_address" type="text" className="validate" placeholder="Event Address" {...register("eventaddress", { required: true, maxLength: 200 })} required></input>
                    {/* errors will return when field validation fails  */}
                    {errors.eventaddress && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid address" data-success="Correct"
                        max="20"></span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">flag</i>
                    <input id="event_loc" type="text" className="validate" placeholder="Event Location" {...register("eventloc", { required: true, maxLength: 50 })} required></input>
                    {/* errors will return when field validation fails  */}
                    {errors.eventloc && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid location" data-success="Correct"
                        max="20"></span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <input type="date" className="datepicker autoClose" id="event_date" min="2021-01-01" placeholder="Event Date" {...register("eventdate", { required: true, minLength: 4 })} required></input>
                    {/* errors will return when field validation fails  */}
                    {errors.eventdate && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid date" data-success="Correct" max="20"></span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">schedule</i>
                    <input type="text" className="timepicker autoClose" id="event_time" placeholder="Event Time" {...register("eventtime", { required: true, maxLength: 10 })} required></input>
                    {/* errors will return when field validation fails  */}
                    {errors.eventtime && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid time" data-success="Correct" max="20"></span>
                </div>
                <input type="hidden" name="action" value="createEvent" id="createEvent"></input>
                <button type="submit" id="createEvent" className="btn indigo waves-effect waves-light modal-trigger" name="createEvent" onClick={addEvent}>Create Event<i className="material-icons right">send</i></button>
                <div id="event_success" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4>You've successfully created an Event!</h4>
                        <a href="#my_events" className="modal-close"><i className="material-icons">today</i>My Events</a>
                        {/* Re route to display events ^ */}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default CreateEvents;
