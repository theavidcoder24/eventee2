<?php
// header('Access-Control-Allow-Origin: *');
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
$_SESSION['se'] = new sessObj;

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

/* -- Base Case -- */
/* The base case serves as the main section where the api actions will be referenced from the fetch statements in 'script.js'. As default the isset is defined as GET so that if a case is defined as a GET action it will run automatically as for POST actions it requires another extra line in order to be recognised as a POST */
if (isset($_GET["action"])) {
    switch ($_GET["action"]) {
            // User Register
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
                if ($reg_name == "") {
                    $errorMsg = "Error: Full Name Field is Empty";
                    die;
                }
                if ($reg_phone == "") {
                    $errorMsg = "Error: Phone Number Field is Empty";
                    die;
                }
                // Check if the phone number field is numeric
                elseif (is_numeric(trim($reg_ph)) == false) {
                    $errorMsg = "Error: Please enter numeric value";
                    die;
                }
                if ($reg_dob == "") {
                    $errorMsg = "Error: Date of Birth Field is Empty";
                    die;
                }
                if ($reg_email == "") {
                    $errorMsg = "Error: Email Field is Empty";
                    die;
                } elseif (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,50}/i", $reg_email)) {
                    $errorMsg = 'error : You did not enter a valid email.';
                    die;
                }
                if ($reg_pass == "") {
                    $errorMsg = "Error: Password Field is Empty";
                    die;
                }
                $db->register($reg_name, $reg_phone, $reg_email, $reg_dob, $reg_pass, $date, $browser, $ip, $action_type);
                http_response_code(202);
            } else {
                http_response_code(501);
            }
            break;
            // User Login
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
                if ($log_email == "") {
                    $errorMsg = "Error: Email Field is Empty";
                    die;
                }
                // Check if email field is valid
                elseif (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,50}/i", $log_email)) {
                    $errorMsg = 'error : You did not enter a valid email.';
                    die;
                }
                // Check if input field is empty
                if ($log_pass == "") {
                    $errorMsg = "Error: Password Field is Empty";
                    die;
                }
                $db->login($log_email, $log_pass, $date, $browser, $ip, $action_type);
                http_response_code(202);
            } else {
                http_response_code(401);
            }

            break;
            // Check if user is logged in
        case "is_logged_in":
            $result = $_SESSION['se']->is_logged_in();
            if ($result == true) {
                http_response_code(202);
            }
            if ($result == false) {
                http_response_code(401);
            }
            break;

            // Log user out
        case "logout":
            session_destroy();
            http_response_code(202);
            break;

            //     // Create Events
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
            // Display User Events
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
            // Autofill the update form
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
                // } else {
                //     http_response_code(401);
            }
            break;
            // Update the User Event
        case "updateEvent":
            $event_name = $_POST['event_name'];
            $event_desc = $_POST['event_desc'];
            $event_cat = $_POST['event_cat'];
            $event_address = $_POST['event_address'];
            $event_loc = $_POST['event_loc'];
            $event_date = $_POST['event_date'];
            $event_time = $_POST['event_time'];
            $evid = $_POST['eventid'];
            if (isset($_POST["action"]) == "updateEvent") {
                $db->updateEvent($event_name, $event_desc, $event_cat, $event_address, $event_loc, $event_date, $event_time, $evid);
                http_response_code(202);
            } else {
                if ($_POST["eventid"] == null) {
                    http_response_code(404);
                }
            }
            break;
            // Remove User Event
        case "removeEvent":
            $evid = $_POST['eventid'];
            if (isset($_POST["action"])) {
                if ($_POST["eventid"] == null) {
                    // echo "[$_POST]" die;
                    http_response_code(401);
                } else {
                    // $evid = $_POST['evid'];
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
