import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

/* - Register - */
export default function PostRegFetch() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleRegister = () => {
        // var errStr = "";
        // if (reg_name.checkValidity() === false) {
        //     errStr += "Please type a valid name ";
        //     console.log("Error: Full Name");
        //     return;
        // }
        // if (reg_phone.checkValidity() === false) {
        //     errStr += "Please type a valid phone number ";
        //     console.log("Error: Phone Number");
        //     return;
        // }
        // if (reg_dob.checkValidity() === false) {
        //     errStr += "Please insert a valid date of birth ";
        //     console.log("Error: Date of Birth");
        //     return;
        // }
        // if (reg_email.checkValidity() === false) {
        //     errStr += "Please type in a valid email ";
        //     console.log("Error: Email");
        //     return;
        // }
        // if (reg_pass.checkValidity() === false) {
        //     errStr += "Please type in a valid password ";
        //     console.log("Error: Password");
        //     return;
        // }
        var reg_name = document.getElementById("reg_name");
        var reg_phone = document.getElementById("reg_phone");
        var reg_email = document.getElementById("reg_email");
        var reg_dob = document.getElementById("reg_dob");
        var reg_pass = document.getElementById("reg_pass");
        var access_rights = document.getElementById("access_rights");
        var register_user = document.getElementById("register_user");
        var regdetails = new FormData();
        regdetails.append('action', 'register');
        regdetails.append('reg_name', reg_name.value);
        regdetails.append('reg_phone', reg_phone.value);
        regdetails.append('reg_email', reg_email.value);
        regdetails.append('reg_dob', reg_dob.value);
        regdetails.append('reg_pass', reg_pass.value);
        regdetails.append('access_rights', access_rights.value);
        regdetails.append('register_user', register_user.value);
        // each form element goes into the fd object ^
        fetch('http://localhost/eventee2/api/ws.php?action=register', {
            method: 'POST',
            // body: regdetails,
            credentials: 'include',
        })
            .then(function (response) {
                // Force error into console
                response.text().then(function (text) {
                    console.log(text);
                });
                // HTTP Response Codes
                if (response.status === 400) {
                    console.log('Bad Request');
                    return;
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                    return;
                }
                if (response.status === 501) {
                    console.log('Not implemented');
                    return;
                }
                if (response.status === 202) {
                    console.log('Registration Successful');
                    return;
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    return (
        <div>
            <h3 className="center">User Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">badge</i>
                        <select className="icons" id="access_rights">
                            <option value="" disabled selected>Access Rights</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                        <span className="helper-text" data-error="Please enter a valid category"
                            data-success="Correct" max="20"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="reg_name" type="text" className="validate tooltipped" placeholder="Full Name"
                            data-position="top" data-tooltip="Must be more than 2 characters" {...register("fullname", { required: true, minLength: 1 })}></input>
                        {/* errors will return when field validation fails  */}
                        {errors.fullname && <span>This field is required</span>}
                        <span className="helper-text" data-error="Please enter a valid name"
                            data-success="Correct"></span>
                        <div className="errorMsg"></div>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input id="reg_phone" type="tel" className="validate" placeholder="Phone Number"></input>
                        <span className="helper-text" data-error="Please enter a valid phone number"
                            data-success="Correct"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="reg_email" name="reg_email" type="email" className="validate"
                            placeholder="Email"></input>
                        <span className="helper-text" data-error="Please enter a valid email"
                            data-success="Correct"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">cake</i>
                        <input type="text" id="reg_dob" className="datepicker validate"
                            placeholder="Date of Birth *"></input>
                        <span className="helper-text" data-error="Please enter a valid date of birth"
                            data-success="Correct" max="20"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">vpn_key</i>
                        <input id="reg_pass" name="reg_pass" type="password" className="validate"
                            placeholder="Password"></input>
                        <span className="helper-text" data-error="Please enter a valid password"
                            data-success="Correct" max="20"></span>
                    </div>
                    <a className="waves-effect waves-light modal-trigger" href="#agree_terms"><i
                        className="material-icons prefix">feed</i> Terms and conditions</a>
                    <div id="agree_terms" className="modal">
                        <div className="modal-content">
                            <h4>Terms and Conditions</h4>
                            <p>A bunch of text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nobis
                            officia minima facilis quo? Voluptatum itaque, voluptatibus tempora odit
                            ducimus
                            neque consectetur consequuntur blanditiis facilis, nostrum sunt earum vero
                            fugiat
                            exercitationem?</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Disagree</a>
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                    <div className="center">
                        <span className="center">Already a member?<Link to="/">
                            Login</Link></span>
                    </div>
                </div>
                <input type="hidden" name="action" value="register" id="register_user"></input>
                <button className="btn indigo waves-effect waves-light" onClick={handleRegister} type="submit" name="register"
                >Join</button>
            </form>
        </div>
    )
}
