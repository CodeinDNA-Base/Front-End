import React from 'react';
import { makeStyles } from '@material-ui/core';

function Filters(props) {
    const classes=useStyles();
    return (
        <div  className={classes.container}>
            <h1>This is common Filters</h1>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    }
}))


export default Filters;