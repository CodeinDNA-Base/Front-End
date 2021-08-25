import React from 'react';
import { makeStyles } from '@material-ui/core';

function Stepper(props) {
    const classes=useStyles();
    return (
        <div  className={classes.container}>
            <h1>This is common  Stepper</h1>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    }
}))
export default Stepper;