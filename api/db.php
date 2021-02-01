<?php

function db_connection()
{
    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    try {
        $dbconn = new PDO("mysql:host=$servername;dbname=eventee", $dbusername, $dbpassword);
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
        $this->dbconn = new PDO("mysql:host=$servername;dbname=eventee", $dbusername, $dbpassword);
        // set the PDO error mode to exception 
        // (debug - comment out in production)
        $this->dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    /* -- New User Function -- */
    public function register($reg_fullname, $reg_ph, $reg_dob, $reg_email, $reg_pass, $date, $browser, $action_type)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();

            /* - Users Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO users(FullName, PhoneNumber, DateOfBirth) VALUES(:reg_fullname, :reg_ph, :reg_dob)");
            $stmt->bindValue(':reg_fullname', $reg_fullname);
            $stmt->bindValue(':reg_ph', $reg_ph);
            $stmt->bindValue(':reg_dob', $reg_dob);
            $row = $stmt->fetch();
            // ^ Added
            // $stmt->bindValue('reg_prof', $reg_prof);
            $stmt->execute();

            // last inserted = loginID
            $lastuserID = $this->dbconn->lastInsertId();

            /* - Login Table - */
            $reg_pass = password_hash($reg_pass, PASSWORD_DEFAULT);
            $stmt = $this->dbconn->prepare("INSERT INTO login(Email, Password, UserID) VALUES(:reg_email, :reg_pass, :user_ID)");
            // hashing the password with PASSWORD_HASH()
            $stmt->bindValue(':reg_email', $reg_email);
            $stmt->bindValue(':reg_pass', $reg_pass);
            $stmt->bindValue(':user_ID', $lastuserID);
            $row = $stmt->fetch();
            // ^ Added
            $stmt->execute();

            $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, action_type) VALUES (:date, :browser, :action_type)");
            $stmt->bindValue(':date', $date);
            $stmt->bindValue(':browser', $browser);
            $stmt->bindValue(':action_type', $action_type);
            // $stmt->bindValue(':userID', $userID);
            $stmt->execute();

            /* Set the session variables for each user that logs in to also record what the users will interact with */
            $_SESSION['User'] = $reg_email;
            $_SESSION["login"] = 'true';
            $_SESSION['LoginID'] = $row['LoginID'];
            $_SESSION['user_ID'] = $row['UserID'];

            $this->dbconn->commit();
        } catch (PDOException $ex) {
            $this->dbconn->rollBack();
            throw $ex;
        }
    }

    /* -- Login Function -- */
    public function login($reg_email, $reg_pass)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            // $reg_email = ($_POST['reg_email']);
            // $reg_pass = ($_POST['reg_pass']);
            $stmt = $this->dbconn->prepare("SELECT * FROM login INNER JOIN users on login.UserID = users.UserID WHERE login.Email =:reg_email");
            $stmt->bindValue(':reg_email', $reg_email);
            $stmt->execute();
            $row = $stmt->fetch();
            if (password_verify($reg_pass, $row['Password'])) {
                /* Define the session variables for login */
                $_SESSION['log_email'] = $reg_email;
                $_SESSION["login"] = 'true';
                $_SESSION['LoginID'] = $row['LoginID'];
                $_SESSION['user_ID'] = $row['UserID'];
                $_SESSION['time_start_login'] = time();
                // time('H:i:s');
                return true;
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            $this->dbconn->rollback();
            throw $ex;
        }
    }

    /* -- Admin Login Function -- */
    // public function adminLogin($reg_email, $reg_pass)
    // {
    //     try {
    //         $this->dbconn->beginTransaction();
    //         // $reg_email = ($_POST['reg_email']);
    //         // $reg_pass = ($_POST['reg_pass']);
    //         $stmt = $this->dbconn->prepare("SELECT login.LoginID, login.Email, login.Password, users.UserID, users.FullName, users.PhoneNumber, users.DateOfBirth FROM login INNER JOIN users on login.UserID = users.UserID WHERE login.Email = :reg_email");
    //         $stmt->bindValue(':reg_email', $reg_email);
    //         $stmt->execute();
    //         $row = $stmt->fetch();
    //         if (password_verify($reg_pass, $row['Password'])) {
    //             if ($row['permissions'] == ("admin")) {
    //                 /* Define the session variables for login */
    //                 $_SESSION['reg_email'] = $reg_email;
    //                 $_SESSION["login"] = 'true';
    //                 $_SESSION['LoginID'] = $row['LoginID'];
    //                 $_SESSION['user_ID'] = $row['UserID'];
    //                 $_SESSION['time_start_login'] = time('H:i:s');
    //                 return true;
    //             }
    //         } else {
    //             return false;
    //         }
    //     } catch (PDOException $ex) {
    //         $this->dbconn->rollback();
    //         throw $ex;
    //     }
    // }

    /* -- Create Events Function -- */
    public function createEvents($event_name, $event_desc, $event_cat, $event_address, $event_loc, $event_date, $event_time)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            /* - Events Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO events(EventName, EventDescription, EventCategory, EventAddress, EventLocation, EventDate, EventTime) VALUES(:event_name, :event_desc, :event_cat, :event_address, :event_loc, :event_date, :event_time)");
            $stmt->bindValue(':event_name', $event_name);
            $stmt->bindValue(':event_desc', $event_desc);
            $stmt->bindValue(':event_cat', $event_cat);
            $stmt->bindValue(':event_address', $event_address);
            $stmt->bindValue(':event_loc', $event_loc);
            $stmt->bindValue(':event_date', $event_date);
            $stmt->bindValue(':event_time', $event_time);
            // $stmt->bindValue(':reg_prof', $reg_prof);
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
            $stmt = $this->dbconn->prepare('SELECT EventID, EventName, EventDescription, EventCategory, EventAddress, EventLocation, EventDate, EventTime FROM events');
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;
        } catch (PDOException $ex) {
            throw $ex;
        }
    }

    /* - Autofill the Update Event Form - */
    function get_details($evid)
    {
        $stmt = $this->dbconn->prepare("SELECT * FROM events WHERE EventID = :eid");
        $stmt->bindValue(":eid", $evid);
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }

    /* -- Update Events Function -- */
    public function updateEvent($event_name, $event_desc, $event_cat, $event_address, $event_loc, $event_date, $event_time, $evid)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            /* --- Event Table --- */
            // $UserID = $_SESSION['user_ID'];
            $stmt = $this->dbconn->prepare("UPDATE events SET EventName = :event_name, EventDescription = :event_desc, EventCategory = :event_cat, EventAddress = :event_address, EventLocation = :event_loc, EventDate = :event_date, EventTime = :event_time WHERE EventID = :eid");
            // bind values
            $stmt->bindValue(':event_name', $event_name);
            $stmt->bindValue(':event_desc', $event_desc);
            $stmt->bindValue(':event_cat', $event_cat);
            $stmt->bindValue(':event_address', $event_address);
            $stmt->bindValue(':event_loc', $event_loc);
            $stmt->bindValue(':event_date', $event_date);
            $stmt->bindValue(':event_time', $event_time);
            $stmt->bindValue(":eid", $evid);
            // $stmt->bindValue(':user_ID', $UserID);

            // Execute the update statement
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
            $stmt = $this->dbconn->prepare("DELETE FROM events WHERE EventID = :eid");
            $stmt->bindValue(':eid', $evid);

            $stmt->execute();
            $this->dbconn->commit();
        } catch (PDOException $ex) {
            $this->dbconn->rollBack();
            throw $ex;
        }
    }
    // public function removeEvent($evid)
    // {
    //     try {
    //         $this->dbconn->beginTransaction();
    //         // Query to delete a record
    //         $stmt = $this->dbconn->prepare("DELETE FROM events WHERE EventID = :eid");
    //         // Bind values
    //         $stmt->bindValue(':eid', $evid);
    //         // Use exec() because no results are returned
    //         $stmt->execute();
    //         // Commit changes
    //         $this->dbconn->commit();
    //     } catch (PDOException $ex) {
    //         throw $ex;
    //     }
    // }

    // function checkUserAccount()
    // {
    //     return "['account': 'exists']";
    // }
}
