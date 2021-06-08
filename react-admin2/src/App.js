import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
// require('dotenv').config();
// import env from "react-dotenv";
/* --------- Normal Admin --------- */
import './App.css';
import infographic from './assets/infographic.jpg';
import Login from './routes/login_page/login.js';
import UserLogout from './routes/login_page/logout';
import PostRegFetch from './routes/login_page/register';
import DisplayChangelog from './routes/changelog/displayChangelog';
import DisplayUser from './routes/login_page/displayUser';
import DisplayAllUsers from './routes/display_page/displayAllUsers';
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
          <nav className="cyan darken-3">
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
                    <Link to="/changelog">Changelog</Link>
                  </li>
                  <li>
                    <Link to="/displayevents">Events</Link>
                  </li>
                  <li>
                    <Link to="/create">Create Event</Link>
                  </li>
                  <li>
                    <Link to="/displayusers">Display Users</Link>
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
                  <li>
                    <Link to="/register">Register</Link>
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

            <Route path="/register">
              <PostRegFetch />
            </Route>

            {loggedIn ? <>
              <Route path="/create">
                <CreateEvents />
              </Route>

              <Route path="/displayevents">
                <DisplayEvents />
              </Route>

              <Route path="/displayusers">
                <DisplayAllUsers />
              </Route>

              <Route path="/profile">
                <DisplayUser />
              </Route>

              <Route path="/changelog">
                <DisplayChangelog />
              </Route>

              <Route exact path="/dashboard">
                <h3>Dashboard Section</h3>
                <img src={infographic}></img>
              </Route>
            </>
              :
              <></>
            }
          </Switch>
        </div>
      </Router>
      <header className="App-header">
        {/* <FeedbackMessage /> */}
      </header>
    </div>
  );
}

export default App;
