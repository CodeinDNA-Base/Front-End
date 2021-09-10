//ReactJS
import React, {useState, useEffect} from 'react'

//Material-UI core
import { Button, Grid,makeStyles, useMediaQuery } from "@material-ui/core";

//Material-UI styles

//Icons

//Theme and styles
import "../Color/Colors.css";

//Resources


//custom components
import { RecentProjectsForMobile } from "./RecentlyViewProjects/RecentProjectsForMobile";
import { RecentProjectsForDesktop } from "./RecentlyViewProjects/RecentProjectsForDesktop";
import HeaderTitle from "./RecentlyViewProjects/HeaderTitle";


const useStyles = makeStyles(() => ({
  btnContained: {
    backgroundColor: " #011c38",
    color: "white",
    borderRadius: 20,
    marginLeft: 10,
  },
}));

export const RecentlyViewedProjects = (props) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles();

  return (
    <div className="highlighter">
      <HeaderTitle title={"Recently Viewed Projects"} />
      {isDesktopOrLaptopOrTabletScreen ? (
        <RecentProjectsForDesktop />
      ) : (
        <RecentProjectsForMobile />
      )}
      <Grid container spacing={0} style={{ marginTop: "4%" }}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid xs={12} sm={10} md={10} item style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            classes={{
              root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            See More Projects
          </Button>
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid>
    </div>
  );
};