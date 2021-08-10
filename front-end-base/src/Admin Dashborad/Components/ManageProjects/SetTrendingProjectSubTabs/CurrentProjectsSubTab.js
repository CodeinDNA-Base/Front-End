import React from 'react';
import { Grid, makeStyles,Box} from '@material-ui/core';
function CurrentProjectsSubTab(props) {
    const clasess = useStyles();

    return (
        <div className={clasess.container}>
            <Grid container >
                <Grid item xs={4}>
                    <div className={clasess.col1}><h4>Current Projects</h4> </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={clasess.col1}><h4>Last update : 10/08/2021</h4> </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={clasess.col2}><h4>Display mode: Static</h4> </div>
                </Grid>
            </Grid>

            <Grid container>
               <Grid item xs={12} className={clasess.projectsListContainer}>
                        <Grid container>
                            {/* This will contain the 4 cards of project or what ever design is on home page */}
                            <Grid item xs={1}></Grid>
                            <Grid item xs={5} className={clasess.projectCardContainer}>
                                    {/* Project 1 */}
                                    <h4>Project 1 container</h4>
                            </Grid>
                            <Grid item xs={5} className={clasess.projectCardContainer}>
                                    {/* Project 2 */}
                                     <h4>Project 2 container</h4>
                            </Grid>
                            
                            <Grid item xs={1}></Grid>
                            
                            <Grid item xs={1}></Grid>
                            <Grid item xs={5} className={clasess.projectCardContainer}>
                                    {/* Project 3 */}
                                     <h4>Project 3 container</h4>
                            </Grid>
                            <Grid item xs={5} className={clasess.projectCardContainer}>
                                    {/* Project 4 */}
                                    <h4>Project 4 container</h4>
                            </Grid>
                            
                            <Grid item xs={1}></Grid>
                            
                        </Grid>
               </Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{
        width:'100%',
    }
    ,
    topRow:{
    },
    projectsListContainer:{
        // backgroundColor:'blue'
    },
    projectCardContainer:{
        // backgroundColor:'green',
        height:250,
        border: '1px solid black',
        textAlign:'center'
    }
}));
export default CurrentProjectsSubTab;