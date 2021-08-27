import React,{useState}from 'react';
import { makeStyles,Grid } from '@material-ui/core';
import { Headings } from '../Support/Headings';
import { lightBorder } from '../../../Theme/borders';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 

function SummuryBarContainer(props) {
    const classes=useStyles();
    const [ordersCompleted,SetOrdersCompleted]=useState('0');
    const [earnedInCurrentMonth,setEarnedInCurrentMonth]=useState('0')
    const [avgSellingPrice,setAvgSellingPrice]=useState('0');
    const [earnings,setEarnings]=useState('0');
    const [onlineUsers,setOnlineUsers]=useState('0');
    const [onlineTeamMemebers,setOnlineTeamMemebers]=useState('0');

    return (
        <Card className={classes.root}>
            <CardContent>
            <Grid container>
   
   <Grid item xs={12} style={{marginTop:'2rem'}}> 
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

</Grid>
            </CardContent>
        </Card>
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
export default SummuryBarContainer;