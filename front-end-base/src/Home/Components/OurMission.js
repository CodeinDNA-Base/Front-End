import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import colors from "../../Theme/colors";
import { Headingfonts, TextFonts } from "../../Theme/fonts";
import { DividerInFooter } from "../../CustomComponents/Layouts/Footer/DividerInFooter";
import { DividerInProjects } from "./HorizontalLine";

const OurMissionStyles = makeStyles(() => ({
  subtitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
    color: colors.lightBlack,
    marginLeft:'10%'
  },
  title: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? Headingfonts.small : Headingfonts.large,
    fontWeight:(isDesktopOrLaptopOrTabletScreen) =>
    isDesktopOrLaptopOrTabletScreen && 'bolder' ,
  
  },
}));

export const OurMission=()=>{
return (
    <Grid container justifyContent="center"  >
        <DividerInFooter />
        <OurMissionText />
        <DividerInFooter />
        <Grid item style={{marginTop:'5%'}} >
            <img  style={{width:'100%'}} src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"/>
        </Grid>
        <DividerInProjects />
        
    </Grid>
)
}
const OurMissionText = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = OurMissionStyles(isDesktopOrLaptopOrTabletScreen);
  return (
    <Grid container justifyContent="center" alignItems={ isDesktopOrLaptopOrTabletScreen && "center"}>
      <Grid item md={6} xs={6} sm={6}>
        <p className={classes.title}>
          Our mission is to create economic opportunities so people have better
          lives.
        </p>
      </Grid>
      <Grid item md={6} xs={6} sm={6}>
        <p className={classes.subtitle}>
         Upwork is the
          world’s work marketplace that connects businesses with independent
          talent. We serve everyone from one-person startups to 30% of the
          Fortune 100 with a powerful, trust-driven platform that enables
          companies and freelancers to work together in new ways that unlock
          their potential.
        </p>
      </Grid>
    </Grid>
  );
};
