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
    public function register($reg_name, $reg_phone, $reg_email, $reg_dob, $reg_pass, $date, $browser, $ip, $action_type)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();

            /* - Users Table - */
            $stmt = $this->dbconn->prepare("INSERT INTO users(FullName, PhoneNumber, DateOfBirth) VALUES(:reg_name, :reg_phone, :reg_dob)");
            $stmt->bindValue(':reg_name', $reg_name);
            $stmt->bindValue(':reg_phone', $reg_phone);
            $stmt->bindValue(':reg_dob', $reg_dob);
            $row = $stmt->fetch();
            $stmt->execute();

            // last User ID
            $lastuserID = $this->dbconn->lastInsertId();

            /* - Login Table - */
            $reg_pass = password_hash($reg_pass, PASSWORD_DEFAULT);
            $stmt = $this->dbconn->prepare("INSERT INTO login(Email, Password, userID) VALUES(:reg_email, :reg_pass, :user_ID)");
            // hashing the password with PASSWORD_HASH()
            $stmt->bindValue(':reg_email', $reg_email);
            $stmt->bindValue(':reg_pass', $reg_pass);
            $stmt->bindValue(':user_ID', $lastuserID);
            $row = $stmt->fetch();
            $stmt->execute();


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
    public function login($log_email, $log_pass, $date, $browser, $ip, $action_type)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            $log_email = ($_POST['log_email']);
            $log_pass = ($_POST['log_pass']);
            $stmt = $this->dbconn->prepare("SELECT * FROM login INNER JOIN users on login.userID = users.userID WHERE login.Email =:log_email");
            $stmt->bindValue(':log_email', $log_email);
            $stmt->execute();
            $row = $stmt->fetch();
            if (password_verify($log_pass, $row['Password'])) {
                /* Set the session variables for each user that logs in to also record what the users will interact with */
                /* Define the session variables for login */
                $_SESSION['currentloggedin'] = $log_email;
                $_SESSION["login"] = 'true';
                $_SESSION["access_rights"] = $row["access_rights"];
                $_SESSION['loginID'] = $row['loginID'];
                $_SESSION['user_ID'] = $row['user_ID'];
                $_SESSION['time_start_login'] = time();
                time('H:i:s');

                // echo "Welcome " . $_SESSION['currentloggedin'];

                /* - Changelog Table - */
                $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type) VALUES (:date, :browser, :ip, :action_type)");
                $stmt->bindValue(':date', $date);
                $stmt->bindValue(':browser', $browser);
                $stmt->bindValue(':ip', $ip);
                $stmt->bindValue(':action_type', $action_type);
                $stmt->execute();

                $this->dbconn->commit();

                return true;
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            $this->dbconn->rollback();
            throw $ex;
        }
    }



    // function getUsers()
    // {
    //     $user_ID = $_GET['user_ID'];
    //     $sql = "SELECT * FROM users WHERE userID = '$user_ID'"; //{$_GET[$BookID]}
    //     $stmt = $this->dbconn->prepare($sql);
    //     $stmt->execute();
    //     $stmt->fetch(PDO::FETCH_ASSOC);
    // }

    // public function updateUser($reg_name, $reg_phone, $reg_dob, $date, $browser, $ip, $action_type, $user_ID)
    // {
    //     try {
    //         $this->dbconn->beginTransaction();

    //         $user_ID = $_GET['user_ID'];
    //         $sql = "SELECT * FROM users WHERE userID = '$user_ID'";
    //         $stmt = $this->dbconn->prepare($sql);
    //         $stmt->execute();
    //         $stmt->fetch(PDO::FETCH_ASSOC);

    //         /* - User Table - */
    //         $stmt = $this->dbconn->prepare("UPDATE users SET FullName = :log_name_e, PhoneNumber = :log_phone_e, DateOfBirth = :log_dob_e WHERE user_ID = :user_ID");
    //         // bind values

    //         $stmt->bindValue(':log_name_e', $reg_name);
    //         $stmt->bindValue(':log_phone_e', $reg_phone);
    //         $stmt->bindValue(':log_dob_e', $reg_dob);
    //         $stmt->bindValue(':user_ID', $user_ID);
    //         // Execute the update statement
    //         $stmt->execute();

    //         // last User ID
    //         // $lastuserID = $this->dbconn->lastInsertId();

    //         /* -  Login Table - */
    //         // $stmt = $this->dbconn->prepare("UPDATE login SET Email = :log_email_e WHERE loginID = :login_ID");
    //         // // bind values
    //         // $stmt->bindValue(':log_email_e', $log_email);
    //         // $stmt->bindValue(':log_pass_e', $log_pass);
    //         // $stmt->bindValue(':user_ID', $lastuserID);
    //         // // Execute the update statement
    //         // $stmt->execute();

    //         /* - Changelog Table - */
    //         $stmt = $this->dbconn->prepare("INSERT INTO changelog(date, browser, ip, action_type) VALUES (:date, :browser, :ip, :action_type)");
    //         $stmt->bindValue(':date', $date);
    //         $stmt->bindValue(':browser', $browser);
    //         $stmt->bindValue(':ip', $ip);
    //         $stmt->bindValue(':action_type', $action_type);
    //         $stmt->execute();

    //         // Commit changes here //
    //         $this->dbconn->commit();
    //     } catch (PDOException $ex) {
    //         throw $ex;
    //     }
    // }

    /* -- Check if user account exists -- */
    // function checkUserAccount()
    // {
    //     return "['account': 'exists']";
    // }

    // Display user profile by userID
    function displayUser()
    {
        try {
            $mysql = "SELECT userID, FullName, PhoneNumber, DateOfBirth FROM users 
            WHERE userID = :userid";
            $stmt = $this->dbconn->prepare($mysql);
            $stmt->bindValue(':userid', $_SESSION['userID']);
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;
        } catch (PDOException $ex) {
            throw $ex;
        }
    }
    // User update with values retrieved from update form
    function updateUser(
        $log_name_e,
        $log_phone_e,
        $log_dob_e
    ) {
        $mysql = "UPDATE users SET FullName = :log_name_e, PhoneNumber = :log_phone_e, DateOfBirth = :log_dob_e
            WHERE userID = :userid";
        $stmt = $this->dbconn->prepare($mysql);
        $stmt->bindValue(':userid', $_SESSION['userID']);
        $stmt->bindValue(':log_name_e', $log_name_e);
        $stmt->bindValue(':log_dob_e', $log_dob_e);
        $stmt->bindValue(':log_phone_e', $log_phone_e);

        // if user did not insert phone number, stop data insertion into MySQL database
        if (!preg_match("/^[0-9]{10}$/", $log_phone_e)) {
            die;
            return false;
        }
        return $stmt->execute();
    }

    /* -- Create Events Function -- */
    public function createEvents($event_name, $event_desc, $event_cat, $event_address, $event_loc, $event_date, $event_time, $date, $browser, $ip, $action_type)
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
    function checkAttendance($evid)
    {
        db_connection();
        $stmt = $this->dbconn->prepare("SELECT * FROM attendance INNER JOIN events on attendance.userID = events.userID WHERE events.EventID =:eid");
        // $stmt->bindValue(':', $);
        $stmt->bindValue(":eid", $evid);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    }

    public function updateAttend($evid, $answer)
    {
        db_connection();
        try {
            $this->dbconn->beginTransaction();
            $stmt = $this->dbconn->prepare("UPDATE attendees SET attending = :answer WHERE events.eventID = :questionid");
            $stmt->bindValue(":eid", $evid);
            $stmt->bindValue(':answer', $answer);

            $stmt->execute();

            $this->dbconn->commit();
        } catch (PDOException $ex) {
            $this->dbconn->rollBack();
            throw $ex;
        }
    }

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
    public function updateEvent($evid, $update_ev_name, $update_ev_desc, $update_ev_cat, $update_ev_address, $update_ev_loc, $update_ev_date, $update_ev_time)
    {
        print_r("hello");
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
