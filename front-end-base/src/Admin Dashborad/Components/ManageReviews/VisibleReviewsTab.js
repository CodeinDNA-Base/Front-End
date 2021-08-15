import React,{useState} from 'react';
import {makeStyles } from '@material-ui/core/styles';
import ReviewsListContainer from './VisibleReviewsSubComponents/ReviewsListContainer';
import ReviewView from './VisibleReviewsSubComponents/ReviewView';

function VisibleReviewsTab(props) {
    const classes =useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const hanelScreenSwitch = (event,index) =>{
      setScreenSwitcher(!screenSwitcher);
    }
    return (
        <div>
            <div className={classes.topControlsBar}>
                {(screenSwitcher) ? <ReviewsListContainer  hanelScreenSwitch={hanelScreenSwitch}/> : <ReviewView hanelScreenSwitch={hanelScreenSwitch}/>}
            </div>
        </div>
    );
}

const useStyles=makeStyles((theme)=>({
    topControlsBar:{
        // backgroundColor:"blue",
        height:70,
        border:'1px solid #f7f2f7',
        marginTop:"1%"
      },
   
    
}))
export default VisibleReviewsTab;