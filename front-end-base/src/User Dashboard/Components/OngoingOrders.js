import React, { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import { deepOrange, green } from "@material-ui/core/colors";
import AssignmentIcon from "@material-ui/icons/Assignment";

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
        <Box p={2} className={classes.container}>
          Active Orders -0($0)
        </Box>
        <Box p={2}>
          <OrderOptions />
        </Box>
      </Box>

      <ActiveOrderCard />
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
}));

const ActiveOrderCard = () => {
  const classes = activeOrderCardStyles();
  return (
    <Box className={classes.root} p={0.5} boxShadow={1} mt={2} display="flex">
      <Grid container>
        <Grid item lg={2}>
          <Box>
            <Avatar variant="square" className={classes.square}>
              <AssignmentIcon />
            </Avatar>
          </Box>
        </Grid>

        <Grid item lg={2} alignItems="center" justifyContent="center">
          <Box>Project Price $41</Box>
        </Grid>
      </Grid>
    </Box>
  );
};
