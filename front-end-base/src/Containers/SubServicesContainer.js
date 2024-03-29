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
import LoginForm, { PasswordForm } from "../Home/Components/LoginForm";
import Register from "../Home/Components/Register";
import RegisterDetails from "../Home/Components/RegisterDetails";
import { CustomCard } from "../CustomComponents/UI/Support/CustomCard";
import ServicePage from "../Home/Components/ServicesPage";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },

  footer: {
    marginTop: "10%",
  },
  loginInForm: {
    backgroundColor: colors.white,
    paddingTop: "7%",
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "1%" : "25%",
  },
}));
// const Box = styled.div`
// 	${breakpoints(compose(spacing, palette))}
// `;
function SubServicesContainer(props) {
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

      <Grid container style={{ marginTop: "10%" }}>
        <Grid xs={1} sm={1} md={1} item></Grid>
        <Grid xs={10} sm={10} md={10} container item>
          <ServicePage />
        </Grid>
        <Grid xs={1} sm={1} md={1} item></Grid>
      </Grid>

      
      {/* footer*/}
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

export default SubServicesContainer;
