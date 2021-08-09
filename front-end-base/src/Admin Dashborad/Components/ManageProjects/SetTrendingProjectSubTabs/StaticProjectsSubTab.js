import { makeStyles,Grid,InputBase,MenuItem,Select} from '@material-ui/core';
import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SelectProject from './SelectProject';
function StaticProjectsSubTab(props) {
    const classes = useStyles();
    

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

  setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                <div><h3>Select trending projects</h3> </div>
                </Grid>
            </Grid>
            <Grid container>
            
            <div className={classes.root}>
                         <Stepper activeStep={activeStep}>
                           {steps.map((label, index) => {
                             const stepProps = {};
                             const labelProps = {};
                             return (
                               <Step key={label} {...stepProps}>
                                 <StepLabel {...labelProps}>{label}</StepLabel>
                               </Step>
                             );
                           })}
                         </Stepper>
                         <div>
                           {activeStep === steps.length ? (
                             <div>
                               <Typography className={classes.instructions}>
                                 All steps completed - you&apos;re finished
                               </Typography>
                               <Button onClick={handleReset} className={classes.button}>
                                 Reset
                               </Button>
                             </div>
                           ) : (
                             <div>
                               <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                               <div className={classes.bottomBtns}>
                                 <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                   Back
                                 </Button>
                                 

                                 <Button
                                   variant="contained"
                                   color="primary"
                                   onClick={handleNext}
                                   className={classes.button}
                                 >
                                   {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                 </Button>
                               </div>
                             </div>
                           )}
                         </div>
                       </div>
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor:'blue',
        width:'100%',
        
    },
        root: {
            width: '100%',
          },
          button: {
            marginRight: theme.spacing(1),
          },
          instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
          },
          bottomBtns:{
              marginLeft:'90%'
          }
}));
function getSteps() {
    return ['Project 1', 'Project 2', 'Project 3'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SelectProject/>
      case 1:
        return <SelectProject/>;
      case 2:
        return <SelectProject/>;
      default:
        return 'Unknown step';
    }
  }
export default StaticProjectsSubTab;