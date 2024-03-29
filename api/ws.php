<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
// allow react admin localhost :0000 ^ 
// header('Access-Control-Allow-Origin: https://malloriecini.com/');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Access-Control-Allow-Credentials: true');

// All echo statements will be json_encoded
header("Access-Control-Allow-Headers: origin, content-type, accept");
header('Content-Type: application/json');

// Set the timezone to Australia 
date_default_timezone_set('Australia/Brisbane');

// Include the database php file
require('db.php');
$db = new dbObj;
if (!isset($_SERVER['HTTP_REFERER'])) {
    $_SERVER['HTTP_REFERER'] = 0;
}

// Include the session php file for session object related
require('session.php');

// Checks that the referer matches the defined if it's not then end
if ($_SERVER['HTTP_REFERER'] == "http://localhost/eventee2/" || $_SERVER['HTTP_REFERER'] == "http://localhost:3000/") {
    // For debugging purposes and checking address use !== instead 
    // 192.168.43.225
    // https://malloriecini.com/
    // echo "Valid address";
} else {
    http_response_code(502);
    die("Not a valid IP Address");
}

// IP Whitelist
if ($_SERVER['REMOTE_ADDR'] != "[::1]:80") {
    http_response_code(502);
}

// Sanitise input
function testInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = htmlentities($data);
    return $data;
}

// Checks if session is set if it's not then creates new session
if (!isset($_SESSION['se'])) {
    $_SESSION['se'] = new sessObj;
}

// Rate Limiter Activation
if ($_GET["action"] == "logout") {
} else {
    if ($_SESSION['se']->requestLimit() == true || $_SESSION['se']->rateLimit() == true) {
        http_response_code(429);
        die();
    }
}

