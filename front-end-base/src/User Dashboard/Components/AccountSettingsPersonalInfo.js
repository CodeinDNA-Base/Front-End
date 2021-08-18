import { Box, Divider, Typography } from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

//Icons
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";
//Resources
import profilePic from "../Resources/nadir.jpg";

export const AccountSettingsPersonalInfo = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Personal Info</Typography>
      </Box>
      <PersonalInfoContainers />
    </div>
  );
};

function PersonalInfoContainers() {
  return (
    <>
      <AccountInfo />
      <ContactInfo />
    </>
  );
}

const accountInfoStyles = makeStyles((theme) => ({
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

const AccountInfo = () => {
  const classes = accountInfoStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title={<Typography variant="h4">Account</Typography>}
      />
      <Divider />
      <CardContent>
        <Avatar
          className={classes.avatar}
          src={profilePic}
          onClick={() => {
            alert("Allow to pick new Image");
          }}
          style={{ cursor: "pointer" }}
        />
      </CardContent>
      <Divider />
      <CardContent>
        <h4>Nadir Hussain</h4>
        <Typography variant="h6">nadirhussaintumrani@gmail.com</Typography>
      </CardContent>
    </Card>
  );
};

const contactInfoStyles = makeStyles((theme) => ({
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

const ContactInfo = () => {
  const classes = contactInfoStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title={<Typography variant="h4">Contact</Typography>}
      />
      <Divider />
      <CardContent>
        <h4>Phone: </h4>
        <Typography>+923151390617</Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <h4>Linked Accounts</h4>
        <IconButton color="primary">
          <LinkedIn fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <Github fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <Facebook fontSize="large" />
        </IconButton>
      </CardContent>
      <Divider />
      <CardContent>
        <h4>Address: </h4>
        <Typography>Sukkur IBA University, Pakistan</Typography>
      </CardContent>
    </Card>
  );
};
