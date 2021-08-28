import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ListOfAllProjects from './ViewAllProjectsSubComponents/ListOfAllProjects';
import ProjectEditor from './ViewAllProjectsSubComponents/ProjectEditor';

function ViewAllProjectsTab(props) {
    const classes = useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const [selectedProjectKeyHook,setSelectedProjectKeyHook]=useState(0);
    const handelOptionSelection = (event,selectedOption,selectedProjectKey)=>{
        // alert("here"+selectedOption+" - "+selectedProjectKey)
        if(selectedOption===0)
        {
            setSelectedProjectKeyHook(selectedProjectKey)
            setScreenSwitcher(false)   
        }
    }
    const handelBackToListOfProjectBtnClick = (event)=>{
        setScreenSwitcher(true)
    }
    return (
        <div className={classes.container}>
            <div>
                    {/* Load the component which will render the list of projects */}
                    {(screenSwitcher) ? <ListOfAllProjects  handelOptionSelection={handelOptionSelection}/> :  <ProjectEditor handelBackToListOfProjectBtnClick={handelBackToListOfProjectBtnClick} />}
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    },
    topNav:{
       
    }
}))
export default ViewAllProjectsTab;