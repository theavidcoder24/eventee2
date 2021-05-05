import React, { useState } from 'react';
import { Row } from 'simple-flexbox';
import React, { useState } from 'react';
import { Row } from 'simple-flexbox';
// import { createUseStyles, useTheme } from 'react-jss';

// const useStyles = createUseStyles({
//     cardsContainer: {
//         marginRight: -30,
//         marginTop: -30
//     }
// });

function tableEvents() {
    // const theme = useTheme();
    // const classes = useStyles({ theme });
    <Row>
        <button onclick="displayEvents(); loadPage()" class="waves-effect waves-light btn indigo">Display
Events</button>
        <div class="loadprogress indigo darken-4" style="width: 100%">
            <div class="runningbar indigo lighten-1"></div>
        </div>
        <div class="content">
            <table>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Event Description</th>
                <th>Event Category</th>
                <th>Event Address</th>
                <th>Event Location</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <table id="eventsTable" class="striped">
                </table>
            </table>
        </div>
    </Row>


}