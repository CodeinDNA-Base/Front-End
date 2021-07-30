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
        height:400,
        width:360,
        backgroundColor:"gold"
    },
    mainOuterContainer:{
        marginTop:'14%',
    }
  }));
export default Packages;