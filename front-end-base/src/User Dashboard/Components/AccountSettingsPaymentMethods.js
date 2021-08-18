

import { Box, Button, Divider, FormControl, InputLabel, MenuItem, TextField, Typography } from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

//Icons
import Jazzcash from "@material-ui/icons/MoneyOffRounded"
import Easypaisa from "@material-ui/icons/DriveEtaSharp"
import UnionTransfer from "@material-ui/icons/LocalParkingSharp"
//Resources
import profilePic from "../Resources/nadir.jpg";

export const AccountSettingsPaymentMethods = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Payment Methods</Typography>
      </Box>
      <PaymentMethodsContainer />
    </div>
  );
};

function PaymentMethodsContainer() {
  return (
    <>
      <AttachedMethods />
      <AvailableMethods />
    </>
  );
}

const attachedMethodsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
}));

const AttachedMethods = () => {
  const classes = attachedMethodsStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Already Attached</Typography>}
      />
      <Divider />
      <CardContent>
        <IconButton color="primary">
          <Easypaisa fontSize="large" />
        </IconButton>

        <IconButton color="default">
          <Jazzcash fontSize="large" />
        </IconButton>

      </CardContent>
      <Divider />
      <CardContent>
      <CardHeader
        action={
            <Button variant="contained" color="primary">Remove</Button>
        }
      />
        </CardContent>
    </Card>
  );
};

const availableMethodsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
  formControl:{
      width:"50%",
      padding:"2rem"
  }
}));

const AvailableMethods = () => {
  const classes = availableMethodsStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Available for you</Typography>}
      />
      <Divider />
      <CardContent>
        <IconButton color="primary">
          <Jazzcash fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <Easypaisa fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <UnionTransfer fontSize="large" />
        </IconButton>
      </CardContent>
      <Divider />
      <CardContent>
      <CardHeader
        action={
            <Button variant="contained" color="primary">Add </Button>
        }
      />
        </CardContent>
    </Card>
  );
};
