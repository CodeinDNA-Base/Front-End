//ReactJS
import React, { useState, useEffect, PureComponent } from "react";

import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
// or scss:
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
  Badge,
} from "@material-ui/core";

//Material-UI styles
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Icons
import EditIcon from "@material-ui/icons/Edit";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";
import { Camera } from "@material-ui/icons";

//Routes

//Styles and Theme
import "./Styles/AccountSettingsPersonalInfo.css";

//Resources
import profilePic from "../Resources/nadir.jpg";
import SmallPic from '../Resources/Small.PNG'

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
  const [openChooseImage, setOpenChooseImage] = useState(false);

  const handleProfileImageOpen = () => {
    setOpenChooseImage(true);
  };

  const handleProfileImageClose = () => {
    setOpenChooseImage(false);
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
          <div className="container">
            <img src={profilePic} alt="profile image" className="image" />
            <div className="middle">
              <IconButton>
                <Camera fontSize="large" onClick={handleProfileImageOpen} />
              </IconButton>
            </div>
          </div>
        </CardContent>
        <Divider />
        <CardContent>
          <h4 contentEditable={editable} onChange={handleUpdateName}>
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
          aria-labelledby="UpdateImageModalTitle"
          aria-describedby="UpdateImageModalDescription"
          className={classes.modal}
          open={openChooseImage}
          onClose={handleProfileImageClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openChooseImage}>
            <div className={classes.paper}>
              <Box mt={-4}>
                <ChooseProfileImageModal
                  handleClose={handleProfileImageClose}
                />
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
              <Croppper />
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

class Croppper extends PureComponent {
 
  constructor(props){
    super(props)
    this.setFiles=this.setFiles.bind(this)
  }
  
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 1 / 1
    },
  };

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error('Canvas is empty');
            return;
          }
          blob.name = fileName;
          window.URL.revokeObjectURL(this.fileUrl);
          this.fileUrl = window.URL.createObjectURL(blob);
          resolve(this.fileUrl);
        },
        'image/jpeg',
        1
      );
    });
  }

  setFiles(files){
    this.setState({src:files[0]})
  }
  render() {
    const { crop, croppedImageUrl, src } = this.state;
    
    return (
      <div>
      <div style={{display:"flex"}}>
        {src && (
          <div style={{width:"200px", height:"200px", marginBottom:"70px", marginLeft:'auto', marginRight:"auto"}}>
          <ReactCrop
            src={profilePic}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
          </div>
        )}
        {croppedImageUrl && (
          <div style={{width:"200px", height:"200px", marginLeft:'auto', marginRight:"auto"}}>
          <img alt="Crop" style={{ maxWidth: '100%'}} src={croppedImageUrl} />
          </div>
        )}
      </div>
      <div>
          <ImageUploader setFiles={this.setFiles} />
        </div>

      </div>
    );
  }
}


function ImageUploader(props) {

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const dropZoneStyles = {
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    border: "2px dashed blue ",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    transition: "border .24s ease-in-out",
  };

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      accept: "image/jpeg, image/png",
      maxFiles: 1,
      // maxWidth:100,  //bytes
      // maxSize:10000
      onDrop: (acceptedFiles) => {
        props.setFiles(acceptedFiles)
      },
    });

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })} style={dropZoneStyles}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      </div>
  );
}