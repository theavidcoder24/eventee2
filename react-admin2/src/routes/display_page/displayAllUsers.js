import React, { useEffect, useState } from 'react';

/* - Display User - */
function DisplayAllUsers() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        pullAllUsers();
    }, []);

    function pullAllUsers() {
        fetch('https://eventeeadmin.malloriecini.com/api/ws.php?action=displayAllUsers',
            // https://adminpanel.malloriecini.com/api/ws.php?action=displayAllUsers
            // http://localhost/eventee2/api/ws.php?action=displayAllUsers
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
            <h3>All User Profiles</h3>
            <div className="content">
                <table className="striped">
                    <th>User ID</th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Date Of Birth</th>
                    <th>AccessRights</th>
                    {user.map((user, index) => (
                        <tr>
                            <td>{user.UserID}</td>
                            <td>{user.FullName}</td>
                            <td>{user.PhoneNumber}</td>
                            <td>{user.Email}</td>
                            <td>{user.DateOfBirth}</td>
                            <td>{user.AccessRights}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <br></br>
        </div>
    )
}

export default DisplayAllUsers;
