// import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import { createUseStyles } from 'react-jss';
// import { Link } from React;

// const useStyles = createUseStyles({
//     form: {
//         width: '100%',
//     }
// });

// function Login() {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const displayInfo = () => {
//     console.log(email + password);
// }

// const handleLogin = () => {
//     // const [error, setError] = useState("");
//     // Declare a new state variable, which we'll call "count"  
//     // const [count, setCount] = useState(0);
//     function processLogin() {
//         var log_email = document.getElementById("log_email");
//         var log_pass = document.getElementById("log_pass");
//         var login_details = new FormData();
//         login_details.append('action', 'login');
//         login_details.append('log_email', log_email.value);
//         login_details.append('log_pass', log_pass.value);
//         // login_details.append('login_admin', login_admin.value);
//         // each form element goes into the login_details object ^
//         fetch('http://localhost/eventee2/api/ws.php?action=adminLogin', {
//             method: "POST",
//             body: login_details,
//             credentials: 'include',
//         })
//             .then(function (response) {
//                 // Force error into console
//                 response.text().then(function (text) {
//                     console.log(text);
//                 });
//                 // HTTP Response Codes
//                 if (response.status === 202) {
//                     // props.setCount("Logged In");
//                     console.log('Login Successful');
//                 }
//                 if (response.status === 401) {
//                     console.log('Not permitted');
//                 }
//                 if (response.status === 501) {
//                     console.log('Not implemented');
//                 }
//             })
//             .catch(function (err) {
//                 console.log("Connection unavailable");
//                 console.log(err);
//             });
//     }
// }

// // const classes = useStyles();

// return (
//     <div>
//         <form onSubmit={handleLogin()} method="POST">
//             <i className="material-icons prefix">email</i>
//             <input id="log_email" name="log_email" type="email" className="validate" placeholder="Email" required></input>
//             {/* onChange={(event) => {
//             setEmail(event.target.value);
//         }}  */}
//             <i className="material-icons prefix">vpn_key</i>
//             <input id="log_pass" name="log_pass" type="password" className="validate"
//                 pattern="[a-zA-Z0-9_.!@#$%^&*()]{2,}" placeholder="Password"></input>
//             <a href="#">Forgot password?</a>
//             <input type="hidden" name="action" value="login" id="login_admin"></input>
//             <button type="submit" name="login">Login</button>
//             {/* onClick={handleLogin()} */}
//             <a to="/register">Don't have an account? Register</a>
//         </form>
//     </div>
// );
// }

// export default Login;