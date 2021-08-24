//ReactJS
import React, { useState } from "react";
import { Link } from "react-router-dom";
//Material-UI core
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Backdrop,
  Fade,
  Modal,
  useMediaQuery,
  Breadcrumbs,
  makeStyles,
  Grid,
} from "@material-ui/core";

//Material-UI styles

//Icons

//Them and styles
import "./Styles/ViewPostDetails.css"

//Custom components
import { PostRequestModal } from "./PostRequestModal";

//Resources

const postStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
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

export const ViewPostDetails = () => {
  const classes = postStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isItXs = useMediaQuery("(max-width: 599px)");

  function handlePostAgain() {
    alert(
      "Auto fill the details of post into Modl and post request to codeindna"
    );
  }
  return (
    <div>
      <Box display="flex" mb={2}>
        <Box flex={1}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/userdashboard" /*className="linkStyle"*/>
              Dashboard
            </Link>
            <Link to="previousposts">
              Previous Posts
            </Link>
            <Link color="textPrimary" to="viewpost">
              View Post
            </Link>
          </Breadcrumbs>
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Post New Request
          </Button>
        </Box>
      </Box>

      <Card elevation={2}>
        <CardHeader
          title={<Typography variant="h5">Post Details</Typography>}
          action={
            <Box p={2}>
              <Typography>
                <strong>Status:</strong>{" "}
                <span style={{ color: "blue" }}>Open</span>
              </Typography>
            </Box>
          }
        />
        <Divider />
        <CardContent>
          <Typography>
            daksjhdkjsahdkjhasdjk daksjhdkjsahdkjhasdjk daksjhdkjsahdkjhasdjk
            daksjhdkjsahdkjhasdjk daksjhdkjsahdkjhasdjk daksjhdkjsahdkjhasdjk
            daksjhdkjsahdkjhasdjk daksjhdkjsahdkjhasdjk daksjhdkjsahdkjhasdjk
            daksjhdkjsahdkjhasdjk daksjhdkjsahdkjhasdjk
            daksjhdkjsahdkjhasdjkdaksjhdkjsahdkjhasdjkdaksjhdkjsahdkjhasdjkdaksjhdkjsahdkjhasdjkjsahdkjhasdjk
          </Typography>
        </CardContent>

        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs={isItXs ? 2 : 3} sm={3} md={3} lg={3} xl={3}>
              <Box ml={isItXs ? 0 : 5}>
                <Box>
                  <h4>Budget</h4>
                </Box>
                <Box mt={-1}>
                  <span> $28</span>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <Box>
                <h4>Category</h4>
              </Box>
              <Box mt={-1}>
                <span> Java</span>
              </Box>
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <Box>
                <h4>Sub Category</h4>
              </Box>
              <Box mt={-1}>
                <span> JavaFX</span>
              </Box>
            </Grid>

            <Grid item xs={isItXs ? 4 : 3} sm={3} md={3} lg={3} xl={3}>
              <Box>
                <h4>Posted On</h4>
              </Box>
              <Box mt={-1}>
                <span> August 21, 2021</span>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />
        <CardHeader
          title={<Typography variant="h5">Last seen by DNA Team</Typography>}
          action={
            <Box p={2}>
              <Typography>3 Months ago</Typography>
            </Box>
          }
        />

        <Divider />
        <CardHeader
          action={
            <Box p={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePostAgain}
              >
                Post Again
              </Button>
            </Box>
          }
        />
      </Card>

      {/* Open this modal, when post request button is clicked */}
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
              <PostRequestModal
                id="postRequestModalForm"
                handleClose={handleClose}
              />
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
