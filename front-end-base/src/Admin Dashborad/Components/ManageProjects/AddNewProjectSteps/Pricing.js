import React from 'react';
import { Grid,makeStyles,Button,Box} from '@material-ui/core';

function Pricing(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <h1>Here we go to make packages</h1>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    mainContainer:{
        backgroundColor:"blue",
        width:'100%',
        height:300
    },
   
 }));
 

export default Pricing;