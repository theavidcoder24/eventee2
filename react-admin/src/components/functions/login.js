import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";
import React from "react";
// import ReactDOM from "react-dom";
import "materialize-css";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    postLoginFetch() {
        loadPage();
        var log_email = document.getElementById("log_email");
        var log_pass = document.getElementById("log_pass");
        var login_details = new FormData();
        login_details.set('action', 'login');
        login_details.set('log_email', log_email.value);
        login_details.set('log_pass', log_pass.value);
        login_details.set('login_user', login_user.value);
        // each form element goes into the login_details object ^
        fetch('api/ws.php?action=login', {
            method: 'POST',
            body: login_details,
            credentials: 'include',
        })
            .then(function (response) {
                // Force error into console
                response.text().then(function (text) {
                    console.log(text);
                });
                // HTTP Response Codes
                if (response.status === 202) {
                    localStorage.setItem('login', "true");
                    successmessage('Yay Successfully Logged in!');
                    displayUserInfo();
                    console.log('Login Successful');
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                    errormessage("Error: Not implemented");
                    // localStorage.setItem('login', "false");
                    // fetch('api/ws.php?action=logout', {
                    //   method: 'GET'
                    // })
                }
                if (response.status === 501) {
                    console.log('Not implemented');
                    errormessage("Error: Not implemented");
                    // localStorage.setItem('login', "false");
                    // fetch('api/ws.php?action=logout', {
                    //   method: 'GET'
                    // })
                }
            })
            .catch(function (err) {
                console.log("Connection unavailable");
                console.log(err);
            });
    }
    render() {
        return (
            <div className="Login">
                {this.state.errorMessage && (
                    <p className="error"> {this.state.errorMessage} </p>
                )}
                <form>
                    <div className="log_email">
                        <label>Email</label>
                        <input
                            type="text"
                            autoFocus
                            name="log_email"
                            id={this.state.log_email}
                            onChange={this.set}
                        />
                    </div>
                    <div className="log_pass">
                        <label>Password</label>
                        <input
                            type="password"
                            name="log_pass"
                            value={this.state.log_pass}
                            type="password"
                            onChange={this.set}
                        />
                    </div>
                    <input
                        type="hidden"
                        name="action"
                        value="login"
                        id={this.state.login_admin}></input>
                    <button
                        className="submit-btn"
                        type="submit"
                        name="login"
                        onClick={this.login}
                    >
                        Login
          </button>
                </form>
            </div>
        );
    }

    
/* - is logged in Fetch - */
isLogged() {
    loadPage();
    fetch('api/ws.php?action=is_logged_in', {
      method: 'GET',
    })
      // HTTP Response Codes
      .then(function (response) {
        if (response.status === 202) {
          localStorage.setItem('login', "true");
          localStorage.setItem('LoginEmail', log_email);
          if (localStorage.getItem('login') == 'true') {
            console.log('Logged In!!');
            sessionStorage.setItem("login", "true");
            hideAll();
            displayUserInfo();
          }
        }
        else {
          localStorage.setItem('login', "false");
          userLogout();
          hideUserInfo();
        }
        if (response.status === 401) {
          loadPage();
          console.log('Not logged in failed');
          errormessage("Error: Not implemented");
          localStorage.setItem('login', "false");
          if (localStorage.getItem('login') == 'false') {
            userLogout();
            hideUserInfo();
          }
          return;
        }
        if (response.status === 429) {
          console.log('Rate limit exceeded');
          localStorage.setItem('login', "false");
          if (localStorage.getItem('login') == 'false') {
            userLogout();
            hideUserInfo();
          }
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
  /* - User Logout - */
  userLogout() {
    fetch('api/ws.php?action=logout', {
      method: 'GET'
    })
      .then(function (response) {
        // HTTP Response Codes
        if (response.status === 202) {
          console.log("Logout Success");
          successmessage("Success, You're Logged Out");
          localStorage.setItem('login', "false");
          sessionStorage.clear();
          hideUserInfo();
        }
        if (response.status === 401) {
          console.log("Not permitted");
          errormessage("Internal Server - Not Permitted");
          return;
        }
        if (response.status === 501) {
          console.log("Logout Failed");
          return;
        }
        if (response.status === 429) {
          console.log('Rate limit exceeded');
        }
        // else {
        //   errormessage("Error - Internal Server error not logged out");
        // }
      })
      .catch(function (err) {
        // console.log("Connection unavailable");
        console.log(err);
      });
  }
}