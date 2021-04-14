// Displaying User Details in the Profile while pre-filling the Update Form in a modal at the same time (with Materialize CSS since you are using it).
function postdisplayUser(){
    // Preparing the output
    var output = '';
    var output2 = '';
  
    fetch('api.php?action=displayuser',{
        method: "GET",
        credentials: 'include'
    })
    .then(function(response){    
 
        response.json().then(function(data){
            console.log(data)
            // Display data as output
            data.forEach(row => {
                // User Profile Output
            output =
              `<div><h6>UserName<h6></div>` + row.username + 
                `<div><br><h6>FirstName<h6></div>` + row.firstname + 
                `<div><br><h6>LastName<h6></div>` + row.lastname + 
                `<div><br><h6>Date Of Birth<h6></div>` + row.dateofbirth + 
                `<div><br><h6>Email<h6></div>` + row.email + 
                `<div><br><h6>Phone<h6></div>` + row.phone + 

                `<div class="profilebttn-reposition">
                    <button class="waves-effect waves-light btn" href="#" onclick="return postLogout()">Log Out</button> 
                    <button data-target="updateprofilemodal" class="waves-effect waves-light btn modal-trigger">Edit</button>
                    <button data-target="userdeleteconfirmModal" class="waves-effect waves-light btn modal-trigger">Delete</button>
                </div>`
            
            output2 = 
              // This output allows pre-fill in update form
                `<div class="input-field">
                <i class="material-icons prefix">person</i>
                <input type="text" id="firstname-updt" name="firstname-updt" 
                    value="`+ row.firstname +`" placeholder="First Name">
            </div>

            <div class="input-field">
                <i class="material-icons prefix">person</i>
                <input type="text" id="lastname-updt" name="lastname-updt" 
                    value="`+ row.lastname + `" placeholder="Last Name">
            </div>

            <div class="input-field">
                <i class="material-icons prefix">cake</i>
                <input type="date" id="dateofbirth-updt" name="dateofbirth-updt" 
                    value="`+ row.dateofbirth +`" placeholder="Date of Birth">
            </div>

            <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input class="validate" type="email" id="email-updt" name="email-updt" 
                    value="`+ row.email +`" placeholder="Email">
                    <span class="helper-text" data-error="wrong" data-success="right"></span>
            </div>

            <div class="input-field">
                <i class="material-icons prefix">local_phone</i>
                <input class="validate" type="tel" id="phone-updt" name="phone-updt" 
                    value="`+ row.phone +`" pattern ="[0-9]{10}" placeholder="Mobile Phone">
                    <span class="helper-text" data-error="wrong" data-success="right"></span>
            </div>

            <div class="input-field">
                <i class="material-icons prefix">perm_identity</i>
                <input type="text" id="username-updt" name="username-updt" 
                    value="`+ row.username +`" placeholder="Username">
            </div>

            <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input class="validate" type="text" id="password-updt" name="password-updt" placeholder="Password">
            </div>`
            })
            // Data Output at Specific page/location
            document.getElementById('profilesection').innerHTML = output;
            document.getElementById('user-update-form').innerHTML = output2;  
        })
    })
    // Send back error into console log
    response.text().then((text) => {
        console.log(text)
    })
    return false;
}
// User Update Function that sends the values from  each the input ID in the update form to API.php/WS.php
function postUpdateUser(){
    var userUpdate = {
        'username-updt': document.getElementById("username-updt").value,
        'password-updt': document.getElementById("password-updt").value,
        'firstname-updt': document.getElementById("firstname-updt").value,
        'lastname-updt': document.getElementById("lastname-updt").value,
        'dateofbirth-updt':document.getElementById("dateofbirth-updt").value,
        'email-updt': document.getElementById("email-updt").value,
        'phone-updt': document.getElementById("phone-updt").value
    }
    
    fetch('api.php?action=updateuser',{
        method: "POST",
        body: JSON.stringify(userUpdate),
        credentials: 'include'
    })
    .then(function(response){
        if(response.status == 406){
            // Will not accept the new update information if they are not filled fully or correctly
            console.log('unaccepted');
            console.log('Form not fully filled');
            alert('It appears that the registration form does not contains the required values. Please fully fill in the form.');
            return;
        } 
        if(response.status == 202){
            console.log('success');
            // Upon successful update, the profile page will be refreshed by reusing the display profile function
            if(!alert('Your profile information has been successfully updated!'))
                {postdisplayUser();}
            return;
        } 
        // Send back error into console log
        response.text().then((text) => {
            console.log(text)
        })
    })
    return false;
}
            
