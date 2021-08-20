//ReactJS
import React, { useState, useEffect } from "react";
//Material-ui core
import {
  Box,
  Divider,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
} from "@material-ui/core";
//Material-UI styles
import { makeStyles } from "@material-ui/core/styles";
//Icons
import EditIcon from "@material-ui/icons/Edit";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";

//Routes

//Styles and Theme

//Resources
import profilePic from "../Resources/nadir.jpg";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { CallMissedSharp } from "@material-ui/icons";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2px",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 2, 2),
  },
}));

const AccountInfo = () => {
  const classes = accountInfoStyles();

  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("Nadir Hussain");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleEditAccountInfo() {
    setEditable(true);
  }

  function handleUpdateAccountInfo() {
    setEditable(false);
  }
  function handleUpdateName(event) {
    setName(event.target.value);
  }

  return (
    <div>
    <Card className={classes.root} elevation={2}>
      <CardHeader
        action={
          <IconButton>
            <EditIcon onClick={handleEditAccountInfo} />
          </IconButton>
        }
        title={<Typography variant="h4">Account</Typography>}
      />
      <Divider />
      <CardContent>
        <Avatar
          className={classes.avatar}
          src={profilePic}
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        />
      </CardContent>
      <Divider />
      <CardContent>
        <h4 contentEditable={editable} onChange={handleUpdateName}>
          {" "}
          {name}
        </h4>
        <Typography variant="h6">nadirhussaintumrani@gmail.com</Typography>
      </CardContent>

      {editable ? (
        <div>
          <Divider />
          <CardHeader
            action={
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateAccountInfo}
              >
                Update
              </Button>
            }
          />
        </div>
      ) : (
        ""
      )}
    </Card>
            <div>
            <Modal
              aria-labelledby="postRequestModalTitle"
              aria-describedby="postRequestModalForm"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <Box mt={-4}>
                    <ChooseProfileImageModal handleClose={handleClose} />
                  </Box>
                </div>
              </Fade>
            </Modal>
          </div>
    </div>
  );
};

const contactInfoStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  linkedAccountsContainer: {
    flex: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2px",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 2, 2),
  },
}));

const ContactInfo = () => {
  const classes = contactInfoStyles();

  const [mobileNumber, setMobileNumber] = useState("+923151390617");
  const [address, setAddress] = useState("Sukkur IBA University");
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleUpdateMobileNumber(event) {
    setMobileNumber(event.target.value);
  }

  function handleUpdateAddress(event) {
    setAddress(event.target.value);
  }

  function handleEditContactInfo() {
    setEditable(true);
  }

  function handleUpdateContactInfo() {
    setEditable(false);
  }

  return (
    <div>
      <Card className={classes.root} elevation={2}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <EditIcon onClick={handleEditContactInfo} />
            </IconButton>
          }
          title={<Typography variant="h4">Contact</Typography>}
        />
        <Divider />
        <CardContent>
          <h4>Phone: </h4>
          <p contentEditable={editable} onChange={handleUpdateMobileNumber}>
            {mobileNumber}
          </p>
        </CardContent>
        <Divider />
        <CardContent>
          <Box display="flex">
            <Box className={classes.linkedAccountsContainer}>
              <Typography variant="h6">Linked Accounts</Typography>
              <IconButton color="primary">
                <LinkedIn fontSize="large" />
              </IconButton>

              <IconButton color="primary">
                <Github fontSize="large" />
              </IconButton>

              <IconButton color="primary">
                <Facebook fontSize="large" />
              </IconButton>
            </Box>
            {editable ? (
              <Box mt={5}>
                <Button variant="outlined" color="primary" onClick={handleOpen}>
                  Add/Remove
                </Button>
              </Box>
            ) : (
              ""
            )}
          </Box>
        </CardContent>
        <Divider />

        <CardContent>
          <h4>Address: </h4>
          <p contentEditable={editable} onChange={handleUpdateAddress}>
            {address}
          </p>
        </CardContent>

        {editable ? (
          <div>
            <Divider />
            <CardHeader
              action={
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdateContactInfo}
                >
                  Update
                </Button>
              }
            />
          </div>
        ) : (
          ""
        )}
      </Card>

      <div>
        <Modal
          aria-labelledby="postRequestModalTitle"
          aria-describedby="postRequestModalForm"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              {/* <Typography variant="h4" id="postRequestModalTitle" className={classes.modalHeading}>Transition modal</Typography> */}
              <Box mt={-4}>
                <AddRemoveAccountsModal handleClose={handleClose} />
              </Box>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

const addRemoveStyles = makeStyles((theme) => ({
  availableAccountContainer: {
    textAlign: "center",
  },
}));

const AddRemoveAccountsModal = (props) => {
  const classes = addRemoveStyles();

  function handleConfirm() {
    props.handleClose();
  }
  return (
    <div className={classes.availableAccountContainer}>
      <CardContent>
        <h4>Click On accoun to Add</h4>
        <Box display="flex">
          <Box>
            <IconButton color="primary">
              <LinkedIn fontSize="large" />
            </IconButton>

            <IconButton color="primary">
              <Github fontSize="large" />
            </IconButton>

            <IconButton color="primary">
              <Facebook fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <h4>Click On account to Remove</h4>
        <Box display="flex">
          <Box>
            <IconButton color="primary">
              <LinkedIn fontSize="large" />
            </IconButton>

            <IconButton color="primary">
              <Github fontSize="large" />
            </IconButton>

            <IconButton color="primary">
              <Facebook fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <Box mt={2}>
        <Button variant="outlined" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </div>
  );
};


const chooseProfileImageStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
}));

const ChooseProfileImageModal = (props) => {
  const classes = chooseProfileImageStyles();

  function handleConfirm() {
    props.handleClose();
  }

  return (
    <div>
    <Grid container>
      <Grid item xl={12} sm={12} md={12} lg={12} xl={12}>
        <CardContent>
        <h4>Click On account to Remove</h4>
        <Box display="flex">
          <Box>
            <IconButton color="primary">
              <LinkedIn fontSize="large" />
            </IconButton>

            <IconButton color="primary">
              <Github fontSize="large" />
            </IconButton>

            <IconButton color="primary">
              <Facebook fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
      <Box mt={2}>
        <Button variant="outlined" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
        </CardContent>
      </Grid>
    </Grid>
    </div>
  );
};
