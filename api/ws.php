<?php
header('Access-Control-Allow-Origin: *');
// allow react admin localhost :0000 ^ 
header('Access-Control-Allow-Credentials: true');

// All echo statements will be json_encoded
header("Access-Control-Allow-Headers", "content-type");
header('Content-Type: application/json');

// Set the timezone to Australia 
date_default_timezone_set('Australia/Brisbane');

// Include the database php file
require('db.php');
$db = new dbObj;

// Include the session php file for session object related
require('session.php');

// Starts the session
session_start();

// Checks if session is set if it's not then creates new session
if (!isset($_SESSION['se'])) {
    $_SESSION['se'] = new sessObj;
}

/* -- Rate Limit 24 Hour Check -- */
if ($_SESSION['se']->Rate24HourCheck() === false) {
    http_response_code(429); // Too Many Requests!
    die();
}

/* -- Referrer -- */
if ($_SESSION['se']->is_referrer() == false) {
    http_response_code(400);
    die();
}

function testInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = htmlentities($data);
    return $data;
}

/* -- Base Case -- */
/* The base case serves as the main section where the api actions will be referenced from the fetch statements in 'script.js'. As default the isset is defined as GET so that if a case is defined as a GET action it will run automatically as for POST actions it requires another extra line in order to be recognised as a POST */
if (isset($_GET["action"])) {
    switch ($_GET["action"]) {
            /* - User Register - */
        case "register":
            if (isset($_POST["action"])) {
                $reg_name = $_POST['reg_name'];
                $reg_phone = $_POST['reg_phone'];
                $reg_email = $_POST['reg_email'];
                $reg_dob = $_POST['reg_dob'];
                $reg_pass = $_POST['reg_pass'];
                $date = date('Y-m-d H:i:s');
                $browser = $_SERVER['HTTP_USER_AGENT'];
                $ip = $_SERVER['REMOTE_ADDR'];
                $action_type = $_POST['register_user'];
                /* - Server Validation - */
                // Check if input field is empty
                // if ($reg_name == "") {
                //     $errorMsg = "Error: Full Name Field is Empty";
                //     die;
                // }
                // if ($reg_phone == "") {
                //     $errorMsg = "Error: Phone Number Field is Empty";
                //     die;
                // }
                // // Check if the phone number field is numeric
                // elseif (is_numeric(trim($reg_ph)) == false) {
                //     $errorMsg = "Error: Please enter numeric value";
                //     die;
                // }
                // if ($reg_dob == "") {
                //     $errorMsg = "Error: Date of Birth Field is Empty";
                //     die;
                // }
                // if ($reg_email == "") {
                //     $errorMsg = "Error: Email Field is Empty";
                //     die;
                // } elseif (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,50}/i", $reg_email)) {
                //     $errorMsg = 'error : You did not enter a valid email.';
                //     die;
                // }
                // if ($reg_pass == "") {
                //     $errorMsg = "Error: Password Field is Empty";
                //     die;
                // }
                $db->register($reg_name, $reg_phone, $reg_email, $reg_dob, $reg_pass, $date, $browser, $ip, $action_type);
                http_response_code(202);
            } else {
                http_response_code(501);
            }
            break;
            /* - User Login - */
        case "login":
            if (isset($_POST["action"])) {
                $log_email = $_POST['log_email'];
                $log_pass = $_POST['log_pass'];
                $date = date('Y-m-d H:i:s');
                $browser = $_SERVER['HTTP_USER_AGENT'];
                $ip = $_SERVER['REMOTE_ADDR'];
                $action_type = $_POST['login_user'];
                /* - Server Validation - */
                // Check if input field is empty
                // if ($log_email == "") {
                //     $errorMsg = "Error: Email Field is Empty";
                //     die;
                // }
                // // Check if email field is valid
                // elseif (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,50}/i", $log_email)) {
                //     $errorMsg = 'error : You did not enter a valid email.';
                //     die;
                // }
                // // Check if input field is empty
                // if ($log_pass == "") {
                //     $errorMsg = "Error: Password Field is Empty";
                //     die;
                // }
                // if (isset($_SESSION['access_rights'])) {
                //     if ($_SESSION['access_rights'] == 'Admin') {
                //         echo 'HII Admin';
                //     }
                // }
                $db->login($log_email, $log_pass, $date, $browser, $ip, $action_type);
                http_response_code(202);
            } else {
                http_response_code(401);
            }
            break;
            /* - Check if user is logged in/status of login - */
        case "is_logged_in":
            $result = $_SESSION['se']->is_logged_in();
            if ($result == true) {
                http_response_code(202);
            }
            if ($result == false) {
                http_response_code(401);
            }
            break;
            /* - Log user out - */
        case "logout":
            session_destroy();
            http_response_code(202);
            break;
            /* - Update User - */
            /* Display User Details action */
        case 'displayuser':
            // A super global variable which is used to collect data from REQUEST METHOD that is GET
            $_SERVER['REQUEST_METHOD'] == 'GET';
            // Check if the user is logged in
            if ($_SESSION['se']->is_logged_in()) {
                $result = $db->displayUser();
                // If the database cannot fetch the profile
                if ($result == false) {
                    http_response_code(503);
                    // If the database can fetch the profile
                } else {
                    http_response_code(201);
                    echo $row['userID'];
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
            if ($_SESSION['se']->is_logged_in()) {
                $objreg = json_decode(file_get_contents("php://input"), true);
                $log_name_e = testInput($objreg['log_name_e']);
                $log_phone_e = testInput($objreg['log_phone_e']);
                $log_dob_e = testInput($objreg['log_dob_e']);
                // Reject data insert if the form is not fully filled
                if (
                    empty($objreg['log_name_e'])
                    && empty($objreg['log_phone_e'])
                    && empty($objreg['log_dob_e'])
                ) {
                    http_response_code(406);
                    echo 'HTTP ERROR 406 - Server Error Response: Not Accepted.';
                    die;
                } else {
                    if ($db->updateUser(
                        $log_name_e,
                        $log_phone_e,
                        $log_dob_e
                    )) {
                        // If the user fully filled in the form
                        http_response_code(202);
                    }
                }
                // If the user is not logged in   
            } else {
                http_response_code(401);
            }
            break;
            // case "updateUser":
            //     if (isset($_POST["action"])) {
            //         $reg_name = $_POST['log_name_e'];
            //         $reg_phone = $_POST['log_phone_e'];
            //         $reg_dob = $_POST['log_dob_e'];
            //         $user_ID = $_GET['user_ID'];
            //         $date = date('Y-m-d H:i:s');
            //         $browser = $_SERVER['HTTP_USER_AGENT'];
            //         $ip = $_SERVER['REMOTE_ADDR'];
            //         $action_type = $_POST['updateUser'];
            //         $db->updateUser($reg_name, $reg_phone, $reg_dob, $date, $browser, $ip, $action_type, $user_ID);
            //         http_response_code(202);
            //     } else {
            //         http_response_code(501);
            //     }
            //     break;
            /* - Create Events - */
        case "createEvents":
            if (isset($_POST["action"])) {
                $event_name = $_POST['event_name'];
                $event_desc = $_POST['event_desc'];
                $event_cat = $_POST['event_cat'];
                $event_address = $_POST['event_address'];
                $event_loc = $_POST['event_loc'];
                $event_date = $_POST['event_date'];
                $event_time = $_POST['event_time'];
                $date = date('Y-m-d H:i:s');
                $browser = $_SERVER['HTTP_USER_AGENT'];
                $ip = $_SERVER['REMOTE_ADDR'];
                $action_type = $_POST['createEvent'];
                /* - Server Validation - */
                // Check if input field is empty
                // if ($event_name == "") {
                //     $errorMsg = "Error: Event Name Field is Empty";
                //     die;
                // }
                // if ($event_desc == "") {
                //     $errorMsg = "Error: Event Description Field is Empty";
                //     die;
                // }
                // if ($event_cat == "") {
                //     $errorMsg = "Error: Event Category Field is Empty";
                //     die;
                // }
                // if ($event_address == "") {
                //     $errorMsg = "Error: Event Address Field is Empty";
                //     die;
                // }
                // if ($event_loc == "") {
                //     $errorMsg = "Error: Event Location Field is Empty";
                //     die;
                // }
                // if ($event_date == "") {
                //     $errorMsg = "Error: Event Name Field is Empty";
                //     die;
                // }
                // if ($event_time == "") {
                //     $errorMsg = "Error: Event Description Field is Empty";
                //     die;
                // }
                // // Check if the phone number field is numeric
                // elseif (is_numeric(trim($event_time)) == false) {
                //     $errorMsg = "Error: Please enter numeric value";
                //     die;
                // }
                // Call the function
                $db->createEvents($event_name, $event_desc, $event_cat, $event_address, $event_loc, $event_date, $event_time, $date, $browser, $ip, $action_type);
                http_response_code(202);
            } else {
                http_response_code(501);
            }
            break;
            /* - Display User Events - */
        case "displayEvents":
            // if ($_SESSION['se']->is_logged_in()) {
            $result = $db->displayEvents();
            if ($result == false) {
                http_response_code(501);
            } else {
                http_response_code(202);
                echo json_encode($result);
            }
            // } else {
            //     http_response_code(401);
            // }
            break;
        case "attendEvent":

            break;
            /* - Autofill the update form - */
        case "fillUpdate":
            if (isset($_POST["action"])) {
                $result = $_SESSION['se']->is_logged_in();
                if ($result == true) {
                    $evid = $_POST['evid'];
                    $details = $db->get_details($evid);
                    if ($details == false) {
                        http_response_code(501);
                    } else {
                        http_response_code(201);
                        echo json_encode($details);
                    }
                }
            }
            break;
            /* - Update the User Event - */
        case "updateEvent":
            if (isset($_POST["action"])) {
                // $evid = $_GET['evid'];
                $_SERVER['REQUEST_METHOD'] == 'POST';
                $objreg = json_decode(file_get_contents("php://input"), true);
                $evid = testInput($objreg['evid']);
                $update_ev_name = testInput($objreg['update_ev_name']);
                $update_ev_desc = testInput($objreg['update_ev_desc']);
                $update_ev_cat = testInput($objreg['update_ev_cat']);
                $update_ev_address = testInput($objreg['update_ev_address']);
                $update_ev_loc = testInput($objreg['update_ev_loc']);
                $update_ev_date = testInput($objreg['update_ev_date']);
                $update_ev_time = testInput($objreg['update_ev_time']);
                $db->updateEvent($evid, $update_ev_name, $update_ev_desc, $update_ev_cat, $update_ev_address, $update_ev_loc, $update_ev_date, $update_ev_time);
                // echo "Record updated successfully";
                http_response_code(202);
            } else {
                http_response_code(400);
            }
            // if ($_POST["eventid"] == null)
            break;
            /* - Remove User Event - */
        case "removeEvent":
            $evid = $_POST['eventid'];
            if (isset($_POST["action"])) {
                if ($_POST["eventid"] == null) {
                    http_response_code(401);
                } else {
                    $db->removeEvent($evid);
                    http_response_code(202);
                }
            }
            break;
            /* As a default the default case is set to a 501 error so that it is catgetorised as a general error */
        default:
            // http_response_code(501);
            break;
    }
}
