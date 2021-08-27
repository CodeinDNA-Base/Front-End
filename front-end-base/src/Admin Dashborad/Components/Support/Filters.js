import React, { useState } from 'react';
import { 
        makeStyles,Grid,Card,CardContent,Accordion,AccordionSummary,
        AccordionDetails,Typography,FormControl,FormLabel,FormGroup,
        FormControlLabel,FormHelperText,Checkbox
    } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Headings } from './Headings';
import {lightBorder} from '../../../Theme/borders'
import { ScrollView } from "@cantonjs/react-scroll-view";
import produce from 'immer';
//https://www.npmjs.com/package/@cantonjs/react-scroll-view

function Filters(props) {
    const classes=useStyles();
    const filterBy_titlesFonts=18;
    const filterBy_titles={
        filter_by_title_1:"By Service",
        filter_by_title_2:"By Sub-Service",
        filter_by_title_3:"By Rating",
        filter_by_title_4:"By Publish date",
    }
    const [filter_by_title_1_Options,setFilter_by_title_1_Options]=useState([
        {
            OptionLabel:"Serive 1",
            OptionValue:"0",
            isCheked:false
        },
        {
            OptionLabel:"Serive 2",
            OptionValue:"1",
            isCheked:false
        },
        {
            OptionLabel:"Serive 3",
            OptionValue:"2",
            isCheked:false
        },
        {
            OptionLabel:"Serive 4",
            OptionValue:"3",
            isCheked:false
        },
        {
            OptionLabel:"Serive 5",
            OptionValue:"4",
            isCheked:false
        },
        
    ]);

    const handel_filter_by_title_1_Change=(e)=>{
       console.log(typeof e.target.name)
       const selectedOpt=parseInt(e.target.name);

       setFilter_by_title_1_Options(produce(filter_by_title_1_Options,draft=>{
           draft[selectedOpt].isCheked= !(draft[selectedOpt].isCheked)
       }));       
    }

    return (

        <Grid container >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Card
            elevation={0}
            style={{borderTop:lightBorder,borderLeft:lightBorder,borderRight:lightBorder}}
          >
            <CardContent>
                <Headings text={"Filters"} fontSize={25} fontWeight={"bold"}/>
                <Grid container>
                    <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                            <Headings text={filterBy_titles.filter_by_title_1} fontSize={filterBy_titlesFonts}/>
                           </AccordionSummary>
                           <AccordionDetails>
                            <FormControl component="fieldset" >
                            <ScrollView style={{ height: '20vh',}}

                            >
                                <FormGroup
                                    row={true}
                                >
                                    {filter_by_title_1_Options.map((item,index)=>{
                                        return(
                                            <FormControlLabel
                                            
                                            control={<Checkbox checked={item.isCheked} key={"filter_1_"+index} onChange={(e)=>{
                                                handel_filter_by_title_1_Change(e);
                                            }} name={item.OptionValue} />}
                                            label={item.OptionLabel}
                                            /> 
                                        )
                                    })}

                                </FormGroup>
                                </ScrollView>  
                              </FormControl>

                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                    <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >

                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                               <Headings text={filterBy_titles.filter_by_title_2} fontSize={filterBy_titlesFonts}/>
                            </AccordionSummary>
                           <AccordionDetails>
                             <h3>Options</h3>
                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                    <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                                <Headings text={filterBy_titles.filter_by_title_3} fontSize={filterBy_titlesFonts}/>
                           </AccordionSummary>
                           <AccordionDetails>
                             
                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                    <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                                <Headings text={filterBy_titles.filter_by_title_4} fontSize={filterBy_titlesFonts}/>
                           </AccordionSummary>
                           <AccordionDetails>
                             <h3>Options</h3>
                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                </Grid>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}></Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    },
    accordionCotnainer:{
        padding:'0.5rem'
    },
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
}))


export default Filters;