<?php
// session_start();

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

    function requestLimit()
    {
        $time = time();
        array_push($this->timeLimit, $time);
        $limitCount = count($this->timeLimit);
        // 24 hours converts to 864000 seconds 
        // If the current request passes 1000 requests limit within 24 hours the application stops
        if (time() - $this->lastTime < 864000) {
            if ($limitCount > 1000) {
                die("Request exceeded within 24 hours");
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    // Saves the time of the last request that was made
    function lastSessionRequest()
    {
        $_SESSION['last_request_time'] = time();
        return true;
    }

    function rateLimit()
    {
        date_default_timezone_set("Australia/Brisbane");
        // This if statement checks if the current session request is empty
        if (isset($_SESSION['last_session_request'])) {
            // if the currengt request time is equal or more than the previous request time
            if ($_SESSION['last_session_request'] >= time() - 1) {
                die;
                echo "Surpassed Rate limit";
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

    /* - Rate Limiting - */
    /* The rate limiting function that is programmed into the project will check if there is a session set. It sets the start time and if it happens to be null the function will set the current time to the start time */
    //     public function setStartTime($startTime)
    //     {
    //         $this->_startTime = $startTime;
    //     }
    //     public function getStartTime()
    //     {
    //         return $this->_startTime;
    //     }
    //     public function setRequestCounters($requestCounter)
    //     {
    //         $this->_requestCounter = $requestCounter;
    //     }
    //     public function getRequestCounter()
    //     {
    //         return $this->_requestCounters;
    //     }

    //     public function Rate24HourCheck()
    //     {
    //         if ($this->_startTime == null) {
    //             $this->_startTime = time();
    //         }

    //         /* The calculation below shows that the number 3600 is in reference to how many seconds are in an hour it will modify itself based on the $hours variable that has been set */
    //         $this->requestCounter++;
    //         $hours = (time() - $this->_startTime / 3600);

    //         /* In which if the $hours variable ends up being more than 24 then the counter will reset to 0 then the rate limit continues */
    //         $this->_startTime = time();
    //         if ($hours < 24 && $this->_requestCounter > 1000) {
    //             return false;
    //         } else if ($hours >= 24) {
    //             $this->_requestCounter = 0;
    //         }
    //         return $this->_requestCounter;
    //     }

    //     public function RateCheck()
    //     {
    //         if ($this->_startTime == null) {
    //             $this->_startTime = time();
    //         }
    //         $this->requestCounter++;
    //         $seconds = (time() - $this->_startTime);
    //         $this->_startTime = time();
    //         if ($seconds < 1 && $this->_requestCounter > 1) {
    //             return false;
    //         } else if ($seconds > 1) {
    //             $this->_requestCounter = 0;
    //         }
    //         return $this->_requestCounter;
    //     }

    //     public function is_referrer()
    //     {
    //         return true;
    //     }
}
