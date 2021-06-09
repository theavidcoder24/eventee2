import React, { useEffect, useState } from 'react';

/* - Display Events - */
function DisplayChangelog() {
    const [log, setLog] = useState([]);

    useEffect(() => {
        pullChangelog();
    }, []);

    function pullChangelog() {
        fetch('http://localhost/eventee2/api/ws.php?action=displayChangelog',
            // https://adminpanel.malloriecini.com/api/ws.php?action=displayChangelog
            // http://localhost/eventee2/api/ws.php?action=displayChangelog
            {
                method: "GET",
                credentials: "include",
            }).then((res) => {
                if (res.status === 202) {
                    res.json().then((data) => {
                        setLog(data);
                        console.log(data);
                    });
                }
                if (res.status === 501) {
                    setLog([]);
                }
            })
    }

    return (
        <div>
            <h3>Changelog</h3>
            <div className="content">
                <table className="striped">
                    <th>Date</th>
                    <th>Browser</th>
                    <th>IP Address</th>
                    <th>Action Type</th>
                    <th>User ID</th>
                    {log.map((log, index) => (
                        <tr>
                            <td>{log.date}</td>
                            <td>{log.browser}</td>
                            <td>{log.ip}</td>
                            <td>{log.action_type}</td>
                            <td>{log.UserID}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default DisplayChangelog;
