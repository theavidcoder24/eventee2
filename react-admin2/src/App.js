import React, { useState, useEffect } from "react";
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
// import ReactDOM from 'react-dom';
// require('dotenv').config();
// import env from "react-dotenv";
/* --------- Auth0 Componenets --------- */
// import { useAuth0 } from '@auth0/auth0-react';
// import LoginButton from './routes/login_page/LoginButton';
// import LogoutButton from './routes/login_page/LogoutButton';
// import Profile from './routes/login_page/UserProfile';
/* --------- Normal Admin --------- */
import './App.css';
// import { AppContext } from "./libs/contextLib";
import Login from './routes/login_page/login.js';
// import IsLogged from './routes/login_page/IsLogged';
import UserLogout from './routes/login_page/logout';
import PostRegFetch from './routes/login_page/register';
import DisplayEvents from './routes/display_page/displayEvents';
import CreateEvents from './routes/create_page/createEvents.js';
// import DashboardComponent from './routes/dashboard/DashboardComponent';
// import CountContext from './context/countcontext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('login') == 'true') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              {loggedIn ?
                <>
                  <li>
                    <a onClick={() => { UserLogout(setLoggedIn) }}>Logout</a>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/display">Display</Link>
                  </li>
                  <li>
                    <Link to="/create">Create</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </>
                :
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              }
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} />
            </Route>
            <Route path="/display">
              <DisplayEvents />
            </Route>
            {loggedIn ? <>
            <Route path="/create">
              <CreateEvents />
            </Route>

            <Route path="/profile">
            </Route>

            <Route path="/register">
              <PostRegFetch />
            </Route>

            <Route exact path="/dashboard">
              <h3>Dashboard Section</h3>
            </Route>
            </>
            :
            <></>
            }
          </Switch>
        </div>
      </Router>
      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
