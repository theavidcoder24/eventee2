import React from "react";
// import React, { useState } from 'react';
// import ReactDOM from "react-dom";
// import { useEffect, useState } from "react";
// require('dotenv').config();
// import env from "react-dotenv";
import './App.css';
import Login from './routes/login_page/login';
import PostRegFetch from './routes/login_page/register.js';
import DisplayEvents from './routes/display_page/displayevents.js';
import CreateEvents from './routes/create_page/createEvents.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/display">Display</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/display">
              <Display />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <header className="App-header"></header> */}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Login />
    </div>
  )
}

function Create() {
  return (
    <div>
      <CreateEvents />
    </div>
    // <div>
    //   <h2>Create Event</h2>
    //   <form action="api/ws.php" method="POST" onClick="return preventDefault()">
    //     <div className="input-field col s12">
    //       <i className="material-icons prefix">title</i>
    //       <input id="event_name" type="text" className="validate" placeholder="Event Name"></input>
    //       <span className="helper-text" data-error="Please enter a valid name" data-success="Correct"></span>
    //     </div>
    //     <div className="input-field col s12">
    //       <i className="material-icons prefix">notes</i>
    //       <textarea name="event_desc" id="event_desc" className="materialize-textarea" placeholder="Event Description"
    //         cols="30" rows="10"></textarea>
    //       <span className="helper-text" data-error="Please enter a valid email" data-success="Correct"></span>
    //     </div>
    //     <div className="input-field col s12">
    //       <i className="material-icons prefix">category</i>
    //       <select className="icons" id="event_cat">
    //         <option value="" disabled selected>Choose your Category</option>
    //         <option value="Auto" data-icon="src/images/icons/round_drive_eta_black_48dp.png">
    //           Auto</option>
    //         <option value="Business" data-icon="src/images/icons/baseline_business_center_black_48dp.png">
    //           Business</option>
    //         <option value="Charity" data-icon="src/images/icons/round_payments_black_48dp.png">
    //           Charity
    //                 </option>
    //         <option value="Family" data-icon="src/images/icons/round_family_restroom_black_48dp.png">Family
    //                 </option>
    //         <option value="Fashion" data-icon="src/images/icons/round_shopping_cart_black_48dp.png">Fashion
    //                 </option>
    //         <option value="Food & Drink" data-icon="src/images/icons/baseline_restaurant_black_48dp.png">
    //           Food & Drink
    //                 </option>
    //       </select>
    //       <span className="helper-text" data-error="Please enter a valid category" data-success="Correct"
    //         max="20"></span>
    //     </div>
    //     <div className="input-field col s12">
    //       <i className="material-icons prefix">map</i>
    //       <input id="event_address" type="text" className="validate" placeholder="Event Address"></input>
    //       <span className="helper-text" data-error="Please enter a valid password" data-success="Correct"
    //         max="20"></span>
    //     </div>
    //     <div className="input-field col s12">
    //       <i className="material-icons prefix">flag</i>
    //       <input id="event_loc" type="text" className="validate" placeholder="Event Location"></input>
    //       <span className="helper-text" data-error="Please enter a valid password" data-success="Correct"
    //         max="20"></span>
    //     </div>
    //     <div className="input-field col s12">
    //       <i className="material-icons prefix">date_range</i>
    //       <input type="text" className="datepicker autoClose" id="event_date" placeholder="Event Date"></input>
    //       <span className="helper-text" data-error="Please enter a valid date" data-success="Correct" max="20"></span>
    //     </div>
    //     <div className="input-field col s12">
    //       <i className="material-icons prefix">schedule</i>
    //       <input type="text" className="timepicker autoClose" id="event_time" placeholder="Event Time"></input>
    //       <span className="helper-text" data-error="Please enter a valid time" data-success="Correct" max="20"></span>
    //     </div>
    //     <input type="hidden" name="action" value="createEvent" id="createEvent"></input>
    //     <a className="btn indigo waves-effect waves-light modal-trigger" type="submit" name="createEvent"
    //       onclick="postCreateEvents()" href="#event_success">Create
    //             Event<i className="material-icons right">send</i></a>
    //     <div id="event_success" className="modal bottom-sheet">
    //       <div className="modal-content">
    //         <h4>You've successfully created an Event!</h4>
    //         <a href="#my_events" onclick="displayMyEvents(); hideHome(); hideCreateEvent()"
    //           className="modal-close"><i className="material-icons">today</i>My Events</a>
    //       </div>
    //       <div className="modal-footer">
    //         <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  )
}

function Register() {
  return (
    <div>
      <PostRegFetch />
    </div>
  )
}


function Display() {
  return (
    <div>
      <DisplayEvents />
    </div>
  )
}

function Logout() {
  return (
    <div>
      <h2>Users</h2>
      <a>Logout</a>
    </div>
  )
}

export default App;
