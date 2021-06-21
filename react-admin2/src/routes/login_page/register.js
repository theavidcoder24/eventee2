import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

/* - Register - */
function PostRegFetch() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleRegister = () => {
        var reg_name = document.getElementById("reg_name");
        var reg_phone = document.getElementById("reg_phone");
        var reg_email = document.getElementById("reg_email");
        var reg_dob = document.getElementById("reg_dob");
        var reg_pass = document.getElementById("reg_pass");
        var access_rights = document.getElementById("access_rights");
        var register = document.getElementById("register");
        var regdetails = new FormData();
        regdetails.append('action', 'register');
        regdetails.append('reg_name', reg_name.value);
        regdetails.append('reg_phone', reg_phone.value);
        regdetails.append('reg_email', reg_email.value);
        regdetails.append('reg_dob', reg_dob.value);
        regdetails.append('reg_pass', reg_pass.value);
        regdetails.append('access_rights', access_rights.value);
        regdetails.append('register', register.value);
        // each form element goes into the fd object ^
        fetch('https://adminpanel.malloriecini.com/api/ws.php?action=register', {
            // https://eventeeadmin.malloriecini.com/api/ws.php?action=register
            // http://localhost/eventee2/api/ws.php?action=register
            // https://adminpanel.malloriecini.com/api/ws.php?action=register
            method: 'POST',
            body: regdetails,
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
                    document.getElementById("errormessage").innerHTML = "Error: Bad Request";
                    return;
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                    document.getElementById("errormessage").innerHTML = "Error: Not permitted";
                    return;
                }
                if (response.status === 501) {
                    console.log('Not implemented');
                    document.getElementById("errormessage").innerHTML = "Error: Not implemented";
                    return;
                }
                if (response.status === 202) {
                    console.log('Registration Successful');
                    document.getElementById("successmessage").innerHTML = "Registration Successful";
                    return;
                }
                if (response.status === 200) {
                    console.log('Fill in empty input fields');
                    document.getElementById("errormessage").innerHTML = "Fill in empty input fields";
                    return;
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    return (
        <div>
            <p id="successmessage" className="green"></p>
            <p id="errormessage" className="red"></p>
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
                        <span className="helper-text" data-error="Please enter a valid access right"
                            data-success="Correct" max="20"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="reg_name" type="text" className="validate" placeholder="Full Name" minlength="2" maxLength="30" data-position="top" data-tooltip="Must be more than 2 characters" {...register("regname", { required: true, minLength: 2 })}></input>
                        {/* errors will return when field validation fails  */}
                        {errors.regname && <span>This field is required</span>}
                        <span className="helper-text" data-error="Please enter a valid name"
                            data-success="Correct"></span>
                        <div className="errorMsg"></div>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input id="reg_phone" type="tel" className="validate" pattern="[0-9]{10}" placeholder="Phone Number" {...register("regphone", { required: true, minLength: 10 })}></input>
                        {/* errors will return when field validation fails  */}
                        {errors.regphone && <span>This field is required</span>}
                        <span className="helper-text" data-error="Please enter a valid phone number no less than 10 characters"
                            data-success="Correct"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="reg_email" name="reg_email" type="email" className="validate" minlength="3"
                            maxlength="40" placeholder="Email" {...register("regemail", { required: true, minLength: 2 })}></input>
                        {/* errors will return when field validation fails  */}
                        {errors.regemail && <span>This field is required</span>}
                        <span className="helper-text" data-error="Please enter a valid email with at least 2 characters and contains an @"
                            data-success="Correct"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">cake</i>
                        <input type="date" id="reg_dob" className="datepicker validate" min="1920-01-01" max="2003-01-01"
                            placeholder="Date of Birth *" {...register("regdob", { required: true, minLength: 4 })}></input>
                        {/* errors will return when field validation fails  */}
                        {errors.regdob && <span>This field is required</span>}
                        <span className="helper-text" data-error="Please enter a valid date of birth"
                            data-success="Correct" max="20"></span>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">vpn_key</i>
                        <input id="reg_pass" name="reg_pass" type="password" className="validate" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}"
                            placeholder="Password" {...register("regpass", { required: true, minLength: 3, pattern: /[A-Za-z]{3}/ })}></input>
                        {/* errors will return when field validation fails  */}
                        {errors.regpass && <span>This field is required</span>}
                        <span className="helper-text" data-error="Must contain at least one number, one uppercase letter, and at least 3 or more characters"
                            data-success="Correct" max="20"></span>
                    </div>
                    <div className="center">
                        <span className="center">Already a member?<Link to="/login">
                            Login</Link></span>
                    </div>
                </div>
                <input type="hidden" name="action" value="register" id="register"></input>
                <button id="register" type="submit" className="btn indigo waves-effect waves-light" onClick={handleRegister} name="register">Join</button>
            </form>
        </div>
    )
}

export default PostRegFetch;