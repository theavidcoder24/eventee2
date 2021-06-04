<?php

function db_connection()
{
    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    try {
        $dbconn = new PDO("mysql:host=$servername;dbname=eventee2", $dbusername, $dbpassword);
        $dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $dbconn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
?>
        <h1>Database Connection Error</h1>
        <p>There was an error connecting to the database.</p>
        <p>Error message: <?php echo $error_message; ?></p>
<?php
        exit();
    }
}

class dbObj
{
    private $dbconn;

    /* -- Database Connection -- */
    public function __construct()
    {
        $servername = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $this->dbconn = new PDO("mysql:host=$servername;dbname=eventee2", $dbusername, $dbpassword);
        // set the PDO error mode to exception 
        // (debug - comment out in production)
        $this->dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    /* -- New User Function -- */
    public function register($reg_name, $reg_phone, $reg_email, $reg_dob, $reg_pass, $access_rights, $date, $browser, $ip, $action_type)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            // hashing the password with PASSWORD_HASH()
            $reg_pass = password_hash($reg_pass, PASSWORD_DEFAULT);
            $stmt = $this->dbconn->prepare("INSERT INTO users2(FullName, PhoneNumber, DateOfBirth, Email, UserPassword, AccessRights) VALUES(:reg_name, :reg_phone, :reg_dob, :reg_email, :reg_pass, :access_rights)");
            $stmt->bindValue(':reg_name', $reg_name);
            $stmt->bindValue(':reg_phone', $reg_phone);
            $stmt->bindValue(':reg_dob', $reg_dob);
            $stmt->bindValue(':reg_email', $reg_email);
            $stmt->bindValue(':reg_pass', $reg_pass);
            $stmt->bindValue(':access_rights', $access_rights);
            $row = $stmt->fetch();
            $stmt->execute();

            // $lastuserID = $this->dbconn->lastInsertID();

            /* - Changelog Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type) VALUES (:date, :browser, :ip, :action_type)");
            $stmt->bindValue(':date', $date);
            $stmt->bindValue(':browser', $browser);
            $stmt->bindValue(':ip', $ip);
            $stmt->bindValue(':action_type', $action_type);
            $stmt->execute();

            $this->dbconn->commit();
        } catch (PDOException $ex) {
            $this->dbconn->rollBack();
            throw $ex;
        }
    }

    /* -- Login Function -- */
    public function login($log_email, $log_pass, $date, $browser, $ip, $action_type, $UserID)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            $stmt = $this->dbconn->prepare("SELECT UserID, FullName, PhoneNumber, DateOfBirth, Email, UserPassword, AccessRights FROM users2 WHERE Email = :log_email");
            $stmt->bindValue(':log_email', $log_email);
            $stmt->execute();
            $row = $stmt->fetch();

            $_SESSION['UserID'] = $row['UserID'];

            $UserID = $_SESSION["UserID"];

            /* - Changelog Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type, UserID) VALUES (:date, :browser, :ip, :action_type, :UserID)");
            $stmt->bindValue(':date', $date);
            $stmt->bindValue(':browser', $browser);
            $stmt->bindValue(':ip', $ip);
            $stmt->bindValue(':action_type', $action_type);
            $stmt->bindValue(':UserID', $UserID);
            $stmt->execute();
            $this->dbconn->commit();

            // Verify password
            if (password_verify($log_pass, $row['UserPassword'])) {
                // echo 'Password is valid!';
                /* Set the session variables for each user that logs in to also record what the users will interact with */
                /* Assign the session variables */
                $_SESSION["login"] = 'true';
                $_SESSION['LoginEmail'] = $row['Email'];
                $_SESSION["AccessRights"] = $row["AccessRights"];
                $_SESSION['time_start_login'] = time();
                time('H:i:s');

                $UserID = $_SESSION["UserID"];

                return true;
            } else {
                // echo "Login credentials are incorrect";
                return false;
            }
        } catch (PDOException $ex) {
            $this->dbconn->rollback();
            throw $ex;
        }
    }

    // Login Admin function
    public function adminLogin($admin_email, $admin_pass, $date, $browser, $ip, $action_type, $UserID)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            $stmt = $this->dbconn->prepare("SELECT UserID, FullName, PhoneNumber, DateOfBirth, Email, UserPassword, AccessRights FROM users2 WHERE Email = :admin_email AND AccessRights = 'Admin'");
            $stmt->bindValue(':admin_email', $admin_email);
            $stmt->execute();
            $row = $stmt->fetch();

            $_SESSION['UserID'] = $row['UserID'];

            $UserID = $_SESSION["UserID"];

            /* - Changelog Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type, UserID) VALUES (:date, :browser, :ip, :action_type, :UserID)");
            $stmt->bindValue(':date', $date);
            $stmt->bindValue(':browser', $browser);
            $stmt->bindValue(':ip', $ip);
            $stmt->bindValue(':action_type', $action_type);
            $stmt->bindValue(':UserID', $UserID);
            $stmt->execute();
            $this->dbconn->commit();

            // Verify password
            if (password_verify($admin_pass, $row['UserPassword'])) {
                // Check if user access rights = Admin
                if ($row["AccessRights"] = 'Admin') {
                    /* Set the session variables for the admin user that logs in to also record what they will interact with */
                    $_SESSION["login"] = 'true';
                    $_SESSION['UserID'] = $row['UserID'];
                    $_SESSION['AdminEmail'] = $row['Email'];
                    $_SESSION["AccessRights"] = $row["AccessRights"];
                    $_SESSION['time_start_login'] = time();
                    time('H:i:s');

                    return true;
                } elseif ($row["AccessRights"] == 'User') {
                    // Not admin!
                    echo "not admin";
                    return false;
                }
            } else {
                // echo "Login credentials are incorrect";
                return false;
            }
        } catch (PDOException $ex) {
            $this->dbconn->rollback();
            throw $ex;
        }
    }

    // public function changelog($date, $browser, $ip, $action_type, $UserID)
    // {
    //     $this->dbconn->beginTransaction();
    //     /* - Changelog Table - */
    //     $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type, UserID) VALUES (:date, :browser, :ip, :action_type, :UserID)");
    //     $stmt->bindValue(':date', $date);
    //     $stmt->bindValue(':browser', $browser);
    //     $stmt->bindValue(':ip', $ip);
    //     $stmt->bindValue(':action_type', $action_type);
    //     $stmt->bindValue(':UserID', $UserID);
    //     $stmt->execute();
    //     $this->dbconn->commit();
    // }

    /* -- Check if user account exists -- */
    // function checkUserAccount()
    // {
    //     return "['account': 'exists']";
    // }

    /* -- Create Events Function -- */
    public function createEvents($event_name, $event_desc, $event_cat, $event_address, $event_loc, $event_date, $event_time, $date, $browser, $ip, $action_type, $UserID)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            /* - Events Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO events(eventName, eventDescription, eventCategory, eventAddress, eventLocation, eventDate, eventTime) VALUES(:event_name, :event_desc, :event_cat, :event_address, :event_loc, :event_date, :event_time)");
            $stmt->bindValue(':event_name', $event_name);
            $stmt->bindValue(':event_desc', $event_desc);
            $stmt->bindValue(':event_cat', $event_cat);
            $stmt->bindValue(':event_address', $event_address);
            $stmt->bindValue(':event_loc', $event_loc);
            $stmt->bindValue(':event_date', $event_date);
            $stmt->bindValue(':event_time', $event_time);
            $stmt->execute();

            $UserID = $_SESSION["UserID"];

            /* - Changelog Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type, UserID) VALUES (:date, :browser, :ip, :action_type, :UserID)");
            $stmt->bindValue(':date', $date);
            $stmt->bindValue(':browser', $browser);
            $stmt->bindValue(':ip', $ip);
            $stmt->bindValue(':action_type', $action_type);
            $stmt->bindValue(':UserID', $UserID);
            $stmt->execute();
            $this->dbconn->commit();
        } catch (PDOException $ex) {
            $this->dbconn->rollBack();
            throw $ex;
        }
    }

    /* -- Display Events Function -- */
    function displayEvents()
    {
        db_connection();
        try {
            $stmt = $this->dbconn->prepare('SELECT eventID, eventName, eventDescription, eventCategory, eventAddress, eventLocation, eventDate, eventTime FROM events');
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;
        } catch (PDOException $ex) {
            throw $ex;
        }
    }

    // Check if more than 5 checked
    // function checkAttendance($evid)
    // {
    //     db_connection();
    //     $stmt = $this->dbconn->prepare("SELECT * FROM attendance INNER JOIN events on attendance.UserID = events.UserID WHERE events.EventID =:eid");
    //     // $stmt->bindValue(':', $);
    //     $stmt->bindValue(":eid", $evid);
    //     $stmt->execute();
    //     $result = $stmt->fetchAll();
    //     return $result;
    // }

    // public function updateAttend($evid, $answer)
    // {
    //     db_connection();
    //     try {
    //         $this->dbconn->beginTransaction();
    //         $stmt = $this->dbconn->prepare("UPDATE attendees SET attending = :answer WHERE events.eventID = :questionid");
    //         $stmt->bindValue(":eid", $evid);
    //         $stmt->bindValue(':answer', $answer);

    //         $stmt->execute();

    //         $this->dbconn->commit();
    //     } catch (PDOException $ex) {
    //         $this->dbconn->rollBack();
    //         throw $ex;
    //     }
    // }

    /* - Autofill the Update Event Form - */
    function get_details($evid)
    {
        $stmt = $this->dbconn->prepare("SELECT * FROM events WHERE eventID = :eid");
        $stmt->bindValue(":eid", $evid);
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }

    /* -- Update Events Function -- */
    public function updateEvent($evid, $update_ev_name, $update_ev_desc, $update_ev_cat, $update_ev_address, $update_ev_loc, $update_ev_date, $update_ev_time, $date, $browser, $ip, $action_type, $UserID)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            /* --- Event Table --- */
            $stmt = $this->dbconn->prepare("UPDATE events SET eventName = :update_ev_name, eventDescription = :update_ev_desc, eventCategory = :update_ev_cat, eventAddress = :update_ev_address, eventLocation = :update_ev_loc, eventDate = :update_ev_date, eventTime = :update_ev_time WHERE eventID = :eid");
            // bind values
            $stmt->bindValue(":eid", $evid);
            $stmt->bindValue(':update_ev_name', $update_ev_name);
            $stmt->bindValue(':update_ev_desc', $update_ev_desc);
            $stmt->bindValue(':update_ev_cat', $update_ev_cat);
            $stmt->bindValue(':update_ev_address', $update_ev_address);
            $stmt->bindValue(':update_ev_loc', $update_ev_loc);
            $stmt->bindValue(':update_ev_date', $update_ev_date);
            $stmt->bindValue(':update_ev_time', $update_ev_time);
            // Execute the update statement
            $stmt->execute();

            $UserID = $_SESSION["UserID"];

            /* - Changelog Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type, UserID) VALUES (:date, :browser, :ip, :action_type, :UserID)");
            $stmt->bindValue(':date', $date);
            $stmt->bindValue(':browser', $browser);
            $stmt->bindValue(':ip', $ip);
            $stmt->bindValue(':action_type', $action_type);
            $stmt->bindValue(':UserID', $UserID);
            $stmt->execute();

            // Commit changes here 
            $this->dbconn->commit();
        } catch (PDOException $ex) {
            $ex->getMessage();
            exit();
        }
    }

    /* -- Delete Events Function -- */
    public function removeEvent($evid)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            $stmt = $this->dbconn->prepare("DELETE FROM events WHERE eventID = :eid");
            $stmt->bindValue(':eid', $evid);

            $stmt->execute();
            $this->dbconn->commit();
        } catch (PDOException $ex) {
            $this->dbconn->rollBack();
            throw $ex;
        }
    }
}
