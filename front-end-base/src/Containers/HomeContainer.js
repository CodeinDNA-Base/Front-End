import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { positions } from "@material-ui/system";
import LatestProjects from "../Home/Components/LatestProjects";
// import { compose, spacing, palette, breakpoints } from "@material-ui/system";
// import styled from "styled-components";
import Services from "../Home/Components/Services";
import MainContainer from "../Home/Components/MainContainer";
import ExploreArea from "../Home/Components/ExploreArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MotivationalArea from "../Home/Components/MotivationalArea";
import Header from "../Home/Components/Header";
import UserReview from "../Home/Components/UserReviews";
import Technologies from "../Home/Components/Technologies";
import WhatWeOffer from "../Home/Components/WhatWeOffer";
import { useWindowDimensions } from "../Home/Components/WindowDimensions";
import { AppBar, makeStyles } from "@material-ui/core";
import DesktopFooter from "../CustomComponents/Layouts/Footer/DesktopFooter";
import MobileFooter from "../CustomComponents/Layouts/Footer/MobileFooter";
import colors, { ColorGradient } from "../Theme/colors";
import LoginIn from "../Home/Components/LoginForm";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  MainContainer: {
    backgroundColor: colors.primary,
    paddingTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "25%",
    paddingBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "2%" : "10%",
  },
  services: {
    marginTop: "3%",
  },
  Technologies: {
    marginTop: "3%",
  },
  latestProjects: {
    marginTop: "7%",
    backgroundImage: ColorGradient.lightSkyBlue,
  },
  whatWeOffer: {
    paddingTop: "3%",
  },
  userReview: {
    marginTop: "1%",
  },
  motivationalArea: {
    marginTop: "10%",
  },
  footer: {
    marginTop: "10%",
  },
  loginInForm: {
    backgroundColor: colors.white,
    paddingTop: "7%",
  },
}));
// const Box = styled.div`
// 	${breakpoints(compose(spacing, palette))}
// `;
function HomeContainer(props) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const { height, width } = useWindowDimensions();
  const [packageContainerStickyNess, setPackageContainerStickyNess] =
    useState("");
  const [sticknessFlag, setSticknessFlag] = useState(true);
  const [currentSelectedTabIndex, setCurrentSelectedTabIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    if (scrollPosition > height * 0.9) {
      console.log("S:" + scrollPosition);
      setPackageContainerStickyNess("UnStickThePackageContainer");
    } else {
      setPackageContainerStickyNess("StickThePackageContainer");
    }
  }, [scrollPosition > height * 0.9]);

  const handelTabIndex = (event, index = 0) => {
    setCurrentSelectedTabIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);

  return (
    <div className={classes.root}>
      {/* Header */}
      <Grid item xs={12}>
        <AppBar>
          <Header
            handelTabIndex={handelTabIndex}
            packageContainerStickyNess={packageContainerStickyNess}
          />
        </AppBar>
      </Grid>

      <Grid container className={classes.loginInForm}>
        <Grid xs={0} sm={1} md={4} item></Grid>
        <Grid item xs={12} sm={10} md={4}>
          <LoginIn />
        </Grid>
        <Grid xs={0} sm={1} md={4} item></Grid>
      </Grid>
      {/* MainContainer */}
      {/* <Grid container spacing={0} className={classes.MainContainer}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <MainContainer />
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid> */}
      {/* Services*/}
      {/* <Grid container spacing={0} className={classes.services}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <Services />
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid> */}
      {/* Technologies */}
      {/* <Grid container spacing={0} className={classes.Technologies}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <Technologies />
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid> */}
      {/* projects */}
      {/* <Grid container className={classes.latestProjects}>
        <Grid xs={0} sm={1} md={2} item></Grid>
        <Grid item xs={12} sm={10} md={8}>
          <LatestProjects />
        </Grid>
        <Grid xs={0} sm={1} md={2} item></Grid>
      </Grid>
      <Grid container spacing={0} className={classes.whatWeOffer}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <WhatWeOffer />
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid> */}
      {/*User reviews */}
      {/* <Grid container className={classes.userReview}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <UserReview />
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid> */}

      {/* extra info area */}
      {/* <Grid container spacing={0} className={classes.motivationalArea}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <MotivationalArea />
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid> */}
      {/* footer */}
      <Grid container className={classes.footer} spacing={0}>
        <Grid item md={12} xs={12} sm={12}>
          {isDesktopOrLaptopOrTabletScreen ? (
            <DesktopFooter />
          ) : (
            <MobileFooter />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeContainer;
