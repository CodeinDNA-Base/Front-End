import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ListOfAllAccounts from './ViewAllAccountsSubComponents/ListOfAllAccounts';
import AccountEditor from './ViewAllAccountsSubComponents/AccountEditor';
function ShowAllAccountsTab(props) {
    const classes = useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const [selectedProjectKeyHook,setSelectedProjectKeyHook]=useState(0);
    const projectsList = [
        {
            projectTitle:"Project 1",
            projectKey:0,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        {
            projectTitle:"Project 2",
            projectKey:1,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        {
            projectTitle:"Project 3",
            projectKey:2,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        {
            projectTitle:"Project 4",
            projectKey:3,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        
    ]
    const handelOptionSelection = (event,selectedProjectKey)=>{
        // alert("here"+" - "+selectedProjectKey)
            setSelectedProjectKeyHook(selectedProjectKey)
            setScreenSwitcher(false)
    }
    const handelBackToListOfProjectBtnClick = (event)=>{
        setScreenSwitcher(true)
    }
    return (
        <div className={classes.container}>
            <div className={classes.topNav}>
                    {/* Here make a nav bar like for back option etc. */}
            </div>
            <div className={classes.listOfProjects}>
                    {/* Load the component which will render the list of projects */}
                    {(screenSwitcher) ? <ListOfAllAccounts projectsList={projectsList} handelOptionSelection={handelOptionSelection}/> :  <AccountEditor handelBackToListOfProjectBtnClick={handelBackToListOfProjectBtnClick}/>}
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

export default ShowAllAccountsTab;