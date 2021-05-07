/* - is logged in Fetch - */
export function isLogged() {
    loadPage();
    fetch('http://localhost/eventee2/api/ws.php?action=is_logged_in', {
        method: 'GET',
    })
        // HTTP Response Codes
        .then(function (response) {
            if (response.status === 202) {
                localStorage.setItem('login', "true");
                localStorage.setItem('LoginEmail', log_email);
                if (localStorage.getItem('login') == 'true') {
                    console.log('Logged In!!');
                }
            }
            else {
                localStorage.setItem('login', "false");
            }
            if (response.status === 401) {
                loadPage();
                console.log('Not logged in failed');
                errormessage("Error: Not implemented");
                localStorage.setItem('login', "false");
                if (localStorage.getItem('login') == 'false') {
                }
                return;
            }
            if (response.status === 429) {
                console.log('Rate limit exceeded');
                localStorage.setItem('login', "false");
                if (localStorage.getItem('login') == 'false') {
                }
            }
        })
}