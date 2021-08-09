import React from 'react';
import { Grid,makeStyles } from '@material-ui/core';
function Preview(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
           <Grid container>
               <Grid item xs={12}>
                    {/* Left side project preview */}
                    <h3>Project displayer</h3>
                    <h4>Get it from nadir's projects list component</h4>
               </Grid>
               
           </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    mainContainer:{
        // backgroundColor:"blue",
        width:'100%',
        height:300
    },
   
 }));
 
export default Preview;