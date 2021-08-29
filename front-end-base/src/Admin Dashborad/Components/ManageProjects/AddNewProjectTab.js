import React,{useState} from 'react';
import {Grid, makeStyles} from '@material-ui/core';

import { SidebarForPageChanging } from './AddNewProjectSteps/SidebarForPageChanging';
import BasicInfoForm from './AddNewProjectSteps/BasicInfoForm';
import Media from './AddNewProjectSteps/Media';
import Preview from './AddNewProjectSteps/Preview';
import Publish from './AddNewProjectSteps/Publish';
import {lightBorder} from '../../../Theme/borders'
function AddNewProjectTab(props) {
  const classes = useStyles();
  const [currentPanel,setCurrentPanel]=useState(<BasicInfoForm/>);

  const setCurrentStepNumber = (value)=>{
        switch (value) {
          case 0:
            setCurrentPanel(<BasicInfoForm/>)
            break;
          case 1:
            setCurrentPanel(<Media/>)
            break;
          case 2:
            setCurrentPanel(<Preview/>)
            break;
          case 3:
            setCurrentPanel(<Publish/>)
            break;  
          default:
            setCurrentPanel(<h1>Please set a existing panel</h1>)
            break;
        }
  }

  return (
    <div>
        <Grid container>
            <Grid item xs={3} className={classes.sideBarContainer}>
                <SidebarForPageChanging setCurrentStepNumber={setCurrentStepNumber}/>
            </Grid>
            <Grid item xs={9} className={classes.formasAndOtherStuffContainer}>
                {currentPanel}
            </Grid>
        </Grid>    
    </div>
  );
}

const useStyles = makeStyles((theme)=>({
    sideBarContainer:{
      // backgroundColor:"green"
    },
    formasAndOtherStuffContainer:{
      // backgroundColor:'blue'
      // borderLeft:lightBorder
    }
}));

export default AddNewProjectTab;