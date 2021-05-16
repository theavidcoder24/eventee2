<?php
// session_start();

class sessObj
{
    public $UserID;

    /* This session function checks if the user is logged in by refering to the session variable login whether it's set to true or false based on the sesssion array */
    function is_logged_in()
    {
        if ($_SESSION["login"] = true) {
            return true;
        } else {
            return false;
        }
        // if ("login" == true) {
        //     if (!isset($_SESSION['login']) == true) {
        //         // echo "Welcome " . $_SESSION['LoginEmail'];
        //         return true;
        //         // if (isset($_SESSION['access_rights'])) {
        //         //     if ($_SESSION['access_rights'] == 'Admin') {
        //         //     }
        //         // }
        //     }
        // } elseif ("login" == false) {
        //     return false;
        // }
    }

    public function userid()
    {
        // echo $this->UserID;
    }

    /* - Rate Limiting - */
    /* The rate limiting function that is programmed into the project will check if there is a session set. It sets the start time and if it happens to be null the function will set the current time to the start time */
    public function setStartTime($startTime)
    {
        $this->_startTime = $startTime;
    }
    public function getStartTime()
    {
        return $this->_startTime;
    }
    public function setRequestCounters($requestCounter)
    {
        $this->_requestCounter = $requestCounter;
    }
    public function getRequestCounter()
    {
        return $this->_requestCounters;
    }

    public function Rate24HourCheck()
    {
        if ($this->_startTime == null) {
            $this->_startTime = time();
        }

        /* The calculation below shows that the number 3600 is in reference to how many seconds are in an hour it will modify itself based on the $hours variable that has been set */
        $this->requestCounter++;
        $hours = (time() - $this->_startTime / 3600);

        /* In which if the $hours variable ends up being more than 24 then the counter will reset to 0 then the rate limit continues */
        $this->_startTime = time();
        if ($hours < 24 && $this->_requestCounter > 1000) {
            return false;
        } else if ($hours >= 24) {
            $this->_requestCounter = 0;
        }
        return $this->_requestCounter;
    }

    public function RateCheck()
    {
        if ($this->_startTime == null) {
            $this->_startTime = time();
        }
        $this->requestCounter++;
        $seconds = (time() - $this->_startTime);
        $this->_startTime = time();
        if ($seconds < 1 && $this->_requestCounter > 1) {
            return false;
        } else if ($seconds > 1) {
            $this->_requestCounter = 0;
        }
        return $this->_requestCounter;
    }

    public function is_referrer()
    {
        return true;
    }
}
