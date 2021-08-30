import React, { useEffect,useState } from 'react';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {lightBorder} from '../../../../Theme/borders'
import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import {actions,store} from '../../../Redux/ReduxResourceExporter'
import ViewProject from './ViewProject';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function CurrentlyVisibleProjects(props) {

    const [isEditingEnabled,setIsEditingEnabled]=useState(true);
    const [isViewProjectOpen,setIsViewProjectOpen]=useState(false);
    const [listOfProjects,setListOfProjects]=useState([])
    const [lastDataUpdateTimeAndDate,setLastUpdateTimeAndDate]=useState(null);
    const [lastChoosedDisplayMode,setLastChoosedDisplayMode]=useState(null);
    const [selectedProjectIndex,setSelectedProjectIndex]=useState(0);
    useEffect(()=>{

        setListOfProjects(store.getState().ProjectsStore.ListOfTrendingProjectsLoadedFromAPI.data);
        setLastUpdateTimeAndDate(store.getState().ProjectsStore.ListOfTrendingProjectsLoadedFromAPI.lastUpdateDateAndTime);
        setLastChoosedDisplayMode(store.getState().ProjectsStore.ListOfTrendingProjectsLoadedFromAPI.lastChoosedDisplayMode);
        
        props.setIsLockClosed(true);
    },[])

    const handelEditAndSaveChanges = ()=>{  
    }
    const handePageSwitch = ()=>{
        setIsViewProjectOpen(!isViewProjectOpen);
    }
    return (
        <div style={{position:'relative'}}>
        <Card
            elevation={0}
            style={{border:lightBorder}}
        >
            <CardHeader
            action={
            <div style={{cursor:'pointer'}} >
                {(isEditingEnabled) ? <div onClick={handelEditAndSaveChanges}><LockIcon color="secondary" fontSize="larg"/> </div> : <div onClick={handelEditAndSaveChanges}> <LockOpenIcon color="primary"/> </div>}
            </div>
            }
            
            />
            
            <div style={{position:'absolute',top:'0.5rem',left:'0.5rem'}}>
                <Headings  text={"Currently visible trending projects"} fontSize={35}/>
            </div>
            <Divider/>

            <CardContent>

                <div style={{border:lightBorder,padding:'0.5rem'}}>

                    <Headings text={`Last update time and date : ${lastDataUpdateTimeAndDate}`} fontSize={18}/>
                    <Headings text={`Last choosed display mode : ${lastChoosedDisplayMode}`} fontSize={18}/>

                </div>
                {
                    (isViewProjectOpen) && 
                    <div>
                        <Grid container style={{marginTop:"1rem",border:lightBorder,padding:'0.5rem'}}>
                            <Grid item={12} style={{padding:'0.5rem',height:'40%'}}>
                                <div style={{border:lightBorder,padding:'0.5rem',width:'2.2rem',textAlign:'center',borderRadius:'15%',cursor:'pointer'}}
                                    onClick={handePageSwitch}
                                >
                                    
                                    <ArrowBackIosIcon/>
                                </div>
                                <ViewProject projectData={listOfProjects[selectedProjectIndex]}/>
                            </Grid>
                        </Grid>
                    </div>
                }

                {
                ((listOfProjects.length!=0) && !isViewProjectOpen) ? (
                <Grid container style={{marginTop:"1rem",border:lightBorder,padding:'0.5rem'}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                onClick={()=>{
                                    setSelectedProjectIndex(0)
                                    handePageSwitch();
                                }}
                            >
                                <Headings text={`Title : ${listOfProjects[0].projectTitle}`} fontSize={15}/>
                                <Headings text={`Catagory : ${listOfProjects[0].projectService}`} fontSize={15}/>
                                <div style={{border:lightBorder}}>
                                    <img width="100%" height={200} src={listOfProjects[0].projectThumbNail} />
                                </div>
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                 style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                 onClick={()=>{
                                     setSelectedProjectIndex(1)
                                     handePageSwitch();
                                 }}
                            >
                                <Headings text={`Title : ${listOfProjects[1].projectTitle}`} fontSize={15}/>
                                <Headings text={`Catagory : ${listOfProjects[1].projectService}`} fontSize={15}/>
                                <div style={{border:lightBorder}}>
                                    <img width="100%" height={200} src={listOfProjects[1].projectThumbNail} />
                                </div>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        <Grid container style={{marginTop:'1rem'}}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                 style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                 onClick={()=>{
                                     setSelectedProjectIndex(2)
                                     handePageSwitch();
                                 }}
                            >
                                <Headings text={`Title : ${listOfProjects[2].projectTitle}`} fontSize={15}/>
                                <Headings text={`Catagory : ${listOfProjects[2].projectService}`} fontSize={15}/>
                                <div style={{border:lightBorder}}>
                                    <img width="100%" height={200} src={listOfProjects[2].projectThumbNail} />
                                </div>
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                onClick={()=>{
                                    setSelectedProjectIndex(3)
                                    handePageSwitch();
                                }}
                            >
                                <Headings text={`Title : ${listOfProjects[3].projectTitle}`} fontSize={15}/>
                                <Headings text={`Catagory : ${listOfProjects[3].projectService}`} fontSize={15}/>
                                <div style={{border:lightBorder}}>
                                    <img width="100%" height={200} src={listOfProjects[3].projectThumbNail} />
                                </div>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>      
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                ):(
                    <div>
                        {
                            (!isViewProjectOpen) &&
                            <div style={{padding:'1rem',marginTop:'1rem',border:lightBorder}}>
                            <Headings text={"Please set trending projects"} fontSize={20} fontWeight={'bold'}/>
                            </div>
                        }
                    </div>
                    
                    )
                }
            </CardContent>

        </Card>
        </div>
    );
}

export default CurrentlyVisibleProjects;