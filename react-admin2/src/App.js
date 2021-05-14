import React from 'react';
import { useEffect, useState } from "react";
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
import Login from './routes/login_page/login.js';
import isLogged from './routes/login_page/isLogged';
// import logout from './routes/login_page/logout';
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

// import CountContext from './context/countcontext';

function ProcessAdmin(props) {

  if (props.count === "Logged In") {

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
                  <Link to="/">Dashboard</Link>
                  {/* Change to dashboard on login  */}
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
              <Route exact path="/">
                <DisplayEvents />
              </Route>
              {/* <Route exact path="/logout">
                <Logout setCount={props.setCount} />
              </Route> */}
            </Switch>
          </div>
        </Router>
        {/* <header className="App-header"></header> */}
      </div>
    );
  }
  else {
    // document.body.style.backgroundColor = "black";
    return (
      <div>
        <Login setCount={props.setCount} />
        <h2>Not Logged in</h2>
      </div>
    );
  }
}

function App() {
  const [count, setCount] = useState();

  const loginSuccess = () => {
    setCount("Logged In");
  }

  const loginFailed = () => {
    setCount("Not Logged In");
  }

  useEffect(() => {
    isLogged(loginSuccess, loginFailed);

  }, []);

  return <ProcessAdmin count={count} setCount={setCount} />;

  function Home() {
    return (
      <Login />
      // <>
      //   <LoginButton />
      //   <LogoutButton />
      // </>
    )
  }

  function Dashboard() {
    return (
      <div>
        <h2>SH</h2>
        {/* <DashboardComponent /> */}
      </div>
    )
  }

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
}

export default App;
