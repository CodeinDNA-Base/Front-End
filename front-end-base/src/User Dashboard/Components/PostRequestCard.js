//ReactJS
import React, { useState } from "react";
//Material-UI core
import {
  Button,
  Box,
  Card,
  CardContent,
  Modal,
  Backdrop,
  Fade,
  TextareaAutosize,
  CardHeader,
  Divider,
  Typography,
  FormControlLabel,
  FormControl,
  InputLabel,
  TextField,
  OutlinedInput,
  InputAdornment,
  Tooltip,
  Zoom,
  Grid,
  useMediaQuery,
} from "@material-ui/core";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

//Material-UI Styles
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Styles and Theme

//Resources

export const PostRequestCard = () => {
  return <RequestCard />;
};

const requestCardStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    textAlign: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
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

const RequestCard = React.memo(function ProfileCard() {
  const classes = requestCardStyles();
  const shadowStyles = useFadedShadowStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={cx(classes.card, shadowStyles.root)}>
        <CardContent>
          <p className={classes.statValue}>
            Get offers from sellers for your project
          </p>
          <Box m={1} pt={3}>
            <Button variant="outlined" onClick={handleOpen}>
              Post a Request
            </Button>
          </Box>
          <Box m={1}>
            <Button variant="contained" color="primary">
              Show Previous
            </Button>
          </Box>
        </CardContent>
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
                <PostRequestModalForm id="postRequestModalForm" handleClose={handleClose}/>
              </Box>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
});

const modalFormStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
  },
  attachFilesBtn: {
    flex: 1,
  },
  descriptionBox: {
    fontFamily: "verdana",
    fontSize: 16,
  },
}));

const PostRequestModalForm = (props) => {
  const classes = modalFormStyles();

  const letterLimit = 5000;

  const [letterCount, setLetterCount] = useState(0);

  function handleDescriptionChange(event) {
    const letters = event.target.value;
    setLetterCount(letters.length);
  }

  function handleSubmitRequest(){
    alert("Send Request to admin Dashboard")
    //Call handle close method of parent component
    props.handleClose()
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Card className={classes.root} elevation={0}>
      <CardHeader
        title={
          <Typography variant="h5">
            Describe the service you are looking for- Please be detailed as much
            as you can
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <form>
          <FormControl fullWidth>
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
              placement="right"
              arrow
            >
              <TextareaAutosize
                maxRows={4}
                minRows={4}
                aria-label="maximum height"
                placeholder="I am Looking for ..."
                className={classes.descriptionBox}
                onChange={handleDescriptionChange}
                maxLength={letterLimit}
              />
            </Tooltip>

            <Box mt={2} display="flex">
              <Box className={classes.attachFilesBtn}>
                <Button variant="outlined" color="primary">
                  Attach Files
                </Button>
              </Box>
              <Box>
                <label>
                  {letterCount}/{letterLimit}
                </label>
              </Box>
            </Box>
          </FormControl>
        </form>
      </CardContent>
      <Divider />
      <CardContent>
        <SelectOptions />
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          title={
            <Box mt={-2}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value="45"
                  size="small"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Box>
          }
          action={
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmitRequest}
            >
              Submit Request
            </Button>
          }
        />
      </CardContent>
    </Card>
    </Grid>
      </Grid>
    </div>
  
  );
};

const optionsStyles = makeStyles((theme) => ({
  categoryText: {
    fontWeight: "bold",
    color: "black",
  },
  categoryBox: {
    flex: 1,
  },
}));

const SelectOptions = () => {
  const classes = optionsStyles();

  const [category, setCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0);
  const [time, setTime] = useState(0);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const borderSelectClasses = useBorderSelectStyles();

  const menuProps = {
    classes: {
      list: borderSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + borderSelectClasses.icon}
      />
    );
  };

  const isItSmallOrExtraSmall = useMediaQuery("(max-width: 960px)");

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Box>
          <Select
            disableUnderline
            classes={{ root: borderSelectClasses.select }}
            labelId="inputLabel"
            IconComponent={iconComponent}
            MenuProps={menuProps}
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value={0} disabled>
              <Typography className={classes.categoryText}>
                Select Category
              </Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography className={classes.categoryText}>
                Web Development
              </Typography>
            </MenuItem>

            <MenuItem value={2}>
              <Typography className={classes.categoryText}>
                Java Desktop App
              </Typography>
            </MenuItem>
            <MenuItem value={3}>
              <Typography className={classes.categoryText}>
                .Net Core
              </Typography>
            </MenuItem>
            <MenuItem value={4}>
              <Typography className={classes.categoryText}>
                Java Android App
              </Typography>
            </MenuItem>
            <MenuItem value={5}>
              <Typography className={classes.categoryText}>
                React Native App
              </Typography>
            </MenuItem>
            <MenuItem value={6}>
              <Typography className={classes.categoryText}>
                UX/UI Design
              </Typography>
            </MenuItem>
          </Select>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
      <Box className={classes.categoryBox} ml={3}>
          <Select
            disableUnderline
            classes={{ root: borderSelectClasses.select }}
            IconComponent={iconComponent}
            MenuProps={menuProps}
            value={subCategory}
            onChange={handleSubCategoryChange}
            disabled={category == 0}
          >
            <MenuItem value={0} disabled>
              <Typography className={classes.categoryText}>
                Select Sub Category
              </Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography className={classes.categoryText}>
                Web Development
              </Typography>
            </MenuItem>

            <MenuItem value={2}>
              <Typography className={classes.categoryText}>
                Java Desktop App
              </Typography>
            </MenuItem>
            <MenuItem value={3}>
              <Typography className={classes.categoryText}>
                .Net Core
              </Typography>
            </MenuItem>
            <MenuItem value={4}>
              <Typography className={classes.categoryText}>
                Java Android App
              </Typography>
            </MenuItem>
            <MenuItem value={5}>
              <Typography className={classes.categoryText}>
                React Native App
              </Typography>
            </MenuItem>
            <MenuItem value={6}>
              <Typography className={classes.categoryText}>
                UX/UI Design
              </Typography>
            </MenuItem>
          </Select>
        </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
    <Box mt={isItSmallOrExtraSmall?1:0}>
          <Select
            disableUnderline
            classes={{ root: borderSelectClasses.select }}
            IconComponent={iconComponent}
            MenuProps={menuProps}
            value={time}
            onChange={handleTimeChange}
            disabled={subCategory == 0}
          >
            <MenuItem value={0} disabled>
              <Typography className={classes.categoryText}>
                Select Max Project Time
              </Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography className={classes.categoryText}>24 Hours</Typography>
            </MenuItem>
            <MenuItem value={2}>
              <Typography className={classes.categoryText}>3 days</Typography>
            </MenuItem>
            <MenuItem value={3}>
              <Typography className={classes.categoryText}>7 days</Typography>
            </MenuItem>
            <MenuItem value={4}>
              <Typography className={classes.categoryText}>15 Days</Typography>
            </MenuItem>
            <MenuItem value={5}>
              <Typography className={classes.categoryText}>1 Month</Typography>
            </MenuItem>

            <MenuItem value={6}>
              <Typography className={classes.categoryText}>3 Month</Typography>
            </MenuItem>

            <MenuItem value={7}>
              <Typography className={classes.categoryText}>
                More than 3 Months
              </Typography>
            </MenuItem>
          </Select>
        </Box>
    </Grid>
    </Grid>
  );
};
