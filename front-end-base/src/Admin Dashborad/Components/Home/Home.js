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
function Home(props) {
    const classes = useStyles();

    //Summury
    const [ordersCompleted,SetOrdersCompleted]=useState('0');
    const [earnedInCurrentMonth,setEarnedInCurrentMonth]=useState('0')
    const [avgSellingPrice,setAvgSellingPrice]=useState('0');
    const [earnings,setEarnings]=useState('0');
    const [onlineUsers,setOnlineUsers]=useState('0');
    const [onlineTeamMemebers,setOnlineTeamMemebers]=useState('0');



    return (
        <div>
           <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{marginTop:'2rem'}}> 
                    <Headings text={"Analytics"} fontSize={'3rem'}/>
                    <Grid container style={{border:lightBorder,height:'8rem',marginTop:'2rem'}}>
                        <Grid item xs={2} >
                            <div className={classes.summuryDivContainer}>
                                <Headings text={"Earnings"} fontSize={18} fontWeight={'bold'} />
                                <Headings text={`Rs:${earnings}$`} fontSize={25} fontWeight={'bold   '}/>
                            </div>
                        </Grid>
                        <Grid item xs={2} >
                            <div className={classes.summuryDivContainer}>
                                <Headings text={"Avg selling price"} fontSize={18} fontWeight={'bold'} />
                                <Headings text={`Rs:${avgSellingPrice}$`} fontSize={25} fontWeight={'bold   '}/>
                            </div>
                        </Grid>
                        <Grid item xs={2} >
                            <div className={classes.summuryDivContainer}>
                                <Headings text={"Orders completed"} fontSize={18} fontWeight={'bold'} />
                                <Headings text={`${ordersCompleted}`} fontSize={25} fontWeight={'bold   '}/>
                            </div>
                        </Grid>
                        <Grid item xs={2} >
                            <div className={classes.summuryDivContainer}>
                                <Headings text={"Online Users"} fontSize={18} fontWeight={'bold'} />
                                <Headings text={`${onlineUsers}`} fontSize={25} fontWeight={'bold   '}/>
                            </div>
                        </Grid>
                        <Grid item xs={2} >
                            <div className={classes.summuryDivContainer}>
                                <Headings text={"Online Team Members"} fontSize={18} fontWeight={'bold'} />
                                <Headings text={`${onlineTeamMemebers}`} fontSize={25} fontWeight={'bold   '}/>
                            </div>
                        </Grid>
                        
                        <Grid item xs={2} >
                            <div style={{textAlign:'center',paddingTop:'2rem'}}>
                                <Headings text={"Earned in CurrentMonth"} fontSize={18} fontWeight={'bold'} />
                                <Headings text={`Rs:${earnedInCurrentMonth}$`} fontSize={25} fontWeight={'bold'}/>
                            </div>
                        </Grid>
                    </Grid>
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