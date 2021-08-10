import React from 'react';
import { Grid, makeStyles,Box} from '@material-ui/core';
function CurrentProjectsSubTab(props) {
    const clasess = useStyles();
    const projects = [
        {
            ptojectTitle:"Project 1"
        },
        {
            ptojectTitle:"Project 2"
        },
        {
            ptojectTitle:"Project 3"
        },
        {
            ptojectTitle:"Project 4"
        },
        
    ]
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
                            {projects.map((item,index)=>{
                                return(
                                <Grid item xs={5} className={clasess.projectCardContainer}>
                                {/* Project 1 */}
                                <h4>{item.ptojectTitle}</h4>
                                </Grid>
                                )
                                
                            })} 
                            
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
        paddingLeft:'10%'
    },
    projectCardContainer:{
        // backgroundColor:'green',
        height:250,
        border: '1px solid black',
        textAlign:'center'
    }
}));
export default CurrentProjectsSubTab;