import React from "react";
// import React, { useState } from 'react';
// import ReactDOM from "react-dom";
// import { useEffect, useState } from "react";
// require('dotenv').config();
// import env from "react-dotenv";
import './App.css';
// import { Login } from './routes/login_page/Login';
import { displayEvents } from './routes/display_page/displayEvents';
// import { CreateEvents } from './routes/create_page/createEvents.js';

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
                <Link to="/home">Home</Link>
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
            <Route path="/home">
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
      <form className="LoginForm" noValidate>
        <i className="material-icons prefix">email</i>
        <input id="log_email" name="log_email" type="email" className="validate" placeholder="Email" required></input>
        <i className="material-icons prefix">vpn_key</i>
        <input id="log_pass" name="log_pass" type="password" className="validate"
          pattern="[a-zA-Z0-9_.!@#$%^&*()]{2,}" placeholder="Password"></input>
        <p id="loginmessage">Please Login</p>
        <button type="Button">Login In</button>
        {/* onClick={() => setCount(count + 1)} */}
        <a href="#">Forgot password?</a>
        <a to="/register">Don't have an account? Register</a>
      </form>
    </div>
  )
}

function Create() {
  return (
    <div>
      <h2>Events Statistics</h2>
      <h4>Create Event</h4>
      <form action="api/ws.php" method="POST" onclick="return preventDefault()">
        <div className="input-field col s12">
          <i className="material-icons prefix">title</i>
          <input id="event_name" type="text" className="validate" placeholder="Event Name"></input>
          <span className="helper-text" data-error="Please enter a valid name" data-success="Correct"></span>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">notes</i>
          <textarea name="event_desc" id="event_desc" className="materialize-textarea" placeholder="Event Description"
            cols="30" rows="10"></textarea>
          <span className="helper-text" data-error="Please enter a valid email" data-success="Correct"></span>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">category</i>
          <select className="icons" id="event_cat">
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
          <span className="helper-text" data-error="Please enter a valid category" data-success="Correct"
            max="20"></span>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">map</i>
          <input id="event_address" type="text" className="validate" placeholder="Event Address"></input>
          <span className="helper-text" data-error="Please enter a valid password" data-success="Correct"
            max="20"></span>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">flag</i>
          <input id="event_loc" type="text" className="validate" placeholder="Event Location"></input>
          <span className="helper-text" data-error="Please enter a valid password" data-success="Correct"
            max="20"></span>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">date_range</i>
          <input type="text" className="datepicker autoClose" id="event_date" placeholder="Event Date"></input>
          <span className="helper-text" data-error="Please enter a valid date" data-success="Correct" max="20"></span>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">schedule</i>
          <input type="text" className="timepicker autoClose" id="event_time" placeholder="Event Time"></input>
          <span className="helper-text" data-error="Please enter a valid time" data-success="Correct" max="20"></span>
        </div>
        <input type="hidden" name="action" value="createEvent" id="createEvent"></input>
        <a className="btn indigo waves-effect waves-light modal-trigger" type="submit" name="createEvent"
          onclick="postCreateEvents()" href="#event_success">Create
                Event<i className="material-icons right">send</i></a>
        <div id="event_success" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>You've successfully created an Event!</h4>
            <a href="#my_events" onclick="displayMyEvents(); hideHome(); hideCreateEvent()"
              className="modal-close"><i className="material-icons">today</i>My Events</a>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </form>
    </div>
  )
}

function Register() {
  return (
    <div>
      <h2>Profile</h2>
      <h5 className="center">User Details</h5>
      <form action="api/ws.php" method="POST" onclick="return preventDefault()" novalidate>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">badge</i>
            <select className="icons" id="access_rights">
              <option value="" disabled selected>Access Rights</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <span className="helper-text" data-error="Please enter a valid category"
              data-success="Correct" max="20"></span>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input id="reg_name" type="text" className="validate tooltipped" placeholder="Full Name"
              data-position="top" data-tooltip="Must be more than 2 characters"></input>
            <span className="helper-text" data-error="Please enter a valid name"
              data-success="Correct"></span>
            <div className="errorMsg"></div>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">phone</i>
            <input id="reg_phone" type="tel" className="validate" placeholder="Phone Number"></input>
            <span className="helper-text" data-error="Please enter a valid phone number"
              data-success="Correct"></span>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input id="reg_email" name="reg_email" type="email" className="validate"
              placeholder="Email"></input>
            <span className="helper-text" data-error="Please enter a valid email"
              data-success="Correct"></span>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">cake</i>
            <input type="text" id="reg_dob" className="datepicker validate"
              placeholder="Date of Birth *"></input>
            <span className="helper-text" data-error="Please enter a valid date of birth"
              data-success="Correct" max="20"></span>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input id="reg_pass" name="reg_pass" type="password" className="validate"
              placeholder="Password"></input>
            <span className="helper-text" data-error="Please enter a valid password"
              data-success="Correct" max="20"></span>
          </div>
          <a className="waves-effect waves-light modal-trigger" href="#agree_terms"><i
            className="material-icons prefix">feed</i> Terms and conditions</a>
          <div id="agree_terms" className="modal">
            <div className="modal-content">
              <h4>Terms and Conditions</h4>
              <p>A bunch of text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis
              officia minima facilis quo? Voluptatum itaque, voluptatibus tempora odit
              ducimus
              neque consectetur consequuntur blanditiis facilis, nostrum sunt earum vero
              fugiat
              exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt,
              provident? Placeat quia cumque necessitatibus architecto quaerat qui vitae
              nam
              magnam accusantium, impedit, consequuntur quam? Dolorem labore dolore
              blanditiis ipsam facere.</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Disagree</a>
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
          <div className="center">
            <span className="center">Already a member?<a href="#login_container"
              onclick="displayLogin()">
              Login</a></span>
          </div>
        </div>
        <input type="hidden" name="action" value="register" id="register_user"></input>
        <button className="btn indigo waves-effect waves-light" type="submit" name="register"
          onclick="postRegFetch()">Join</button>
      </form>
    </div>
  )
}


function Display() {
  return (
    <div>
      <h2>About</h2>
      <h4>Event List</h4>
      <button onclick="displayEvents()">Display Events</button>
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

function Logout() {
  return (
    <div>
      <h2>Users</h2>
      <a>Logout</a>
    </div>
  )
}

export default App;
