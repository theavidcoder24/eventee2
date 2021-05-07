import React from "react";
// import React, { useState } from 'react';
// import ReactDOM from "react-dom";
// import { useEffect, useState } from "react";
// require('dotenv').config()
import './App.css';
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css";
// import { Login } from './routes/login_page/login.js';
import {Login } from './routes/login_page/login.js';
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/users">
              <Users />
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

    </div>
  )
}

function Statistics() {
  return (
    <div>
      <h2>Events Statistics</h2>

    </div>
  )
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>

    </div>
  )
}


function About() {
  return (
    <div>
      <h2>Create Events</h2>

    </div>
  )
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
