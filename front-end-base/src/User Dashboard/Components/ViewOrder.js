
//ReactJS
import React from "react";

//Material-UI core
import {
  Box,
  Button,
  Divider,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Tooltip,
  Zoom
} from "@material-ui/core";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

//Material-UI styles
import { makeStyles } from "@material-ui/core/styles";

//Routing


//Styles and theme
import "./Styles/ViewOrder.css"
//Icons

//Resources


export const ViewOrder = (props) => {
  return (
    <div>
      <OrderDetails />
    </div>
  );
};

const orderDetailsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
}));

const OrderDetails = () => {
  const classes = orderDetailsStyles();

  return (
    <Card className={classes.root} elevation={2}>
        <CardHeader
        className={classes.cardHeader}
        title={
            <OrderSteps />
        }
        action={
            <Box mt={4}>
                <Tooltip
              title={
                <Typography>
                  Include all the necessary details needed to complete your
                  request. For example: If you are looking for a logo, you can
                  specify your company name, business type, preferred color,
                  etc.
                </Typography>
              }
              TransitionComponent={Zoom}
              placement="bottom"
              arrow
            >
           <h4 style={{backgroundColor:"lightblue", padding:"2px"}}>
                    Ongoing
           </h4>
            </Tooltip>
            </Box>
        }
        />
      <Divider />
      <CardContent>
         <h3>
         What happens when you deactivate your account?
         </h3>
    <ul>
      <li>Your profile won't be shown on Codeindna anymore. </li>
      <li>Active orders will be cancelled. </li>
      <li>You won't be able to re-activate your account</li>
    </ul>

      </CardContent>

    </Card>
  );
};


const OrderSteps=()=>{
  
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = [
    {
        stepid:1,
        stepTitle:"You Submitted Requirements",
        stepToolTip:"Step1: You submitted the requirements to Codeindna at August 17, 2021"
    },
    {
        stepid:2,
        stepTitle:"Codeindna accepted Order",
        stepToolTip:"Step2: Codeindna accepted and understood your requirements. They startworking on your project."
    },
    {
        stepid:3,
        stepTitle:"Order Delivered to you",
        stepToolTip:"Step3: Codeindna Delivered you the order. You left the feedback and paid them."
    }  
];

  return (
      <Stepper /*alternativeLabel*/ activeStep={activeStep}>
        {steps.map(({stepid, stepTitle, stepToolTip}) => {
            return(
                <Tooltip
                title={
                  <Typography>
                      {stepToolTip}
                  </Typography>
                }
                TransitionComponent={Zoom}
                placement="bottom"
                arrow
              >
                            <Step key={stepid} >
            <StepLabel>{stepTitle}</StepLabel>
          </Step>
                </Tooltip>
            )
        })}
      </Stepper>
  );
}
