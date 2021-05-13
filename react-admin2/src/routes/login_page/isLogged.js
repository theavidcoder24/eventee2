/* - is logged in Fetch - */
export function isLogged() {
    fetch('http://localhost/eventee2/api/ws.php?action=is_logged_in', {
        method: 'GET',
    })
        // HTTP Response Codes
        .then(function (response) {
            if (response.status === 202) {
                console.log('Logged in!');
                // localStorage.setItem('login', "true");
                // if (localStorage.getItem('login') == 'true') {
                //     console.log('Logged In!!');
                // }
            }
            if (response.status === 401) {
                console.log('Not logged in failed');
                // localStorage.setItem('login', "false");
                // if (localStorage.getItem('login') == 'false') {
                // }
                return;
            }
            if (response.status === 429) {
                console.log('Rate limit exceeded');
                // localStorage.setItem('login', "false");
                // if (localStorage.getItem('login') == 'false') {
                // }
            }
        })
}