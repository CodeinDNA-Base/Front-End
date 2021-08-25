import React from 'react';
import { makeStyles } from '@material-ui/core';
function VerticalTabs(props) {
    const classes=useStyles();
    return (
        <div  className={classes.container}>
            <h1>This is common VerticalTabs</h1>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    }
}))

export default VerticalTabs;
