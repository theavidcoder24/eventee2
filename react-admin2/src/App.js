import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
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
import { AppContext } from "./libs/contextLib";
import Login from './routes/login_page/login.js';
import IsLogged from './routes/login_page/IsLogged';
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
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      IsLogged();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }


  function HandleLogout() {
    UserLogout();
    userHasAuthenticated(false);
    // history.push("/login");
  }

  // const { isLoading } = useAuth0();

  // if (isLoading) return <div>Loading...</div>

  // const [fullname, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [dob, setDob] = useState("");
  // const [password, setPassword] = useState("");

  // const displayInfo = () => {
  //     console.log(fullname + email + phone + dob + password);
  // }

  return (
    !isAuthenticating && (
      <div className="App">
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    {isAuthenticated ? (
                      <Link onClick={HandleLogout}>Logout</Link>
                    ) :
                      (
                        <>
                          <Redirect to="/" />
                          <Link to="/login">Login</Link>

                          {/* // <li> <Link to="/signup">
                      //   <Link>Signup</Link>
                      // </Link></li>
                      // <li>
                      // <Link to="/login">
                      //   <Link>Login</Link>
                      // </Link></li> */}
                        </>
                      )
                    }
                  </li>
                  <li>
                    {isAuthenticated ? (
                      <Link to="/dashboard">Dashboard</Link>,
                      <Link to="/display">Display</Link>,
                      <Link to="/create">Create</Link>,
                      <Link to="/profile">Profile</Link>
                    ) :
                      (
                        <>
                        </>
                      )
                    }
                    {/* <Link to="/dashboard">Dashboard</Link> */}
                  </li>
                </ul>
              </nav>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/display">
                  <DisplayEvents />
                </Route>
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
              </Switch>
            </div>
          </Router>
        </AppContext.Provider>
        {/* <header className="App-header"></header> */}
      </div>
    )
  );
}

export default App;
