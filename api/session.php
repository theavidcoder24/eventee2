<?php
session_start();

class sessObj
{
    // Get UserID 
    public $UserID;

    // Get limit + last time for rate limit
    public $timeLimit;
    public $lastTime;

    // This records the the time of the last session request into the last time variable
    public function __construct()
    {
        $this->timeLimit = array("");
        $_SESSION['last_session_request'] = time();
        $this->lastTime = $_SESSION['last_session_request'];
    }


    /* - Rate Limiting - */
    function requestLimit()
    {
        $time = time();
        array_push($this->timeLimit, $time);
        $limitCount = count($this->timeLimit);
        // 24 hours converts to 864000 seconds 
        // If the current request passes 1000 requests limit within 24 hours the application stops
        if (time() - $this->lastTime < 864000) {
            // Switch limit count to 10 to see die error in action!
            if ($limitCount > 10) {
                die("Request exceeded within 24 hours");
                http_response_code(429); // Too Many Requests!!
                return false;
            } else {
                return true;
            }
            // return false;
        } else {
            // If the request time is below 24 hours
            return true;
        }
    }

    // This function will save the time of the last request that was made
    function lastSessionRequest()
    {
        $_SESSION['last_request_time'] = time();
        return true;
    }

    /* The rate limiting function that is programmed into the project will check if there is a session set. It sets the start time and if it happens to be null the function will set the current time to the start time */
    function rateLimit()
    {
        date_default_timezone_set("Australia/Brisbane");
        // This if statement checks if the current session request is empty
        if (isset($_SESSION['last_session_request'])) {
            // if the currengt request time is equal or more than the previous request time
            if ($_SESSION['last_session_request'] >= time() - 1) {
                die;
                echo "Surpassed Rate limit";
                http_response_code(429); // Too Many Requests!!

            } else {
                return true;
            }
        } else {
            // if the request is empty the request time will be recorded into the session obj
            $_SESSION['last_session_request'] = time();
        }
    }

    /* This session function checks if the user is logged in by refering to the session variable login whether it's set to true or false based on the sesssion array */
    function is_logged_in()
    {
        if ($_SESSION["login"] = true) {
            return true;
        } else {
            return false;
        }
    }

    public function userid()
    {
        // echo $this->UserID;
    }
}
