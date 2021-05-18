
/* - User Logout - */
export default function UserLogout(props) {
  fetch('api/ws.php?action=logout', {
    method: 'GET'
  })
    .then(function (response) {
      // HTTP Response Codes
      if (response.status === 202) {
        console.log("Logout Success");
        props.setCount("Not Logged In");
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
      // console.log("Connection unavailable");
      console.log(err);
    });
}