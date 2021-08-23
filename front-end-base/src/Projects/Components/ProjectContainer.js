//ReactJS
import React from "react";

//Material-UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  Chip,
  Typography,
  MobileStepper,
  Button,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import LikeIcon from "@material-ui/icons/ThumbUp";
import WishListIcon from "@material-ui/icons/Favorite";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Rating } from "@material-ui/lab";

//CSS
import "./Styles/ProjectContainer.css";
import LoremIpsum, { Avatar, loremIpsum } from "react-lorem-ipsum";

const componentStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(1.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const ProjectContainer = () => {
  const classes = componentStyles();
  return (
    <div className="projectContainerComponent">
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <CarouselItem />
          </Grid>
          <Grid item className={classes.section}>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={12} md={8} lg={8} xl={8}>
            <MiddleDividers />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const sectionStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(1.5),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(2, 1, 1),
  },
  likeAndWishlistButton: {
    margin: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
  },
  offerAndPreviewButton: {
    margin: theme.spacing(0.5),

    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
  },
}));

const MiddleDividers = () => {
  const classes = sectionStyle();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid xs={9} sm={9} md={9} lg={9} xl={9}>
            <Typography variant="h5">Offline File Sharer in Java</Typography>
          </Grid>

          <Grid
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            container
            justifyContent="center"
          >
            <div>
              <Typography variant="h5">$45.54</Typography>
            </div>
            <div>
              <Rating size="small" readOnly value={2} />
            </div>
            <div>
              <Typography>Sales(913)</Typography>
            </div>
          </Grid>
        </Grid>
        <LoremIpsum />
      </div>
      <Divider variant="middle" />
      <div className={classes.section3}>
        <Chip
          icon={<LikeIcon />}
          label="1234"
          clickable
          color="primary"
          variant="outlined"
          className={classes.likeAndWishlistButton}
        />

        <Chip
          icon={<WishListIcon />}
          label="754"
          clickable
          color="primary"
          variant="outlined"
          className={classes.likeAndWishlistButton}
        />
        <Button
          className={classes.offerAndPreviewButton}
          color="primary"
          variant="outlined"
        >
          Make Offer
        </Button>
        <Button
          className={classes.offerAndPreviewButton}
          color="primary"
          variant="outlined"
        >
          Preview
        </Button>
      </div>
    </div>
  );
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const carouselStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 240,
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
}));

function CarouselItem() {
  const classes = carouselStyle();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  );
}
