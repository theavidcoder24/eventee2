// import React from 'react';
// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({
//     cardsContainer: {
//         marginRight: -30,
//         marginTop: -30
//     },
//     form: {
//         width: '100%',
//         marginTop: theme.spacing(1),
//     }
// });

export function Login(props) {
    const handleLogin = () => {
        document.getElementById("loginmessage").innerHTML = "Loading...";
        var log_email = document.getElementById("log_email");
        var log_pass = document.getElementById("log_pass");
        var login_details = new FormData();
        login_details.set('action', 'login');
        login_details.set('log_email', log_email.value);
        login_details.set('log_pass', log_pass.value);
        // login_details.set('login_user', login_user.value);
        // each form element goes into the login_details object ^
        fetch('http://localhost/eventee2/api/ws.php?action=adminLogin', {
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
                    localStorage.setItem('login', "true"); document.getElementById("loginmessage").innerHTML = "Success Your Logged In";
                    props.setCount("Logged In");
                    console.log('Login Successful');
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                    document.getElementById("loginmessage").innerHTML = "Not implemented";
                }
                if (response.status === 501) {
                    console.log('Not implemented');
                    document.getElementById("loginmessage").innerHTML = "Try Again";
                }
            })
    }

    // const classes = useStyles();

    return (
        <form className="LoginForm" noValidate>
            <i class="material-icons prefix">email</i>
            <input id="log_email" name="log_email" type="email" class="validate" placeholder="Email" required></input>
            <i class="material-icons prefix">vpn_key</i>
            <input id="log_pass" name="log_pass" type="password" class="validate"
                pattern="[a-zA-Z0-9_.!@#$%^&*()]{2,}" placeholder="Password"></input>
            <p id="loginmessage">Please Login</p>
            <button type="Button" fullWidth variant="contained" color="primary" onClick={handleLogin}>Login In</button>
            <a href="#">Forgot password?</a>
            <a to="/register">Don't have an account? Register</a>
        </form>
    );
}

// export default DashboardComponent;