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
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ReactIcon } from "../../Theme/Icons/png/TechnologyIcons";
import colors, { ColorPalette } from "../../Theme/colors";
import { TextFonts, Headingfonts } from "../../Theme/fonts";
import { typography } from "@material-ui/system";
import { useMediaQuery } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    color: "#007FED",
  },
}));

export default function TechnologyIcons() {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const IconSize = isDesktopOrLaptopOrTabletScreen ? 60 : 40;
  const classes = useStyles();
  const handleClick = () => {};
  return (
    <Grid
      md={10}
      xs={12}
      sm={12}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
      <Grid
        item
        md={2}
        sm={2}
        xs={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        <ReactIcon
          title="react"
          fontsize={IconSize}
          color="blue"
          handleClick={handleClick}
        />
      </Grid>
    </Grid>
  );
}
