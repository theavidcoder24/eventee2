import React from "react";
// import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.errorMessage = { errorMessage: "" };
        this.logout = this.logout.bind(this);
        // this.ipwhitelist = this.ipwhitelist.bind(this);
    }


    /* - Login - */
    postLoginFetch() {
        loadPage();
        var log_email = document.getElementById("log_email");
        var log_pass = document.getElementById("log_pass");
        var login_details = new FormData();
        login_details.append('action', 'login_user');
        login_details.append('log_email', log_email.value);
        login_details.append('log_pass', log_pass.value);
        login_details.append('login_user', login_user.value);
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
                    var log_email = document.getElementById("log_email");
                    var log_pass = document.getElementById("log_pass");
                    var login_details = new FormData();
                    login_details.append('log_email', log_email.value);
                    login_details.append('log_pass', log_pass.value);
                    localStorage.setItem('LoginEmail', log_email.value);
                    // sessionStorage.setItem("userID", userID);
                    console.log('Login Successful');
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                    errormessage("Error: Not implemented");
                    localStorage.setItem('login', "false");
                    fetch('api/ws.php?action=logout', {
                        method: 'GET'
                    })
                }
                if (response.status === 501) {
                    console.log('Not implemented');
                    errormessage("Error: Not implemented");
                    localStorage.setItem('login', "false");
                    fetch('api/ws.php?action=logout', {
                        method: 'GET'
                    })
                }
            })
            .catch(function (err) {
                console.log("Connection unavailable");
                console.log(err);
            });
    }


    /* - is logged in Fetch - */
    isLogged() {
        loadPage();
        fetch('api/ws.php?action=is_logged_in', {
            method: 'GET',
        })
            // HTTP Response Codes
            .then(function (response) {
                // response.text().then(function (text) {
                //   console.log(text);
                // });
                if (response.status === 202) {
                    localStorage.setItem('login', "true");
                    localStorage.setItem('LoginEmail', log_email);
                    if (localStorage.getItem('login') == 'true') {
                        console.log('Logged In!!');
                        sessionStorage.setItem("login", "true");
                        // document.getElementById("result").innerHTML = sessionStorage.getItem("currentloggedin");
                        // LoginEmail - localstorage
                        // Check browser support
                        // if (typeof (Storage) !== "undefined") {
                        //   // Store
                        //   sessionStorage.setItem("currentloggedin", log_email.value);
                        //   // Retrieve
                        //   document.getElementById("result").innerHTML = sessionStorage.getItem("currentloggedin");
                        // } else {
                        //   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
                        // }
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
                // console.log("Connection unavailable");
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