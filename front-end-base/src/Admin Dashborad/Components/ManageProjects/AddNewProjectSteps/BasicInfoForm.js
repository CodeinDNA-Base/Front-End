import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import UpdateIcon from '@material-ui/icons/Update';
import { RoundedTextFields } from '../../Support/TextFields';
function BasicInfoForm(props) {
    const [isEditingEnabled,setIsEditingEnabled]=useState(false);

    const handelEditAndSaveChanges = ()=>{
        setIsEditingEnabled(!isEditingEnabled);
    }
    return (
        <div style={{position:'relative'}}>
        <Card

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

                        <RoundedTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={" Project Title"} 
                        width={350}
                        height={15}
                       // value={InputValue} 
                       // setValue={setInputValue}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
                        />

                        </div>

                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </CardContent>

        </Card>
        </div>
    );
}

export default BasicInfoForm;