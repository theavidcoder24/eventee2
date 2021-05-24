import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
// require('dotenv').config();
// import env from "react-dotenv";
/* --------- Normal Admin --------- */
import './App.css';
import Login from './routes/login_page/login.js';
import UserLogout from './routes/login_page/logout';
import PostRegFetch from './routes/login_page/register';
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
          <nav className="deep-purple darken-3">
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

            <Route path="/register">
              <PostRegFetch />
            </Route>

            {loggedIn ? <>
              <Route path="/create">
                <CreateEvents />
              </Route>

              <Route path="/display">
                <DisplayEvents />
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
      <header className="App-header">
        {/* <FeedbackMessage /> */}
      </header>
    </div>
  );
}

export default App;
