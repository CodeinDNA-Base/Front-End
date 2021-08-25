import React,{useState} from 'react';
import { Grid, makeStyles } from "@material-ui/core"
import { Headings } from '../Admin Dashborad/Components/Support/Headings';
import {SimpleTextFields,MultiLineTextFields, RoundedTextFields} from '../Admin Dashborad/Components/Support/TextFields'
import { RoundButton } from '../CustomComponents/UI/Buttons/RoundButton';
import colors from '../Theme/colors';
function Test(props) {
    const classes = useStyles();
    const [InputValue,setInputValue]=useState('');
    console.log("InputValue :"+InputValue);
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}  style={{paddingLeft:50}}>
                    <Headings text={"Heading"} fontSize={'1.5rem'} fontWeight={'bold'}/>
                </Grid>
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <SimpleTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"User Name"} 
                        value={InputValue} 
                        setValue={setInputValue}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
                        />
                </Grid>
                
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <RoundedTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"User Name"} 
                        value={InputValue} 
                        setValue={setInputValue}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
                        />
                </Grid>
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <MultiLineTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Description"} 
                        value={InputValue} 
                        setValue={setInputValue}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        rows={10}
                        width={300}    
                        />
                </Grid> 
                
                <Grid item xs={12} style={{paddingLeft:50}}>     
                <RoundButton
                   color={colors.white}
                   bgColor={colors.primary}
                   title={"Ok"}
                   width="15%"
                   margin={"0% 0% 0% 0%"}
                />   
                </Grid> 
            </Grid>
        </div>
    );
}


const useStyles = makeStyles((theme)=>({
   
}));

export default Test;