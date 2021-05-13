import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import { createUseStyles } from 'react-jss';
// import { Link } from React;

// const useStyles = createUseStyles({
//     form: {
//         width: '100%',
//     }
// });

function Login() {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const displayInfo = () => {
    //     console.log(email + password);
    // }

    // const handleLogin = () => {
    // const [error, setError] = useState("");
    // Declare a new state variable, which we'll call "count"  
    // const [count, setCount] = useState(0);

    function processLogin() {
        var log_email = document.getElementById("log_email");
        var log_pass = document.getElementById("log_pass");
        var login_admin = document.getElementById("login_admin");
        var admin_details = new FormData();
        admin_details.append('action', 'login_admin');
        admin_details.append('log_email', log_email.value);
        admin_details.append('log_pass', log_pass.value);
        admin_details.append('login_admin', login_admin.value);
        // each form element goes into the login_details object ^
        fetch('http://localhost/eventee2/api/ws.php?action=adminLogin', {
            method: "POST",
            body: admin_details,
            credentials: 'include',
        })
            .then(function (response) {
                // Force error into console
                // response.text().then(function (text) {
                //     console.log(text);
                // });
                // HTTP Response Codes
                if (response.status === 202) {
                    // props.setCount("Logged In");
                    console.log('Login Successful');
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                }
                if (response.status === 501) {
                    console.log('Not implemented');
                }
            })
            .catch(function (err) {
                console.log("Connection unavailable");
                console.log(err);
            });
    }

    // const classes = useStyles();

    return (
        <div>
            <form>
                <i className="material-icons prefix">email</i>
                <input id="log_email" name="log_email" type="text" className="validate" placeholder="Email" required></input>
                <i className="material-icons prefix">vpn_key</i>
                <input id="log_pass" name="log_pass" type="password" className="validate"
                    pattern="[a-zA-Z0-9_.!@#$%^&*()]{2,}" placeholder="Password"></input>
                <a href="#">Forgot password?</a>
                <br></br>
                <input type="hidden" name="action" value="login_admin" id="login_admin"></input>
                <a id="login_admin" className="btn indigo waves-effect waves-light" type="submit" name="login_admin" onClick={processLogin}>Login</a>
                <br></br>
                <Link to="/register">Don't have an account? Register</Link>
            </form>
        </div>
    );
}

export default Login;