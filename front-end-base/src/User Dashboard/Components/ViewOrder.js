//ReactJS
import React, {useState, useEffect} from "react";

//Material-UI core
import {
  Box,
  Divider,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Tooltip,
  Zoom,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Table,
  useMediaQuery,
} from "@material-ui/core";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { LoremIpsum } from "react-lorem-ipsum";
//Material-UI styles
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Routing

//Styles and theme
import "./Styles/ViewOrder.css";
import { Link } from "react-router-dom";
//Icons
import CheckedIcon from "@material-ui/icons/CheckCircle"
import { classes } from "istanbul-lib-coverage";
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
  cardContent: {
    flex: 1,
  },
  stepperForMobile:{
    marginLeft:"-30px"
  },
  stepperForPC:{
    
  }
}));

const OrderDetails = () => {

  const classes = orderDetailsStyles();
  const[projectCost, setProjectCost]=useState(4115)
  
  const isItSmallOrExtraSmall = useMediaQuery("(max-width: 960px)");

  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<div className={isItSmallOrExtraSmall?classes.stepperForMobile:classes.stepperForPC}>
                <OrderSteps className={classes.stepperStyle}/>
              </div>
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
              <h4 style={{ backgroundColor: "lightblue", padding: isItSmallOrExtraSmall?"0px":"2px"}}>
                Ongoing
              </h4>
            </Tooltip>
          </Box>
        }
      />
      <Divider />
      <CardContent>
        <Box display="flex">
          <Box ml={isItSmallOrExtraSmall?0:2}>
            <h3>Order #FO71C98CFE3C7</h3>
          </Box>
          <Box ml={isItSmallOrExtraSmall?0:4}>
            <Link to="/messaging" className="linkStyleCustomized">
              <h3>View Service</h3>
            </Link>
          </Box>
          <Box ml={isItSmallOrExtraSmall?0:4} className={classes.cardContent}>
            <h3>August 12,2021</h3>
          </Box>
          <Box>
            <h3>${projectCost}</h3>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <cardContent>
        <Box ml={2} p={2}>
          <LoremIpsum />
        </Box>
      </cardContent>

      <Divider />
      <cardContent>
        <Box p={2}>
          <PackageAndProjectDetails />
        </Box>
        <Box display="flex">
        <Box className={classes.cardContent} />
        <Box mr={2}>
        <h3>Total: ${projectCost}</h3>
        </Box>
        </Box>
      </cardContent>
    </Card>
  );
};


const OrderSteps = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    {
      stepid: 1,
      stepTitle: "You Submitted Requirements",
      stepToolTip:
        "Step1: You submitted the requirements to Codeindna at August 17, 2021",
    },
    {
      stepid: 2,
      stepTitle: "Codeindna accepted Order",
      stepToolTip:
        "Step2: Codeindna accepted and understood your requirements. They startworking on your project.",
    },
    {
      stepid: 3,
      stepTitle: "Order Delivered to you",
      stepToolTip:
        "Step3: Codeindna Delivered you the order. You left the feedback and paid them.",
    },
  ];

  const isItSmallOrExtraSmall = useMediaQuery("(max-width: 960px)");
    return (
    <Stepper alternativeLabel={isItSmallOrExtraSmall} activeStep={activeStep}>
      {steps.map(({ stepid, stepTitle, stepToolTip }) => {
        return (
          <Tooltip
            title={<Typography>{stepToolTip}</Typography>}
            TransitionComponent={Zoom}
            placement="bottom"
            arrow
          >
            <Step key={stepid}>
              <StepLabel>{stepTitle}</StepLabel>
            </Step>
          </Tooltip>
        );
      })}
    </Stepper>
  );
};


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const tableStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  cellData:{
    fontWeight:"bold"
  }
});

const PackageAndProjectDetails = () => {
  const classes = tableStyles();
  const packageDetails = [
    {
      serviceTitle: "Develop MERN Website",
      offers: [
        "Application Audit",
        "Project Plan",
        "Cost Estimation",
        "45 Minutes Live Consultation",
        "10 Questions Answered"
      ],
      quantity:3,
      duration:"7 days",
      amount:4115,
    },
  ];
  return (
    <div>
      {/* <h4>{title}</h4> */}

      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packageDetails.map(({serviceTitle, offers, quantity, duration, amount}) => (
              <TableRow hover={true} key={serviceTitle} className="tableRow">
                <StyledTableCell component="th" scope="row">
                  {serviceTitle}
                  {offers.map((offer)=>{
                    return(
                      <Box mt={1} ml={2} display="flex">
                        <Box>
                          <CheckedIcon color="primary"/>
                        </Box>
                        <Box ml={0.5} mt={0.4}>
                        <span>{offer}</span>
                        </Box>
                      </Box>
                    )
                    })}
                </StyledTableCell>
                
                <StyledTableCell align="right" className={classes.cellData}>{quantity}</StyledTableCell>
                <StyledTableCell align="right" className={classes.cellData}>{duration}</StyledTableCell>
                <StyledTableCell align="right" className={classes.cellData}>${amount}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
