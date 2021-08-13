import React, { useState } from "react";
import { Box, Button, Divider, Grid, makeStyles, Slider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import { deepOrange, green } from "@material-ui/core/colors";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ClockIcon from "@material-ui/icons/Timer";

//Resources
import ServiceImage from '../Resources/java1.jpg'

const styles = makeStyles({
  container: {
    flex: 1,
  },
});

export const OngoingOrders = () => {
  const classes = styles();

  const [activeOrders, setActiveOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);
  const [cancelledOrders, setCancelledOrders] = useState(0);

  return (
    <div>
      <Box boxShadow={2} display="flex">
        <Box ml={2} className={classes.container}>
          <h3>Active Orders -0($0)</h3>
        </Box>
        <Box p={2}>
          <OrderOptions />
        </Box>
      </Box>
      {
        Array(5).fill().map(itm=>{
          return <ActiveOrderCard />
        })
      }
    </div>
  );
};

const OrderOptions = () => {
  return (
    <select style={{ padding: "4px" }}>
      <option value="activeOrders">Active Orders (0)</option>
      <option value="activeOrders">Completed Orders (0)</option>
      <option value="activeOrders">Cancelled Orders (0)</option>
    </select>
  );
};

const activeOrderCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
  statLabel: {
    fontSize: 12,
    color: theme.palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  boxStyle: {
    textAlign: "center",
  },
  serviceImageStyle:{
      width: 80,
      height: 80,
      margin: 'auto',
      borderRadius:"2px"
  }
}));

const ActiveOrderCard = () => {
  const classes = activeOrderCardStyles();

  return (
    <Box className={classes.root} p={0.5} boxShadow={1} mt={2}>
      <Grid container>
        <Grid item lg={2}>
          <Box flex={"auto"}>
            <Avatar
              className={classes.serviceImageStyle}
              variant="square"
              src={ServiceImage}
              onClick={() => {
                alert("Go to this service");
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Project Price</p>
            <p className={classes.statValue}>$457</p>
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Due in</p>
            <p className={classes.statValue}>
              <ClockIcon className={classes.statValue}></ClockIcon> 4d, 7h
            </p>
          </Box>
        </Grid>

        <Grid item lg={3}></Grid>              
        <Grid item lg={3}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <Button variant="outlined" fullWidth={50}>
              Contact Seller
            </Button>
            </Box>
            <Box flex={"auto"} className={classes.boxStyle} mt={1}>
            <Button variant="contained" color="primary" fullWidth={50}>
              View Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
