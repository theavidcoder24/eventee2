import React from 'react';
import { useEffect, useState } from "react";
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


function ProcessAdmin(props) {

  if (props.count === "Logged In") {
    document.body.style.backgroundColor = "white";
    console.log("Im logged in");

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
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                {/* <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li> */}
                <li>
                  <Link to="/display">Display</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <UserLogout setCount={props.setCount} />
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
                <h3>Dashboard Section</h3>
              </Route>
            </Switch>
          </div>
        </Router>
        {/* <header className="App-header"></header> */}
      </div>
    );
  }
  else {
    document.body.style.backgroundColor = "lavender";
    console.log("Not logged in hehe");
    return (
      <Login setCount={props.setCount} />
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
    IsLogged(loginSuccess, loginFailed);
  }, []);

  return <ProcessAdmin count={count} setCount={setCount} />;
}

export default App;
