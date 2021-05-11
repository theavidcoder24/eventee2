// import React, { useState } from 'react';
import React from 'react'
// import ReactDOM from "react-dom";
// import { useEffect, useState } from "react";
// require('dotenv').config();
// import env from "react-dotenv";
import './App.css';
import Login from './routes/login_page/login';
import PostRegFetch from './routes/login_page/register.js';
import DisplayEvents from './routes/display_page/displayEvents';
import CreateEvents from './routes/create_page/createEvents.js';
// import DashboardComponent from './routes/dashboard/DashboardComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

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
            <Route path="/register" component={PostRegFetch}>
              {/* <Register /> */}
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route exact path="/">
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
      <Login />
    </div>
  )
}

// function Register() {
//   return (
//     <div>
//       <PostRegFetch />
//     </div>
//   )
// }

function Create() {
  return (
    <div>
      <CreateEvents />
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
