import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import { Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import colors, { ColorPalette } from "../../colors";
import { TextFonts, Headingfonts } from "../../fonts";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  IconContainer: {
   
    marginTop: "20%",
    marginBottom: "20%",
    cursor: "pointer",
    justifyContent:'center'
  },
  IconTitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.large,
    alignSelf:'center'
  },
}));
export const CustomIcon = ({ icon, handleClick, title }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);

  return (
    <div className={classes.IconContainer} onClick={handleClick}>
      {icon}
      <Typography variant="h5" classes={{ root: classes.IconTitle }}>
        {title}
      </Typography>
    </div>
  );
};
