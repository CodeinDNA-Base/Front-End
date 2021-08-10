import { makeStyles } from '@material-ui/core';
import React from 'react';
import ListOfAllProjects from './ViewAllProjectsSubComponents/ListOfAllProjects';
function ViewAllProjectsTab(props) {
    const classes = useStyles();
    const projectsList = [
        {
            ptojectTitle:"Project 1",
            key:0,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        {
            ptojectTitle:"Project 2",
            key:1,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        {
            ptojectTitle:"Project 3",
            key:2,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        {
            ptojectTitle:"Project 4",
            key:3,
            cols:1,
            img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        },
        
    ]
  
    return (
        <div className={classes.container}>
            <div className={classes.topNav}>
                    {/* Here make a nav bar like for back option etc. */}
            </div>
            <div className={classes.listOfProjects}>
                    {/* Load the component which will render the list of projects */}
                    <ListOfAllProjects projectsList={projectsList}/>
            </div>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    }
}))
export default ViewAllProjectsTab;