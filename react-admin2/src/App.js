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
