import React from "react";
import { Grid } from "@material-ui/core";
import AboutUsMainTitle from "./AboutUsMainTitle";
import { OurMission } from "./OurMission";
import { useMediaQuery } from "@material-ui/core";
import colors, { ColorGradient } from "../../../Theme/colors";
import { makeStyles } from "@material-ui/core";



const CareersStyles = makeStyles((theme) => ({
  aboutUsMainTitle: {
    padding: "0%  2% 0% 2%",
    backgroundImage: ColorGradient.lightSkyBlue,
    borderRadius: 10,
  },

  aboutUsMainTitleContainer: {
    margin: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "1%  3% 5% 3%" : "5% 5% 5% 5%",
    width: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "94%" : "90%",
  },
  ourMission: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      !isDesktopOrLaptopOrTabletScreen && "10%",
  },
}));
 const Careers = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = CareersStyles(isDesktopOrLaptopOrTabletScreen);

  return (
    <Grid container>
      <Grid container spacing={0} className={classes.aboutUsMainTitleContainer}>
        <Grid item md={12} xs={12} sm={12} className={classes.aboutUsMainTitle}>
          <AboutUsMainTitle />
        </Grid>
      </Grid>

      {/** Mission */}
      <Grid container spacing={0} className={classes.ourMission}>
        <Grid item md={2} xs={1} sm={2}></Grid>
        <Grid item md={8} xs={10} sm={8}>
          <OurMission />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Careers;