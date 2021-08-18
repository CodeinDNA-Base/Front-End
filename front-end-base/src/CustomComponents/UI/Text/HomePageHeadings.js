import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { TextFonts, Headingfonts } from "../../../Theme/fonts";
import colors from "../../../Theme/colors";

const HeadingStyles = makeStyles(() => ({
  HomePageComponentsHeadingGrid: {
    marginBottom: "2%",
    textAlign: "center",
  },

  HomePageComponentsHeadingTitle: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.medium
        : Headingfonts.extraExtraLarge,
    color: ({ titleColor }) => titleColor,
  },
  // HomePageComponentsHeadingDescription: {},

}));

export function HomePageComponentsHeading({
  title,
  description,
  titleColor,
  descriptionColor,
}) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = HeadingStyles({
    isDesktopOrLaptopOrTabletScreen,
    titleColor,
    descriptionColor,
  });
  return (
    <Grid
      container
      spacing={0}
      className={classes.HomePageComponentsHeadingGrid}
    >
      <Grid xs={0} sm={1} md={1} item></Grid>
      <Grid xs={12} sm={10} md={10} item>
        <p className={classes.HomePageComponentsHeadingTitle}>{title} </p>
        <p className={classes.HomePageComponentsHeadingDescription}>
          {description}
        </p>
      </Grid>
      <Grid xs={0} sm={1} md={1} item></Grid>
    </Grid>
  );
}

