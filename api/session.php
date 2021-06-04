<?php

// Starts the session
session_start();

class sessObj
{
    // Get UserID 
    public $UserID;

    // Get limit, last time + last 24 hours for rate limit
    public $timeLimit;
    public $lastTime;
    public $last24hours;

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
        // Switch limit count to 10 to see die error in action!
        if ($limitCount > 1000) {
            return true;
            die("Request exceeded within 24 hours");
        } else {
            return false;
        }
        // Gets rid of all the requests older than 24 hours
        // 24 hours converts to 864000 seconds 
        $this->last24hours = time() - 86400;
        foreach ($this->timeLimit as $time) {
            if ($time < $this->last24hours) {
                $key = array_search($time, $this->timeLimit);
                array_splice($this->timeLimit, $key);
            }
        }
    }

    // This function will save the time of the last request that was made
    function lastSessionRequest()
    {
        $_SESSION['last_request_time'] = time();
        return true;
    }

    /* The rate limiting function that is programmed into the project will check if there is a session set */
    function rateLimit()
    {
        // This if statement checks if the current session request is empty
        if (isset($_SESSION['last_session_request'])) {
            // if the currennt request time is equal to the request time
            if ($_SESSION['last_session_request'] == time()) {
                echo "Surpassed Rate limit";
                http_response_code(429); // Too Many Requests!!
                die;
            } else {
                return false;
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
