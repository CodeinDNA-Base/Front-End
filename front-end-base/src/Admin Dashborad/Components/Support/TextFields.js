import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { fontSize } from '@material-ui/system';
import { fontFamily } from '../../../Theme/fonts';
import '../Styles/TextFieldStyles.css'
/**
 * 
 * fontSize
 * fontWeight
 * value : must be hook
 * setValue : must be of hook
 * height
 * width
 * labelFontSize
 * labelFontColor
 * labrlFontWeight
 */

function SimpleTextFields(props) {
    const classes=useStyles();
    return (
        <div >
             <TextField 
             id={props.id}
             label={props.label}
             value={props.value}
             onChange={(e)=>{
                props.setValue(e.target.value)
             }}
            
             variant="outlined" 
             inputProps={
                 {
                     style:{fontFamily:fontFamily.fontFamily_1,fontSize:fontSize,fontWeight:props.fontWeight,width:props.width,height:props.height}
                }}
             InputLabelProps={
                 {
                     style:{fontFamily:fontFamily.fontFamily_1,fontWeight:props.labelFontWeight,color:props.labelFontColor,fontSize:props.labelFontSize}
                }}
             />
             
        </div>

    );
}

function RoundedTextFields(props) {
    const classes=useStyles();
    return (
        <div >
             <TextField 
             id={props.id}
             label={props.label}
             value={props.value}
             onChange={(e)=>{
                props.setValue(e.target.value)
             }}
             className="inputRounded"
             variant="outlined" 
             inputProps={
                 {
                     style:{fontFamily:fontFamily.fontFamily_1,fontSize:fontSize,fontWeight:props.fontWeight,width:props.width,height:props.height}
                }}
             InputLabelProps={
                 {
                     style:{fontFamily:fontFamily.fontFamily_1,fontWeight:props.labelFontWeight,color:props.labelFontColor,fontSize:props.labelFontSize}
                }}
             />
             
        </div>

    );
}


/**
 * 
 * fontSize
 * fontWeight
 * value : must be hook
 * setValue : must be of hook
 * height
 * width
 * labelFontSize
 * labelFontColor
 * labrlFontWeight
 * maxRows
 */


function MultiLineTextFields(props) {
    const classes=useStyles();
    return (
        <div className={classes.container}>
             <TextField 
             id={props.id}
             label={props.label}
             value={props.value}
             onChange={(e)=>{
                props.setValue(e.target.value)
             }}
             multiline={true}
             rows={props.rows}
             variant="outlined" 
             inputProps={{style:{fontFamily:fontFamily.fontFamily_1,fontSize:fontSize,fontWeight:props.fontWeight,width:props.width,height:props.height}}}
             InputLabelProps={{style:{fontFamily:fontFamily.fontFamily_1,fontWeight:props.labelFontWeight,color:props.labelFontColor,fontSize:props.labelFontSize,}}}
            
             />
        </div>

    );
}

const useStyles = makeStyles((theme)=>({
    container:{
        borderRadius:10
    },
    textFieldStyles:{
       
    },
   
}))


export  {SimpleTextFields,RoundedTextFields,MultiLineTextFields};