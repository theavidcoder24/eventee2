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
                    // sessionStorage.setItem("UserID", UserID);
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
                    <div className="namel">
                        <label>Username</label>
                        <input
                            type="text"
                            autoFocus
                            name="namel"
                            id={this.state.namel}
                            onChange={this.set}
                        />
                    </div>
                    <div className="passwordl">
                        <label>Password</label>
                        <input
                            type="password"
                            name="passwordl"
                            value={this.state.passwordl}
                            type="password"
                            onChange={this.set}
                        />
                    </div>
                    <button
                        className="submit-btn"
                        type="submit"
                        name="action"
                        onClick={this.login}
                    >
                        Login
          </button>
                </form>
            </div>
        );
    }
}