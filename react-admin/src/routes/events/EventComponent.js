import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
});

function EventComponent() {
    const classes = useStyles();
    return (
        <Column>
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
            </Row>
            
        </Column>
    );
}

export default EventComponent;
