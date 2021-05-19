/* - is logged in Fetch - */
export function IsLogged(successCb, errorCb) {
    fetch('http://localhost/eventee2/api/ws.php?action=is_logged_in',
        {
            method: 'GET',
            credentials: 'include'
        })
        .then(function (response) {
            if (response.status === 202) {
                successCb();
            } else {
                errorCb();
            }
        })
}

export default IsLogged;

// export default function IsLogged(successCb, errorCb) {
//     fetch('http://localhost/eventee2/api/ws.php?action=is_logged_in',
//         {
//             method: 'GET',
//             credentials: 'include'
//         })
//         .then(function (response) {
//             if (response.status === 202) {
//                 console.log('Is Logged in!');
//                 successCb();
//             }
//             // else if (response.status === 429) {
//             //     console.log('Rate limit exceeded');
//             //     errorCb();
//             // }
//             else {
//                 console.log('Not logged in failed');
//                 errorCb();
//             }
//         })
// }
