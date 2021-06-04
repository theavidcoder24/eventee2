import React from 'react';

function FeedbackMessage() {
    /* Success Messages */
    function successmessage(message) {
        var successmessage = document.querySelector("#successmessage");
        successmessage.innerHTML = message;
        successmessage.style.display = "block";
        window.setTimeout(function () {
            successmessage.style.display = 'none';
        }, 7000)
    }

    /* Error Messages */
    function errormessage(message) {
        var errormessage = document.querySelector("#errormessage");
        errormessage.innerHTML = message;
        errormessage.style.display = "block";
        window.setTimeout(function () {
            errormessage.style.display = 'none';
        }, 7000)
    }
}

export default FeedbackMessage;
