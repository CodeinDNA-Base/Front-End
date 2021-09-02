import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "../Home/Components/Header";
import { useWindowDimensions } from "../Home/Components/WindowDimensions";
import { AppBar, makeStyles } from "@material-ui/core";
import DesktopFooter from "../CustomComponents/Layouts/Footer/DesktopFooter";
import MobileFooter from "../CustomComponents/Layouts/Footer/MobileFooter";
import colors, { ColorGradient } from "../Theme/colors";
import AboutUsMenu from "../Home/Components/AboutUsMenu";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  footer: {
    marginTop: "10%",
  },

  aboutUsMainTitle: {
    padding: "0%  2% 0% 2%",
    backgroundImage: ColorGradient.lightSkyBlue,
    borderRadius: 10,
  },
  aboutUsMainTitleContainer: {
    margin: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "10%  3% 5% 3%" : "35% 5% 5% 5%",
    width: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "94%" : "90%",
  },
  ourMission: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      !isDesktopOrLaptopOrTabletScreen && "10%",
  },
}));

function AboutUsContainer(props) {
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
      {/* <Grid item xs={12}>
        <AppBar>
          <Header
            handelTabIndex={handelTabIndex}
            packageContainerStickyNess={packageContainerStickyNess}
          />
        </AppBar>
      </Grid> */}

      <Grid container justifyContent="center">
        <AboutUsMenu />
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

export default AboutUsContainer;
