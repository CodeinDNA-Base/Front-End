import { Grid, makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import { Headings } from '../Support/Headings';
import { lightBorder } from '../../../Theme/borders';
import ColumnChart from './Charts/OrderOverViewChart';
import OrderOverViewContainer from './OrderOverViewContainer';
import AccountsOverViewContainer from './AccountsOverViewContainer';
import ServicesClickHistoryOverViewContainer from './ServicesClickHistoryOverViewContainer';
import RatingsCounterContainer from './RatingsCounterContainer'
import MEGAControllsCotnainer from './MEGAControllsCotnainer';
import SummuryBarContainer from './SummuryBarContainer';

function Home(props) {
    const classes = useStyles();
    //Summury
    
    return (
        <div>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                  <SummuryBarContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <OrderOverViewContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <AccountsOverViewContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <ServicesClickHistoryOverViewContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <RatingsCounterContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <MEGAControllsCotnainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    summuryDivContainer:{
        borderRight:lightBorder,
        height:'8rem',
        textAlign:'center',
        paddingTop:'2rem'
    }
}))
export default Home;