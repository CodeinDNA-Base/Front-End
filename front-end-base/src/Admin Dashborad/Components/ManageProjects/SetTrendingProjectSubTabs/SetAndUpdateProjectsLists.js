import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {lightBorder} from '../../../../Theme/borders'
import { RoundedTextFields, SimpleTextFields,MultiLineTextFields } from '../../Support/TextFields';
import produce from 'immer';
import {actions,store} from '../../../Redux/ReduxResourceExporter'
import { ArrowBackIos, CloudUpload } from '@material-ui/icons';
import ProjectSelectionr from './ProjectSelectionr';
import ListOfAllProjects from '../ViewAllProjectsSubComponents/ListOfAllProjects';

function SetAndUpdateProjectsLists(props) {
    const [isEditingEnabled,setIsEditingEnabled]=useState(false);
    const [isDataLoadedFromRedux,setIsDataLoadedFromRedux]=useState(false);
    const [listOfStaticProjects,setlistOfStaticProjects]=useState([])
    const [selectedProjectIndex,setSelectedProjectIndex]=useState(0);
    const [isProjectSelectorForStaticProjectsListOpen,setIsProjectSelectorForStaticProjectsListOpen]=useState(false)
    const [lastDataUpdateTimeAndDate,setLastUpdateTimeAndDate]=useState(null);
    const [lastChoosedDisplayMode,setLastChoosedDisplayMode]=useState(null);
    useEffect(()=>{

        setlistOfStaticProjects(store.getState().ProjectsStore.ListOfStaticProjects.data);
        setLastUpdateTimeAndDate(store.getState().ProjectsStore.ListOfStaticProjects.lastUpdateDateAndTime);
        setLastChoosedDisplayMode(store.getState().ProjectsStore.ListOfStaticProjects.lastChoosedDisplayMode);
        setIsDataLoadedFromRedux(true);
        // props.setIsLockClosed(true);
    },[])

    const handelEditAndSaveChanges = ()=>{
        setIsEditingEnabled((prev)=>{
            return !(prev)
        });
    }
    const handePageSwitchFotSataticProjectsSelector = ()=>{
        setIsProjectSelectorForStaticProjectsListOpen(!isProjectSelectorForStaticProjectsListOpen);
    }
    const handelOptionSelection = (event,selectedOption,selectedProjectKey)=>{}
    const handeSelectOption = (selectedValue) =>{
        alert(selectedValue);
        console.log(selectedValue)
    }
    console.log(listOfStaticProjects[0])
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
                    <Headings  text={"Set/Update"} fontSize={35} fontWeight={'bold'}/>
                </div>

            <Divider/>

            <CardContent>
                <div>
                    <Headings  text={"Projects for Static Display Mode"} fontSize={30}/>
                </div>
                {
                    (isDataLoadedFromRedux===true) &&
                    <div>
                        {
                            (isProjectSelectorForStaticProjectsListOpen===true) ? (
                                <div>
                            <Grid container style={{marginTop:"1rem",border:lightBorder,padding:'0.5rem'}}>
                            <Grid item={12} style={{padding:'0.5rem',height:'40%'}}>
                                <div style={{border:lightBorder,padding:'0.5rem',width:'2.2rem',textAlign:'center',borderRadius:'15%',cursor:'pointer'}}
                                    onClick={handePageSwitchFotSataticProjectsSelector}
                                >
                                    
                                    <ArrowBackIos/>
                                </div>
                                <ListOfAllProjects showMenueSelectionOpt={true} handeSelectOption={handeSelectOption} handelOptionSelection={handelOptionSelection}/>
                                {/* <ViewProject projectData={listOfProjects[selectedProjectIndex]}/> */}
                            </Grid>
                        </Grid>
                                </div>
                            ):(
                                <div>
                <Grid container style={{marginTop:"1rem",border:lightBorder,padding:'0.5rem'}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                onClick={()=>{
                                    setSelectedProjectIndex(0)
                                    handePageSwitchFotSataticProjectsSelector();
                                }}
                            >
                                {(listOfStaticProjects[0].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:200,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"1"} fontSize={18} />
                                           
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[0].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[0].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[0].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                                
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                 style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                 onClick={()=>{
                                     setSelectedProjectIndex(1)
                                     handePageSwitchFotSataticProjectsSelector();
                                 }}
                            >
                                {(listOfStaticProjects[0].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:200,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"2"} fontSize={18} />
                                          
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[1].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[1].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[1].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        <Grid container style={{marginTop:'1rem'}}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                 style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                 onClick={()=>{
                                     setSelectedProjectIndex(2)
                                     handePageSwitchFotSataticProjectsSelector();
                                 }}
                            >
                               {(listOfStaticProjects[0].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:200,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"3"} fontSize={18} />
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[2].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[2].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[2].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                onClick={()=>{
                                    setSelectedProjectIndex(3)
                                    handePageSwitchFotSataticProjectsSelector();
                                }}
                            >
                               {(listOfStaticProjects[0].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:200,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"4"} fontSize={18} />
                                          
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[3].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[3].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[3].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>      
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                                </div>
                            )   
                        }
                    </div>
                }

                <Divider/>

                <div >
                    <Headings  text={"Projects for Static Display Mode"} fontSize={30}/>
                </div>
                
                    <h1>Dynamic CardContent</h1>

                <Divider/>

            </CardContent>

            

        </Card>
    </div>
    );
}

export default SetAndUpdateProjectsLists;