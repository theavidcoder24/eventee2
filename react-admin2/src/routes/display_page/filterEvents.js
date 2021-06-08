// export default function filterEvents () {
//     fetch('http://localhost/eventee2/api/ws.php?action=filterEventByLocation',
//       // https://adminpanel.malloriecini.com/api/ws.php?action=displayEvents
//       // http://localhost/eventee2/api/ws.php?
//       {
//         method: "GET",
//         credentials: "include",
//       }).then((res) => {
//         if (res.status === 202) {
//           res.json().then((data) => {
//             setEvent(data);
//             console.log(data);
//           });
//         }
//         if (res.status === 501) {
//           setEvent([]);
//         }
//       })
// }
