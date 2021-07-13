/* - is logged in Fetch - */
export function IsLogged() {
    fetch('https://eventeeadmin.malloriecini.com/api/ws.php?action=is_logged_in',
        // https://adminpanel.malloriecini.com/api/ws.php?action=is_logged_in
        // http://localhost/eventee2/api/ws.php?action=is_logged_in
        {
            method: 'GET',
            credentials: 'include'
        })
        .then(function (response) {
            if (response.status === 202) {
                console.log('Is Logged In!!');
                sessionStorage.setItem("login", "true");

            } else {
                console.log('Not logged in failed');
                localStorage.setItem('login', "false");
            }
        })
}

export default IsLogged;