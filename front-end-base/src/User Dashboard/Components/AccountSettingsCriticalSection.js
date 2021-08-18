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
  CardContent
} from "@material-ui/core";

//Material-UI styles
import { makeStyles } from "@material-ui/core/styles";

//Routing

import {Link} from 'react-router-dom'

//Styles and theme

//Icons

//Resources


export const AccountSettingsCriticalSection = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Think Once!</Typography>
      </Box>
      <CriticalSectionContainer />
    </div>
  );
};

function CriticalSectionContainer() {
  return (
    <>
      <DeleteAccount />
    </>
  );
}

const deleteAccountStyles = makeStyles((theme) => ({
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

const DeleteAccount = () => {
  const classes = deleteAccountStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Delete Account</Typography>}
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
      <Divider />
      <CardContent>
        <CardHeader
        title={
          <strong>NOTE: Withdraw your <Link to="/balance">revenues</Link> before Deleting account.</strong>
        }
          action={
            <Button variant="contained" color="secondary">
              Delete Account
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};
