import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ProjectBasicInfoForm from './AddNewProjectSteps/ProjectBasicInfoForm'
import UploadImages from './AddNewProjectSteps/UploadImages';
import Pricing from './AddNewProjectSteps/Pricing';
// import Preview from './AddNewProjectSteps/Preview';

function AddNewProjectTab(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} className={classes.StepperContainer} >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div >

               <div>
                     {getStepContent(activeStep)}
               </div>
            
              <div className={classes.bottomButtonContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Save &  Next'}
              </Button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
function getSteps() {
  return ['Basic info of project','Upload Images','Pricing','Preview'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ProjectBasicInfoForm/>;
    case 1:
     return <UploadImages/>;
      // return "Sample";
    case 2:
      return <Pricing/>;
      // return "Sample";
    case 3:
      // return <Preview/>;
      return "Sample";
    default:
      return 'Unknown stepIndex';
  }
}

const useStyles = makeStyles((theme)=>({
   root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
 
  bottomButtonContainer:{
    marginLeft:'80%'

  }
}));

export default AddNewProjectTab;