<?php
class dbObj{
    private $dbconn;
    // Create connection with the required specific database
    public function __construct() {
        $dbusername = "root";
        $dbpassword = "";
        $this->dbconn = new PDO("mysql:host=localhost; dbname=dvdbooking", $dbusername, $dbpassword);
        $this->dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->dbconn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    }
    // Display user profile by userID
    function displayUser(){
        try {
        $mysql = "SELECT userID, firstname, lastname, dateofbirth, email, phone, username FROM users 
        WHERE userID = :userid";
        $stmt = $this->dbconn->prepare($mysql);
        $stmt->bindValue(':userid', $_SESSION['userID']);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
        }
        catch (PDOException $ex) { 
            throw $ex;
        }
    }
    // User update with values retrieved from update form
    function updateUser($firstnameupdt, $lastnameupdt, $dateofbirthupdt, $emailupdt, 
    $phoneupdt, $usernameupdt, $passwordupdt){
        $mysql = "UPDATE users SET firstname = :firstnameupdt, lastname = :lastnameupdt, dateofbirth = :dateofbirthupdt, 
        email = :emailupdt, phone = :phoneupdt, username = :usernameupdt, password = :passwordupdt 
        WHERE userID = :userid";
        $stmt = $this->dbconn->prepare($mysql);
        $stmt->bindValue(':userid', $_SESSION['userID']);
        $stmt->bindValue(':firstnameupdt', $firstnameupdt);
        $stmt->bindValue(':lastnameupdt', $lastnameupdt);
        $stmt->bindValue(':dateofbirthupdt', $dateofbirthupdt);
        $stmt->bindValue(':emailupdt', $emailupdt);
        $stmt->bindValue(':phoneupdt', $phoneupdt);
        $stmt->bindValue(':usernameupdt', $usernameupdt);
        $hpasswordUpdt = password_hash($passwordupdt, PASSWORD_DEFAULT);
        $stmt->bindValue(':passwordupdt', $hpasswordUpdt);
        // Form Validation
        // if user did not insert email, stop data insertion into MySQL database
        if(!filter_var($emailupdt, FILTER_VALIDATE_EMAIL)){
            die;
            return false;
        }
        // if user did not insert phone number, stop data insertion into MySQL database
        if(!preg_match("/^[0-9]{10}$/", $phoneupdt)){
            die;
            return false;
        }
        return $stmt->execute();
    }
}
?>
