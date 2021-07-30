import { Grid,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import './Styles/StyleSheet.css'
function Packages(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.mainOuterContainer}>
            <Box border={1} borderColor="primary.main">
                <div className={classes.mainInnerContainer}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    {/* Package */}
                    <div className="PackageText">
                        {/* Package */}
                        
                    </div>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    {/* Basic */}
                    <div>
                        <div>
                            {/* Package Price */}
                        </div>
                        <div>
                            {/* Package Name */}
                        </div>
                        <div>
                            {/* Package Description */}
                        </div>
                        <div>
                            {/* Package Other things */}
                        </div>    
                    </div>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    {/* Standard */}
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    {/* Premium */}
                </Grid>
                </div>
            </Box>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    mainInnerContainer:{
        
         // Set according to screen
         ['@media (min-width: 960px)']
         :
         { // eslint-disable-line no-useless-computed-key
                height:450,
                width:360,
                // Set accrding to screen
                backgroundColor:"gold"
         },
         ['@media (max-width: 600px)']
         :
         { // eslint-disable-line no-useless-computed-key
            height:450,
            width:400,

            // Set accrding to screen
            backgroundColor:"blue"
         },
    },
    mainOuterContainer:{
       
        // Set according to screen
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            marginTop:'9%',
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            marginTop:'5%',
        },
        

    }
  }));
export default Packages;