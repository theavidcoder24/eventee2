import React, { useEffect, useState } from 'react';


/* - Display User - */
function DisplayUser() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        pullUser();
    }, []);

    function pullUser() {
        fetch('http://localhost/eventee2/api/ws.php?action=displayUser',
            // https://adminpanel.malloriecini.com/api/ws.php?action=displayEvents
            // http://localhost/eventee2/api/ws.php?
            {
                method: "GET",
                credentials: "include",
            }).then((res) => {
                if (res.status === 202) {
                    res.json().then((data) => {
                        setUser(data);
                        console.log(data);
                    });
                }
                if (res.status === 501) {
                    setUser([]);
                }
            })
    }

    return (
        <div>
            <h3>User Profile</h3>
            <div className="content">
                <table className="striped">
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Date Of Birth</th>
                    {user.map((user, index) => (
                        <tr>
                            {/* <td>{user.UserID}</td> */}
                            <td>{user.FullName}</td>
                            <td>{user.PhoneNumber}</td>
                            <td>{user.Email}</td>
                            <td>{user.DateOfBirth}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default DisplayUser;
