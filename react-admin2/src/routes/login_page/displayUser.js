import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

/* - Display User - */
function DisplayUser() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // insert watch const if watching value
    const onSubmit = data => console.log(data);

    const [user, setUser] = useState([]);

    useEffect(() => {
        pullUser();
    }, []);

    function pullUser() {
        fetch('http://localhost/eventee2/api/ws.php?action=displayUser',
            // https://adminpanel.malloriecini.com/api/ws.php?action=displayEvents
            // http://localhost/eventee2/api/ws.php?
            {
                method: "GET",
                credentials: "include",
            }).then((res) => {
                if (res.status === 202) {
                    res.json().then((data) => {
                        setUser(data);
                        console.log(data);
                    });
                }
                if (res.status === 501) {
                    setUser([]);
                }
            })
    }

    function editUser() {
        // var userid = document.getElementById("userid").value;
        // console.log("Update user with id " + userid);

        var userProfUpdate = {
            // 'userid': document.getElementById("userid").value,
            'update_user_name': document.getElementById("update_user_name").value,
            'update_user_phone': document.getElementById("update_user_phone").value,
            'update_user_dob': document.getElementById("update_user_dob").value,
            'update_user_email': document.getElementById("update_user_email").value,
            'update_access_rights': document.getElementById("update_access_rights").value
        }

        fetch('http://localhost/eventee2/api/ws.php?action=updateUser', {
            method: "POST",
            body: JSON.stringify(userProfUpdate),
            credentials: 'include',
        })
            // Force error into console
            .then(function (response) {
                response.text().then(function (text) {
                    console.log(text);
                });
                // HTTP Response Codes
                if (response.status === 200) {
                    // console.log(userid.value);
                }
                if (response.status === 202) {
                    console.log('Update Successful');
                    //   successmessage('Success: Update Event Successful');
                }
                if (response.status === 400) {
                    console.log('Bad Request');
                    //   errormessage('Error: Bad Request');
                    return;
                }
                if (response.status === 401) {
                    console.log('Not permitted');
                    //   errormessage('Error: Not Permitted');
                    return;
                }
                if (response.status === 501) {
                    console.log('Not implemented :(');
                    // errormessage('Error: Not implemented');
                    return;
                }
            });
    }

    return (
        <div>
            <h3>User Profile</h3>
            <div className="content">
                <table className="striped">
                    <th>User ID</th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Date Of Birth</th>
                    <th>AccessRights</th>
                    {user.map((user, index) => (
                        <tr>
                            <td>{user.UserID}</td>
                            <td>{user.FullName}</td>
                            <td>{user.PhoneNumber}</td>
                            <td>{user.Email}</td>
                            <td>{user.DateOfBirth}</td>
                            <td>{user.AccessRights}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <br></br>
            <div>
                <h4>Edit User Profile</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">badge</i>
                            <select className="icons" id="update_access_rights">
                                <option value="" disabled selected>Access Rights</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                            <span className="helper-text" data-error="Please enter a valid category"
                                data-success="Correct" max="20"></span>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="update_user_name" type="text" className="validate tooltipped" placeholder="Full Name"
                                data-position="top" data-tooltip="Must be more than 2 characters" {...register("updateusername", { required: true, minLength: 2 })}></input>
                            {/* errors will return when field validation fails  */}
                            {errors.updateusername && <span>This field is required</span>}
                            <span className="helper-text" data-error="Please enter a valid name"
                                data-success="Correct"></span>
                            <div className="errorMsg"></div>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input id="update_user_phone" type="tel" className="validate" placeholder="Phone Number" {...register("update_user_phone", { required: true, minLength: 10 })}></input>
                            {/* errors will return when field validation fails  */}
                            {errors.updateuserphone && <span>This field is required</span>}
                            <span className="helper-text" data-error="Please enter a valid phone number"
                                data-success="Correct"></span>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="update_user_email" name="reg_email" type="email" className="validate"
                                placeholder="Email" {...register("updateuseremail", { required: true, minLength: 2 })}></input>
                            {/* errors will return when field validation fails  */}
                            {errors.updateuseremail && <span>This field is required</span>}
                            <span className="helper-text" data-error="Please enter a valid email"
                                data-success="Correct"></span>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">cake</i>
                            <input type="text" id="update_user_dob" className="datepicker validate"
                                placeholder="Date of Birth *" {...register("updateuserdob", { required: true, minLength: 2 })}></input>
                            {/* errors will return when field validation fails  */}
                            {errors.updateuserdob && <span>This field is required</span>}
                            <span className="helper-text" data-error="Please enter a valid date of birth"
                                data-success="Correct" max="20"></span>
                        </div>
                    </div>
                    <input type="hidden" name="userid" value="`+ row.UserID + `" id="userid"></input>
                    <input type="hidden" name="action" value="admin_update" id="admin_update"></input>
                    <button id="admin_update" className="btn indigo waves-effect waves-light" value="' + row.UserID + '" onClick={editUser} type="submit" name="admin_update">Update User</button>
                </form>
                <p id="successmessage" className="green"></p>
                <p id="errormessage" className="red"></p>
            </div>
        </div>
    )
}

export default DisplayUser;
