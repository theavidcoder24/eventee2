import React from 'react';
// import React, { useState } from 'react';
// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({
//     form: {
//         width: '100%',
//     }
// });

function Login(props) {
    // Declare a new state variable, which we'll call "count"  
    // const [count, setCount] = useState(0);
    // document.getElementById("loginmessage").innerHTML = "Loading...";

    // function processLogin() {
    // var log_email = document.getElementById("log_email");
    // var log_pass = document.getElementById("log_pass");
    // var login_details = new FormData();
    // login_details.set('action', 'login');
    // login_details.set('log_email', log_email.value);
    // login_details.set('log_pass', log_pass.value);
    // // login_details.set('login_user', login_user.value);
    // // each form element goes into the login_details object ^
    // fetch('http://localhost/eventee2/api/ws.php?action=adminLogin', {
    //     method: 'POST',
    //     // body: login_details,
    //     credentials: 'include',
    // })
    //     .then(function (response) {
    //         // Force error into console
    //         response.text().then(function (text) {
    //             console.log(text);
    //         });
    //         // HTTP Response Codes
    //         if (response.status === 202) {
    //             // localStorage.setItem('login', "true"); document.getElementById("loginmessage").innerHTML = "Success Your Logged In";
    //             props.setCount("Logged In");
    //             console.log('Login Successful');
    //         }
    //         if (response.status === 401) {
    //             console.log('Not permitted');
    //         }
    //         if (response.status === 501) {
    //             console.log('Not implemented');
    //         }
    //     })
    // }

    // const classes = useStyles();

    return (
        <form method="POST" action="api/ws.php" noValidate>
            <i className="material-icons prefix">email</i>
            <input id="log_email" name="log_email" type="email" className="validate" placeholder="Email" required></input>
            <i className="material-icons prefix">vpn_key</i>
            <input id="log_pass" name="log_pass" type="password" className="validate"
                pattern="[a-zA-Z0-9_.!@#$%^&*()]{2,}" placeholder="Password"></input>
            <a href="#">Forgot password?</a>
            <input type="hidden" name="action" value="login" id="login_user"></input>
            <button type="submit" name="login">Login</button>
            {/* onClick={processLogin()} */}
            <a to="/register">Don't have an account? Register</a>
        </form>
    );
}

export default Login;