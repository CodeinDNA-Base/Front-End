import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List,ListItem,ListItemText} from '@material-ui/core';
import {stringCollection} from '../Strings/StringCollection.js'

import './Styles/StyleSheet.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
   
  },
  topToggle:{
  },
  optionsConatiner:{
      height:30,
      width:'85%',
      marginTop:-20,
  }
}));

export default function ManageProjectsOptionsList({isDrawerOpen}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{ boxShadow: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.topToggle}
        >
        <Typography className={classes.heading}>{ (isDrawerOpen ? stringCollection.sampleText : '')}</Typography>
        </AccordionSummary>
        <AccordionDetails >
            <List>
                <ListItem>
                    <Button className={classes.optionsConatiner} color="primary">
                       <div className="SubOptionsFonts">Show all projects</div> 
                    </Button>
                </ListItem>
                <ListItem>
                    <Button className={classes.optionsConatiner}  color="primary">
                    <div className="SubOptionsFonts">Add new project</div> 
                    </Button>
                </ListItem>
                <ListItem>
                    <Button className={classes.optionsConatiner}  color="primary">
                    <div className="SubOptionsFonts">Search project</div> 
                    </Button>
                </ListItem>
                <ListItem>
                    <Button className={classes.optionsConatiner}  color="primary">
                    <div className="SubOptionsFonts">Set trending projects</div> 
                    </Button>
                </ListItem>
            </List>
           
          
          
      </AccordionDetails>
        
    </Accordion>
     
    </div>
  );
}
