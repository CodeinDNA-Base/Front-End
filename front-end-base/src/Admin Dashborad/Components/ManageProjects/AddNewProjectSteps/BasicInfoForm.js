import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import UpdateIcon from '@material-ui/icons/Update';
import { RoundedTextFields, SimpleTextFields,MultiLineTextFields } from '../../Support/TextFields';
import {lightBorder} from '../../../../Theme/borders'
import { disable } from 'debug';
import produce from 'immer';
import CustomChipsList from '../../Support/CustomChipsList';
function BasicInfoForm(props) {
    const [isEditingEnabled,setIsEditingEnabled]=useState(false);
    //Data hooks
    const [projectTitle,setProjectTitle]=useState();
    const [projectDesc,setProjectDesc]=useState();
    const [estrimatedPrice,setEstimatedPrice]=useState(0);
    const [keyWordText,setKeyWordText]=useState();
    const [listOfOptions_ForChipList, setListOfOptions_ForChipList]=useState([]);

    const handelEditAndSaveChanges = ()=>{
        setIsEditingEnabled(!isEditingEnabled);
    }

    const handelInsertItemInChipList=()=>{
       const key_index = listOfOptions_ForChipList.length;
       if(keyWordText.length!=0)
       {
           setListOfOptions_ForChipList(produce(listOfOptions_ForChipList,draft=>{
               draft.push({key:key_index,label:keyWordText});    
           }))
       }
       else
       {
           alert("Cant add empty text as key word")
       }
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
                {(isEditingEnabled) ? <div onClick={handelEditAndSaveChanges}><UpdateIcon color="secondary" fontSize="larg"/> </div> : <div onClick={handelEditAndSaveChanges}> <EditIcon color="primary"/> </div>}
            </div>
            }
            
            />
            <div style={{position:'absolute',top:'0.5rem',left:'0.5rem'}}>
                <Headings  text={"Basic information"} fontSize={35}/>
            </div>
            <Divider/>
            <CardContent>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div>
                        <SimpleTextFields 
                        fontSize={20} 
                        fontWeight={'bold'}
                        label={" Project Title"} 
                        width={'40rem'}
                        height={15}
                        value={projectTitle} 
                        setValue={setProjectTitle}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
                        />
                        </div>

                        <div style={{marginTop:"1rem"}}>
                        <MultiLineTextFields 
                        fontSize={20} 
                        fontWeight={'bold'}
                        label={"Description"} 
                        value={projectDesc} 
                        setValue={setProjectDesc}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        rows={10}
                        width={'40rem'}    
                        />
                        </div>
                        <div style={{marginTop:'1rem'}}>

                           <div style={{display:'inline-block'}}>
                           <SimpleTextFields 
                              fontSize={20} 
                              fontWeight={'bold'}
                              label={"Estimated Price $"} 
                              width={'13rem'}
                              height={15}
                              value={estrimatedPrice} 
                              setValue={setEstimatedPrice}
                              labelFontColor={"#a39f93"}
                              labelFontWeight={'bold'}
                              labelFontSize={13}
                              />
                           </div>
                           <div style={{display:'inline-block',marginLeft:'0.5rem'}}>
                           <SimpleTextFields 
                              fontSize={20} 
                              fontWeight={'bold'}
                              label={"Key word"} 
                              width={'20rem'}
                              height={15}
                              value={keyWordText} 
                              setValue={setKeyWordText}
                              labelFontColor={"#a39f93"}
                              labelFontWeight={'bold'}
                              labelFontSize={13}
                              />
                           </div>
                           <div style={{display:'inline-block',position:'relative'}}>
                            <div style={{position:'absolute',top:-10,left:10}}>
                                    <RoundButton
                                        color={colors.white}
                                        bgColor={colors.primary}
                                        title={"Add"}
                                        width="50%"
                                        margin={"0% 0% 0% 0%"}
                                        handleClick={handelInsertItemInChipList}
                                     /> 
                            </div>

                           </div>
                           
                        </div>
                        {
                        (listOfOptions_ForChipList.length!=0) &&
                        <div style={{border:lightBorder,marginTop:'1rem',position:'relative'}}>
                            <div style={{marginLeft:'0.5rem',marginBottom:'1rem'}}>
                                <Headings text={"Key words"} fontSize={20} fontWeight={''}/>
                            </div>
                            <div style={{position:'absolute',top:2,right:0}}>
                                <RoundButton
                                        color={colors.white}
                                        bgColor={colors.secondary}
                                        title={"Clear"}
                                        width="30%"
                                        margin={"0% 0% 0% 0%"}
                                        handleClick={()=>{setListOfOptions_ForChipList([])}}
                                     /> 
                            </div>
                            <CustomChipsList value={listOfOptions_ForChipList} setValue={setListOfOptions_ForChipList}/>
                        </div>
                        }
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </CardContent>

        </Card>
        </div>
    );
}

export default BasicInfoForm;