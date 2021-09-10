//ReactJS
import React, {useState, useEffect} from "react";

//Material-UI core
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormLabel,
  Typography,
  Card,
  CardHeader,
  CardContent

} from "@material-ui/core";

//Material-UI styles
import { makeStyles } from "@material-ui/core/styles";


//Material-UI icons


//Styles and theme


//Resources


//react-redux
import { useDispatch, useSelector } from "react-redux";

//Thunks
import { fetchNotificationInfoDetails } from "../../Redux/slices/notificationInfoSlice";

//selectors
import {
  selectNotificationInfo,
  selectIsNotificationInfoLoading,
  selectHasNotificationInfoError,
} from "../../Redux/slices/notificationInfoSlice";

export const AccountSettingsNotifications = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Notifications Settings</Typography>
      </Box>
      <NotificationsSettingsContainer />
    </div>
  );
};

function NotificationsSettingsContainer() {
  return (
    <>
      <MobileNotifications />
      <DesktopNotifications />
      <EmailNotifications />
    </>
  );
}

const mobileNotificationsStyles = makeStyles((theme) => ({
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

const MobileNotifications = () => {
  const classes = mobileNotificationsStyles();

  const mobileNotifications = [
    {
      key: "inboxMessages",
      value: "Inbox Messages",
    },
    {
      key: "orderMessages",
      value: "Order Messages",
    },
    {
      key: "orderUpdates",
      value: "Order Updates",
    },
    {
      key: "dnaOffers",
      value: "Offers by Codeindna.com",
    },
    {
      key: "myAccount",
      value: "My Account",
    },
    {
      key: "support",
      value: "Help and Support by Codeindna.com",
    },
  ];
  
      //Redux store: operations
      const dispatch=useDispatch()
      const notificationsInfo=useSelector(selectNotificationInfo)
      const isLoading=useSelector(selectIsNotificationInfoLoading)
      const encounteredError=useSelector(selectHasNotificationInfoError)
    
      useEffect(() => {
        dispatch(fetchNotificationInfoDetails("email or id of user"));
      }, [dispatch]);

      
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Set Mobile Notifications</Typography>}
      />
      <Divider />
      <CardContent>
        <h4>Receive Notification for</h4>
        {mobileNotifications.map((notf) => {
          return (
            <Box>
              <Checkbox value={notf.key} color="primary"></Checkbox>
              <FormLabel>{notf.value}</FormLabel>
            </Box>
          );
        })}
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary">
              Update
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const desktopNotificationsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
  formControl: {
    width: "50%",
    padding: "2rem",
  },
}));

const DesktopNotifications = () => {
  const classes = desktopNotificationsStyles();
  const desktopNotifications = [
    {
      key: "inboxMessages",
      value: "Inbox Messages",
    },
    {
      key: "orderMessages",
      value: "Order Messages",
    },
    {
      key: "orderUpdates",
      value: "Order Updates",
    },
    {
      key: "dnaOffers",
      value: "Offers by Codeindna.com",
    },
    {
      key: "myAccount",
      value: "My Account",
    },
    {
      key: "support",
      value: "Help and Support by Codeindna.com",
    },
  ];
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Set Desktop Notifications</Typography>}
      />
      <Divider />
      <CardContent>
        <h4>Receive Desktop Notifications for</h4>
        {desktopNotifications.map((notf) => {
          return (
            <Box>
              <Checkbox value={notf.key} color="primary"></Checkbox>
              <FormLabel>{notf.value}</FormLabel>
            </Box>
          );
        })}
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary">
              Update{" "}
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const emailNotificationsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
  formControl: {
    width: "50%",
    padding: "2rem",
  },
}));

const EmailNotifications = () => {
  const classes = emailNotificationsStyles();
  const emailNotifications = [
    {
      key: "inboxMessages",
      value: "Inbox Messages",
    },
    {
      key: "orderMessages",
      value: "Order Messages",
    },
    {
      key: "orderUpdates",
      value: "Order Updates",
    },
    {
      key: "dnaOffers",
      value: "Offers by Codeindna.com",
    },
    {
      key: "myAccount",
      value: "My Account",
    },
    {
      key: "support",
      value: "Help and Support by Codeindna.com",
    },
  ];
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Set Email Notifications</Typography>}
      />
      <Divider />
      <CardContent>
        <h4>Receive Emails for</h4>
        {emailNotifications.map((notf) => {
          return (
            <Box>
              <Checkbox value={notf.key} color="primary"></Checkbox>
              <FormLabel>{notf.value}</FormLabel>
            </Box>
          );
        })}
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary">
              Update{" "}
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};