/* - is logged in Fetch - */
export default function IsLogged() {
    fetch('http://localhost/eventee2/api/ws.php?action=is_logged_in',
        {
            method: 'GET',
            credentials: 'include'
        })
        .then(function (response) {
            if (response.status === 202) {
                console.log('Logged in!');
        localStorage.setItem('login', "true");

            }
           else if (response.status === 429) {
                console.log('Rate limit exceeded');
            }
            else {
                console.log('Not logged in failed');
            }
        })
}
