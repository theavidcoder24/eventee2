import React from 'react';
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { useEffect, useState } from "react";
// require('dotenv').config();
// import env from "react-dotenv";
// import { Auth0Provider } from "@auth0/auth0-react";
import './App.css';
import Login from './routes/login_page/login.js';
// import LoginButton from './routes/login_page/LoginButton';
// import LogoutButton from './routes/login_page/LogoutButton';
// import Profile from './routes/login_page/UserProfile';
import DisplayEvents from './routes/display_page/displayEvents';
import CreateEvents from './routes/create_page/createEvents.js';
// import DashboardComponent from './routes/dashboard/DashboardComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { useAuth0 } from '@auth0/auth0-react';
// import CountContext from './context/countcontext';

function App() {
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
                <Link to="/">Login</Link>
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
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/dashboard">
            </Route>
            <Route path="/display">
              <Display />
            </Route>
            <Route path="/create">
              <CreateEvents />
            </Route>
            <Route path="/profile">
            </Route>
            <Route exact path="/">
              <Login />
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
    <Login />
    // <>
    //   <LoginButton />
    //   <LogoutButton />
    // </>
  )
}

// function Dashboard() {

// }

// function Create() {
//   return (
//     <div>
//       <CreateEvents />
//     </div>
//   )
// }

function Display() {
  return (
    <div>
      <DisplayEvents />
    </div>
  )
}

function UserProfile() {
  return (
    <div>
      <h2>View Profile</h2>
      {/* <Profile /> */}
    </div>
  )
}

export default App;
