/* - User Logout - */
export function UserLogout() {
  fetch('http://localhost/eventee2/api/ws.php?action=logout', {
    method: 'GET',
    credentials: 'include'
  })
    .then(function (response) {
      // HTTP Response Codes
      if (response.status === 202) {
        console.log("Logout Success");
        sessionStorage.clear();
        // session_destroy();
        // session_unset();
        return;
      }
      if (response.status === 401) {
        console.log("Not permitted");
        return;
      }
      if (response.status === 501) {
        console.log("Logout Failed");
        return;
      }
      if (response.status === 429) {
        console.log('Rate limit exceeded');
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

export default UserLogout;