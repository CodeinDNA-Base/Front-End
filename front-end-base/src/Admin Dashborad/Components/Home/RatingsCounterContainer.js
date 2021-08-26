import React, { useState } from 'react';
import { makeStyles,withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Headings } from '../Support/Headings';
import OrderOverViewChart from './Charts/OrderOverViewChart';
import Dropdown from '../Support/Dropdown';
import GroupedRadioButtons from '../Support/GroupedRadioButtons'
import ServicesClickHistoryOverViewChart from './Charts/ServicesClickHistoryOverViewChart';

function ServicesClickHistoryOverViewContainer(props) {
    const classes=useStyles();
    const [selecteHistoryValue,setSelecteHistoryValue]=useState();
    const [selectGraphMode,setSelectGraphMode]=useState('column')
    const [allTimeRating,setAllTimeRating]=useState(0)
    const [allTimeRatingValue,setAllTimeRatingValue]=useState(4);
    const [fiveStar,setFiveStar]=useState(90);
    const [fourStar,setFourStar]=useState(43);
    const [threeStar,setThreeStar]=useState(10);
    const [twoStar,setTwoStar]=useState(3);
    const [oneStar,setOneStar]=useState(23);
    const [fiveStarTimes,setFiveStarTimes]=useState(0);
    const [fourStarTimes,setFourStarTimes]=useState(0);
    const [threeStarTimes,setThreeStarTimes]=useState(0);
    const [twoStarTimes,setTwoStarTimes]=useState(0);
    const [oneStarTimes,setOneStarTimes]=useState(0);

    const [communicationWithSeller,setCommunicationWithSeller]=useState(3);
    const [serviceAsDescribed,setServiceAsDescribed]=useState(3);
    const [buyAgainAndRecommended,setBuyAgainAndRecommended]=useState(4);
    
    const [communicationWithSellerTimes,setCommunicationWithSellerTimes]=useState(3);
    const [serviceAsDescribedTimes,setServiceAsDescribedTimes]=useState(3);
    const [buyAgainAndRecommendedTimes,setBuyAgainAndRecommendedTimes]=useState(4);
    
    const [ratedOrdersPerc,setRatedOrdersPerc]=useState(39);

    const listOfOptions_ForDropDown=[
        {
            optionTitle:"Last Year",
            optionValue:0
        },
        {
            optionTitle:"Last Month",
            optionValue:1
        },
        {
            optionTitle:"Last Week",
            optionValue:2
        },
        {
            optionTitle:"Last Day",
            optionValue:3
        },
        {
            optionTitle:"Last Hour",
            optionValue:4
        },
        
    ]
    const listOfOptions_RadioBoxes = [
        {
            optionLabel:"Line",
            optionValue:"line",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Spline Area",
            optionValue:"splineArea",
            radioBtnColor:'primary'
        },
        {
            optionLabel:"Doughnut",
            optionValue:"doughnut",
            radioBtnColor:'secondary'
        },
        {
            optionLabel:"Bar",
            optionValue:"bar",
            radioBtnColor:'secondary'
        },
        {
            optionLabel:"Pie",
            optionValue:"pie",
            radioBtnColor:'secondary'
        },
        
        {
            optionLabel:"Column bar",
            optionValue:"column",
            radioBtnColor:'secondary'
        },
        
     
        
    ]
//    label={""}
//    value : mustBeHook
//    setValue: func of hook     

    return (
        <Card className={classes.root}>
        <CardHeader
          action={
            <div>
                <div className={classes.overViewHeadingTitle}>
                    <Headings text={"Rating counter"} fontSize={25} fontWeight={'bold'}/>
                </div>
                {/* <div className={classes.radioBoxOptionsContainer}>
                    <GroupedRadioButtons listOfOptions={listOfOptions_RadioBoxes} value={selectGraphMode} setValue={setSelectGraphMode}/>
                </div>
                <div className={classes.dropDownOptContainer}>
                    <Dropdown listOfOptions={listOfOptions_ForDropDown} label={"History"} value={selecteHistoryValue} setValue={setSelecteHistoryValue} />
                </div> */}
                
            </div>
          }
        
        />
        
        <CardContent>
          {/* <h1>Content</h1> */}
          <div className={classes.chartContainer}>
                <Grid container>
                    <Grid item xs={4} style={{backgroundColor:"",padding:'1rem'}}>
                        <div >
                            <div style={{display:'inline-block'}}>
                                <Headings text={`All-Time Rating ${allTimeRating}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'1rem'}}>
                                <Rating name="disabled" value={allTimeRatingValue} disabled />
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'9rem'}}>
                                 <Headings text={`(${0})`} fontSize={18}/>
                            </div>
                            
                        </div>
                        <div>
                            <div style={{display:'inline-block',marginTop:'1rem'}}>
                                <Headings text={`5 Starts`} fontSize={18}/>
                            </div>
                            <div  style={{display:'inline-block',marginLeft:'1rem'}}>
                                 <BorderLinearProgress variant="determinate" value={fiveStar} />
                            </div>
                            <div style={{display:'inline-block',marginLeft:'1rem'}}>
                                <Headings text={`(${fiveStarTimes})`} fontSize={18}/>
                            </div>
                        </div>
                        <div>
                            <div style={{display:'inline-block',marginTop:'1rem'}}>
                                <Headings text={`4 Starts`} fontSize={18}/>
                            </div>
                            <div  style={{display:'inline-block',marginLeft:'1rem'}}>
                                 <BorderLinearProgress variant="determinate" value={fourStar} />
                            </div>
                            <div style={{display:'inline-block',marginLeft:'1rem'}}>
                                <Headings text={`(${fourStarTimes})`} fontSize={18}/>
                            </div>
                        </div>
                        <div>
                            <div style={{display:'inline-block',marginTop:'1rem'}}>
                                <Headings text={`3 Starts`} fontSize={18}/>
                            </div>
                            <div  style={{display:'inline-block',marginLeft:'1rem'}}>
                                 <BorderLinearProgress variant="determinate" value={threeStar} />
                            </div>
                            <div style={{display:'inline-block',marginLeft:'1rem'}}>
                                <Headings text={`(${threeStarTimes})`} fontSize={18}/>
                            </div>
                        </div>
                        <div>
                            <div style={{display:'inline-block',marginTop:'1rem'}}>
                                <Headings text={`2 Starts`} fontSize={18}/>
                            </div>
                            <div  style={{display:'inline-block',marginLeft:'1rem'}}>
                                 <BorderLinearProgress variant="determinate" value={twoStar} />
                            </div>
                            <div style={{display:'inline-block',marginLeft:'1rem'}}>
                                <Headings text={`(${twoStarTimes})`} fontSize={18}/>
                            </div>
                        </div>
                        <div>
                            <div style={{display:'inline-block',marginTop:'1rem'}}>
                                <Headings text={`1 Starts`} fontSize={18}/>
                            </div>
                            <div  style={{display:'inline-block',marginLeft:'1rem'}}>
                                 <BorderLinearProgress variant="determinate" value={oneStar} />
                            </div>
                            <div style={{display:'inline-block',marginLeft:'1rem'}}>
                                <Headings text={`(${oneStarTimes})`} fontSize={18}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{backgroundColor:"",padding:'1rem'}}>
                        <div>
                               <Headings text={`Rating Breakdown`} fontSize={18} fontWeight={'bolder'}/>           
                        </div>
                        <div style={{marginTop:"1rem"}}>
                           
                            <div style={{display:'inline-block'}}>
                                <Headings text={`Communication With Seller`} fontSize={15} fontWeight={'bold'} />
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'1rem'}} >
                                <Rating name="disabled" value={communicationWithSeller} disabled />
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'9rem'}}>
                                 <Headings text={`${communicationWithSellerTimes}`} fontSize={15} fontWeight={'bold'}/>
                            </div>
                            
                        </div>
                        <div style={{marginTop:"1rem"}}>
                            <div style={{display:'inline-block'}}>
                                <Headings text={`Service as Described`} fontSize={15} fontWeight={'bold'} />
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'1rem'}} >
                                <Rating name="disabled" value={serviceAsDescribed} disabled />
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'9rem'}}>
                                 <Headings text={`${serviceAsDescribedTimes}`} fontSize={15} fontWeight={'bold'}/>
                            </div>
                        </div>
                        <div style={{marginTop:"1rem"}}>
                            <div style={{display:'inline-block'}}>
                                <Headings text={`Buy Again or Recommend`} fontSize={15} fontWeight={'bold'} />
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'1rem'}} >
                                <Rating name="disabled" value={buyAgainAndRecommended} disabled />
                            </div>
                            <div  style={{display:'inline-block',position:"absolute",marginLeft:'9rem'}}>
                                 <Headings text={`${buyAgainAndRecommendedTimes}`} fontSize={15} fontWeight={'bold'}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{backgroundColor:"",padding:'1rem'}}>
                        <div>
                           <Headings text={`Rated Orders ${ratedOrdersPerc}%`} fontSize={18} fontWeight={'bolder'}/>           
                        </div>
                        <div style={{marginTop:'1rem'}}>
                            <BorderLinearProgress_FullWidth variant="determinate" value={ratedOrdersPerc} />
                        </div>
                    </Grid>
                    
                </Grid>
          </div>
          
        </CardContent>
        
      </Card>
    );
}

const useStyles=makeStyles((theme)=>({
    root:{
        width:'100%',
        position:'relative'
    },
    overViewHeadingTitle:{
        // backgroundColor:'blue',
        position:'absolute',
        left:'1rem',
        top:'1rem'
    },
    radioBoxOptionsContainer:{
        // backgroundColor:'blue',
        position:'absolute',
        right:'10rem',
        top:'1.5rem'
    },
    dropDownOptContainer:{
        // backgroundColor:'green',
        position:'absolute',
        right:'0rem',
        top:'1rem'
    },
    chartContainer:{
        paddingTop:'4rem'
    },
    // For progress bar
    root: {
        position: 'relative',
      },
      bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      top: {
        color: '#1a90ff',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
      },
      circle: {
        strokeLinecap: 'round',
      },
    //
}))

const BorderLinearProgress_FullWidth = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width:180
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);
export default ServicesClickHistoryOverViewContainer;