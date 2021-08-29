import React,{useState} from 'react';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Grid,Card,CardHeader,CardContent,Divider } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {lightBorder} from '../../../../Theme/borders'
import produce from 'immer';
import CustomPhotoUploader from '../../Support/CustomPhotoUploader'
import { Check, Close } from '@material-ui/icons';

function Media(props) {
    const [isEditingEnabled,setIsEditingEnabled]=useState(false);
    
    //Data hooks
    const [thumbnailImage,setThumbnailImage]=useState(null);

    const handelEditAndSaveChanges = ()=>{
        setIsEditingEnabled(!isEditingEnabled);
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
                <Headings  text={"Media"} fontSize={35}/>
            </div>
            <Divider/>

            <CardContent>
                    {/* Single image called thumbnail */}
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8} style={{border:lightBorder,height:'20rem',textAlign:'center'}}>
                            <div>
                            {
                                (thumbnailImage!=null) ? (
                                    <div>
                                        <div style={{position:'relative'}}>
                                            <Headings text={"Thumbnail"} fontSize={20} fontWeight={'bold'}/>
                                            {
                                                (isEditingEnabled) ? (
                                                <div style={{position:'absolute',top:0,right:0}} >
                                                    <Check color="primary"/>
                                                </div>
                                                ): (
                                                <div style={{position:'absolute',top:0,right:0,cursor:'pointer'}} onClick={()=>{setThumbnailImage(null)}}>
                                                    <Close color="error"/>
                                                </div>
                                                )
                                            }
                                            
                                        </div>
                                        <img width="100%" height="290" src={thumbnailImage}/>
                                        
                                    </div>
                                ):(
                                    <div style={{marginTop:'25%',}}>
                                        <div style={{marginTop:"10%"}}>
                                            <Headings text={"Thumbnail"} fontSize={20}/>
                                        </div>
                                       <CustomPhotoUploader selectedImage={thumbnailImage} setSelectedImage={setThumbnailImage}/>
                                        {/* <LibraryAddIcon color="primary" style={{fontSize:50}}/> */}
                                    </div>
                                )
                            }
                            </div>
                            <div>
                                
                            </div>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
            </CardContent>

        </Card>
        </div>
    );
}

export default Media;