import { classExpression } from '@babel/types';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import StatisticsCard from './StatisticsSubComponents/StatisticsCard';
import StatisticeRowCard from './StatisticsSubComponents/StatisticeRowCard';
function StatisticsTab(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <StatisticsCard/>
                </Grid>
                <Grid item xs={3}>
                    <StatisticsCard/>
                </Grid>
                <Grid item xs={3}>
                    <StatisticsCard/>
                </Grid>
                <Grid item xs={3}>
                    <StatisticsCard/>
                </Grid>
               
            </Grid>
            <Grid container className={classes.rowList}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <StatisticeRowCard/>
                    <StatisticeRowCard/>
                    <StatisticeRowCard/>
                    <StatisticeRowCard/>
                   
                    
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    rowList:{
        marginTop:"4%"
    }
}))
export default StatisticsTab;