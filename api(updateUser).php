<?php
// The API requires the dbsession.php file that manages the web service session. 
// The dbsession.php file is located in the same folder location as this api.php file
require('dbsession.php');
// The if statement is checking for pre-exisitng session,
// if there is an existing session, it will replace it with a new one
if(!isset($_SESSION['session'])){
    $_SESSION['session'] = new sessionOBJ;
}
// The API requires the dbconnection.php file that talks to the database and 
// perform certain database queries. The dbconnection.php file is located in 
// the same folder location as this api.php file
require('dbconnection.php');
// Establishing connection to the database
$db = new databaseOBJ;

// Sanitise data sent via POST and SEND methods
function testInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = htmlentities($data);
    return $data;
}
switch($_GET['action']) {
/------------------------------------------------ Display User Details action ----------------------------------------
        case 'displayuser':
            // A super global variable which is used to collect data from REQUEST METHOD that is GET
            $_SERVER['REQUEST_METHOD'] == 'GET';
            // Check if the user is logged in
            if($_SESSION['se']->logged_in_check()){
                $result = $db->displayUser();
                // If the database cannot fetch the profile
                if($result == false){
                    http_response_code(503);
                // If the database can fetch the profile
                } else {
                    http_response_code(201);
                    echo json_encode($result);
                }
                // if the user is not logged in
            } else {
                    http_response_code(401);
                }
        break;
//------------------------------------------------ Update User Details action -----------------------------------------
        case 'updateuser':
            // A super global variable which is used to collect data from REQUEST METHOD that is POST
            $_SERVER['REQUEST_METHOD'] == 'POST';
            // Checking if the user is logged in
            if($_SESSION['se']->logged_in_check()){
                $objreg = json_decode(file_get_contents("php://input"), true);
                $usernameupdt = testInput($objreg['username-updt']);
                $passwordupdt = testInput($objreg['password-updt']);
                $firstnameupdt = testInput($objreg['firstname-updt']);
                $lastnameupdt = testInput($objreg['lastname-updt']);
                $dateofbirthupdt = testInput($objreg['dateofbirth-updt']);
                $phoneupdt = testInput($objreg['phone-updt']);
                $emailupdt = testInput($objreg['email-updt']);
                // Reject data insert if the form is not fully filled
                if(empty($objreg['firstname-updt']) && empty($objreg['lastname-updt']) 
                    && empty($objreg['dateofbirth-updt']) && empty($objreg['email-updt']) 
                    && empty($objreg['phone-updt']) && empty($objreg['username-updt']) 
                    && empty($objreg['password-updt'])){
                        http_response_code(406);
                        echo'HTTP ERROR 406 - Server Error Response: Not Accepted.';
                        die;
                    } else {
                if($db->updateUser($firstnameupdt, $lastnameupdt, $dateofbirthupdt, $emailupdt, 
                    $phoneupdt, $usernameupdt, $passwordupdt)){
                    // If the user fully filled in the form
                    http_response_code(202); 
                    } 
                }    
                // If the user is not logged in   
            } else {
                http_response_code(401);
            }
        break;
    ?>
