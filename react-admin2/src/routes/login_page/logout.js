
/* - User Logout - */
function userLogout() {
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