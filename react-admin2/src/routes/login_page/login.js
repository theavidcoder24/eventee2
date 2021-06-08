import React from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
// import M from "materialize-css";
// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({
//     form: {
//         width: '100%',
//     }
// });

export default function Login(props) {
    const { register, handleSubmit, formState: { errors } } = useForm(); // insert watch const if watching value
    const onSubmit = data => console.log(data);

    // console.log(watch("logemail")); // watch input value by passing the name of it

    let history = useHistory();

    const handleLogin = () => {
        var admin_email = document.getElementById("admin_email");
        var admin_pass = document.getElementById("admin_pass");
        var login_admin = document.getElementById("login_admin");
        var admin_details = new FormData();
        admin_details.append('action', 'login_admin');
        admin_details.append('admin_email', admin_email.value);
        admin_details.append('admin_pass', admin_pass.value);
        admin_details.append('login_admin', login_admin.value);
        // each form element goes into the login_details object ^
        fetch('http://localhost/eventee2/api/ws.php?action=adminLogin', {
            // http://localhost/eventee2/api/ws.php?action=adminLogin
            // https://adminpanel.malloriecini.com/api/ws.php?action=adminLogin
            method: 'POST',
            body: admin_details,
            // redirect: "error",
            credentials: 'include'
        })
            .then(function (response) {
                // HTTP Response Codes
                if (response.status === 202) {
                    // props.setCount("Logged In");
                    console.log('Login Successful');
                    props.setLoggedIn(true);
                    localStorage.setItem('login', "true");
                    history.push("/dashboard");
                }
                if (response.status === 401) {
                    console.log('Not authorised');
                    props.setLoggedIn(false);
                    localStorage.setItem('login', "false");
                }
                if (response.status === 501) {
                    console.log('Not implemented');
                    props.setLoggedIn(false);
                    localStorage.setItem('login', "false");
                }
            })
    }

    // const classes = useStyles();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input id="admin_email" name="admin_email" type="email" className="validate" placeholder="Email" {...register("logemail", { required: true })}></input>
                    {/* errors will return when field validation fails  */}
                    {errors.logemail && <span>This field is required</span>}
                    <span className="helper-text" data-error="Please enter a valid email" data-success="Correct"></span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                    <input id="admin_pass" name="admin_pass" type="password" className="validate"
                        placeholder="Password" {...register("logpass", { required: true, pattern: /[A-Za-z]{3}/ })}></input>
                    {/* errors will return when field validation fails  */}
                    {errors.logpass && <span>This field is required</span>}
                    <span className="helper-text"
                        data-error="Must have at least one number, one uppercase letter, and at least 3 or more characters"
                        data-success="Correct"></span>
                </div>
                <br></br>
                <a href="#">Forgot password?</a>
                <br></br>
                <br></br>
                <input type="hidden" name="action" value="login_admin" id="login_admin"></input>
                <button type="submit" id="login_admin" className="btn indigo waves-effect waves-light" name="login_admin" onClick={handleLogin}>Login</button>
                <br></br>
                <br></br>
                {/* <Link to="/register">Don't have an account? Register</Link> */}
            </form>
        </div>
    );
}
