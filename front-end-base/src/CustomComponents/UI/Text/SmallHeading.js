import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Headingfonts } from "../../../Theme/fonts";
const SmallHeadingStyles = makeStyles(() => ({
  smallHeading: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? Headingfonts.small : Headingfonts.large,
    textAlign: "center",
  },
}));
export const SmallHeading = ({ title }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = SmallHeadingStyles(isDesktopOrLaptopOrTabletScreen);

  return <p className={classes.smallHeading}>{title}</p>;
};