// $action_type = $_SERVER['QUERY_STRING'];
// $db->changelog($date, $browser, $ip, $action_type, $UserID);

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
                $access_rights = $_POST['access_rights'];
                $date = date('Y-m-d H:i:s');
                $browser = $_SERVER['HTTP_USER_AGENT'];
                $ip = $_SERVER['REMOTE_ADDR'];
                $action_type = $_POST['register'];
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
                if ($reg_dob == "") {
                    $errorMsg = "Error: Date of Birth Field is Empty";
                    die;
                }
                if ($reg_email == "") {
                    $errorMsg = "Error: Email Field is Empty";
                    die;
                }
                if ($reg_pass == "") {
                    $errorMsg = "Error: Password Field is Empty";
                    die;
                }
                if (isset($reg_email)) {
                    $db->register($reg_name, $reg_phone, $reg_email, $reg_dob, $reg_pass, $access_rights, $date, $browser, $ip, $action_type, $UserID);
                    http_response_code(202);
                } else {
                    http_response_code(401);
                }
            }
            break;

            /* - User Login - */
        case "login":
            if (isset($_GET["action"])) {
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
                    $errorMsg = 'Error : You did not enter a valid email.';
                    die;
                }
                // Check if input field is empty
                if ($log_pass == "") {
                    $errorMsg = "Error: Password Field is Empty";
                    die;
                }
                if ($db->login($log_email, $log_pass, $date, $browser, $ip, $action_type, $UserID)) {
                    http_response_code(202);
                } else {
                    http_response_code(501);
                }
            }
            break;

            /* - Admin Login - */
        case "adminLogin":
            if (isset($_GET["action"])) {
                $admin_email = $_POST['admin_email'];
                $admin_pass = $_POST['admin_pass'];
                $date = date('Y-m-d H:i:s');
                $browser = $_SERVER['HTTP_USER_AGENT'];
                $ip = $_SERVER['REMOTE_ADDR'];
                $action_type = $_POST['login_admin'];
                /* - Server Validation - */
                // Check if input field is empty
                if ($admin_email == "") {
                    $errorMsg = "Error: Email Field is Empty";
                    die;
                }
                // Check if email field is valid
                elseif (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,50}/i", $admin_email)) {
                    $errorMsg = 'Error : You did not enter a valid email.';
                    die;
                }
                // Check if input field is empty
                if ($admin_pass == "") {
                    $errorMsg = "Error: Password Field is Empty";
                    die;
                }
                if ($db->adminLogin($admin_email, $admin_pass, $date, $browser, $ip, $action_type, $UserID)) {
                    http_response_code(202);
                } else {
                    // Not authorised
                    http_response_code(401);
                }
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

            /* - Display All Users - */
        case "displayAllUsers":
            if ($_SESSION['se']->is_logged_in()) {
                $result = $db->displayAllUsers();
                if ($result == false) {
                    http_response_code(501);
                } else {
                    http_response_code(202);
                    echo json_encode($result);
                }
            } else {
                http_response_code(401);
            }
            break;

            /* - Display Current User by ID - */
        case "displayUser":
            if ($_SESSION['se']->is_logged_in()) {
                $result = $db->displayUser();
                if ($result == false) {
                    http_response_code(501);
                } else {
                    http_response_code(202);
                    echo json_encode($result);
                }
            } else {
                http_response_code(401);
            }
            break;

            /* - Update User's Profile - */
        case "updateUser":
            if (isset($_GET["action"])) {
                $objreg = json_decode(file_get_contents("php://input"), true);
                $UserID = testInput($objreg['UserID']);
                $update_user_name = testInput($objreg['update_user_name']);
                $update_user_phone = testInput($objreg['update_user_phone']);
                $update_user_dob = testInput($objreg['update_user_dob']);
                $update_user_email = testInput($objreg['update_user_email']);
                $update_access_rights = testInput($objreg['update_access_rights']);
                $date = date('Y-m-d H:i:s');
                $browser = $_SERVER['HTTP_USER_AGENT'];
                $ip = $_SERVER['REMOTE_ADDR'];
                $action_type = $_SERVER['QUERY_STRING'];
                $db->updateUser($update_user_name, $update_user_phone, $update_user_dob, $update_user_email, $update_access_rights, $date, $browser, $ip, $action_type, $UserID);
                http_response_code(202);
            } else {
                http_response_code(400);
            }
            break;

            /* - Display Changelog - */
        case "displayChangelog":
            if ($_SESSION['se']->is_logged_in()) {
                $result = $db->displayChangelog();
                if ($result == false) {
                    http_response_code(501);
                } else {
                    http_response_code(202);
                    echo json_encode($result);
                }
            } else {
                http_response_code(401);
            }
            break;

            /* - Create Events - */
        case "createEvents":
            if ($_SESSION['se']->is_logged_in()) {
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
                    if ($event_name == "") {
                        $errorMsg = "Error: Event Name Field is Empty";
                        die;
                    }
                    if ($event_desc == "") {
                        $errorMsg = "Error: Event Description Field is Empty";
                        die;
                    }
                    if ($event_cat == "") {
                        $errorMsg = "Error: Event Category Field is Empty";
                        die;
                    }
                    if ($event_address == "") {
                        $errorMsg = "Error: Event Address Field is Empty";
                        die;
                    }
                    if ($event_loc == "") {
                        $errorMsg = "Error: Event Location Field is Empty";
                        die;
                    }
                    if ($event_date == "") {
                        $errorMsg = "Error: Event Name Field is Empty";
                        die;
                    }
                    if ($event_time == "") {
                        $errorMsg = "Error: Event Description Field is Empty";
                        die;
                    }
                    // Call the function
                    $db->createEvents($event_name, $event_desc, $event_cat, $event_address, $event_loc, $event_date, $event_time, $date, $browser, $ip, $action_type, $UserID);
                    http_response_code(202);
                } else {
                    http_response_code(501);
                }
            } else {
                http_response_code(401);
            }
            break;

            /* - Display User Events - */
        case "displayEvents":
            if ($_SESSION['se']->is_logged_in()) {
                $result = $db->displayEvents();
                if ($result == false) {
                    http_response_code(501);
                } else {
                    http_response_code(202);
                    echo json_encode($result);
                }
            } else {
                http_response_code(401);
            }
            break;

        case "displayChangelog":
            if ($_SESSION['se']->is_logged_in()) {
                $result = $db->displayChangelog();
                if ($result == false) {
                    http_response_code(501);
                } else {
                    http_response_code(202);
                    echo json_encode($result);
                }
            } else {
                http_response_code(401);
            }
            break;

            // case "attendEvent":

            //     break;

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

            /* - Update the User's Event - */
        case "updateEvent":
            if (isset($_GET["action"])) {
                $_SERVER['REQUEST_METHOD'] == 'POST';
                $objreg = json_decode(file_get_contents("php://input"), true);
                $evid = testInput($objreg['eventid']);
                $update_ev_name = testInput($objreg['update_ev_name']);
                $update_ev_desc = testInput($objreg['update_ev_desc']);
                $update_ev_cat = testInput($objreg['update_ev_cat']);
                $update_ev_address = testInput($objreg['update_ev_address']);
                $update_ev_loc = testInput($objreg['update_ev_loc']);
                $update_ev_date = testInput($objreg['update_ev_date']);
                $update_ev_time = testInput($objreg['update_ev_time']);
                $date = date('Y-m-d H:i:s');
                $browser = $_SERVER['HTTP_USER_AGENT'];
                $ip = $_SERVER['REMOTE_ADDR'];
                $action_type = $_SERVER['QUERY_STRING'];
                $db->updateEvent($evid, $update_ev_name, $update_ev_desc, $update_ev_cat, $update_ev_address, $update_ev_loc, $update_ev_date, $update_ev_time, $date, $browser, $ip, $action_type, $UserID);
                http_response_code(202);
            } else {
                http_response_code(400);
            }
            break;

            /* - Remove User's Event - */
        case "removeEvent":
            if ($_SESSION['se']->is_logged_in()) {
                $evid = $_POST['eventid'];
                if (isset($_POST["action"])) {
                    if ($_POST["eventid"] == null) {
                        http_response_code(401);
                    } else {
                        $db->removeEvent($evid);
                        http_response_code(202);
                    }
                }
            } else {
                http_response_code(402);
            }
            break;

            /* As a default the default case is set to a 404 error so that it is catgetorised as a general error */
        default:
            http_response_code(404);
            break;
    }
}
