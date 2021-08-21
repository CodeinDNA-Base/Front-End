import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Headingfonts } from "../../../Theme/fonts";
const SmallHeadingStyles = makeStyles(() => ({
  smallHeading: {
    font: ({isDesktopOrLaptopOrTabletScreen}) =>
      isDesktopOrLaptopOrTabletScreen ? Headingfonts.small : Headingfonts.large,
    textAlign: ({textAlign})=>textAlign,
    margin:({margin})=>margin
  },
}));
export const SmallHeading = ({ title,textAlign='center',margin }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = SmallHeadingStyles({isDesktopOrLaptopOrTabletScreen,margin,textAlign});

  return <p className={classes.smallHeading}>{title}</p>;
};
