import { classExpression } from '@babel/types';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ServiceCard from './StatisticsSubComponents/ServiceCard';
import ServiceRowCard from './StatisticsSubComponents/ServiceRowCard';
function StatisticsTab(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={2}>
                    <ServiceCard/>
                </Grid>
                <Grid item xs={2}>
                    <ServiceCard/>
                </Grid>
                <Grid item xs={2}>
                    <ServiceCard/>
                </Grid>
                <Grid item xs={2}>
                    <ServiceCard/>
                </Grid>
                <Grid item xs={2}>
                    <ServiceCard/>
                </Grid>
                <Grid item xs={2}>
                    <ServiceCard/>
                </Grid>
            </Grid>
            <Grid container className={classes.rowList}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <ServiceRowCard/>
                    <ServiceRowCard/>
                    <ServiceRowCard/>
                    <ServiceRowCard/>
                    <ServiceRowCard/>
                    <ServiceRowCard/>
                    
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