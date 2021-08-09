import React from 'react';
import { Grid, makeStyles,Box} from '@material-ui/core';
function CurrentProjectsSubTab(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container className={classes.topRow}>
                <Grid item xs={6}>
                    <div className={classes.col1}><h3>Last update : 10/08/2021</h3> </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.col2}><h3>Display mode: Static</h3> </div>
                </Grid>
            </Grid>

            <Grid container>
                <Box style={{overflow: 'auto',height:340, width: '100%',textAlign:'center'}}>
                    <h2>Get the same compoent/cards of home page</h2>
                </Box>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{
        //  backgroundColor:'blue',
        width:'180%',
        height:410
    }
    ,
    topRow:{
        width:'100%',
        // backgroundColor:"blue"
    },
    col1:{
        width:240   
    }
    ,
    col2:{
        width:200   
    }
    ,
}));
export default CurrentProjectsSubTab;