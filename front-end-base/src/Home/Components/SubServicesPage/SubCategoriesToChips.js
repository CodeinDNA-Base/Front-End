import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import gernalClassesStyles from "../../../Theme/gernalStyles";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import { useMediaQuery } from "@material-ui/core";
const SubCategoriesToChipsStyles = makeStyles(() => ({
 
  ulStyle: {
    listStyle: "none",
  },
  liStyle: {
    marginBottom: "4%",
    font: isDesktopOrLaptopOrTabletScreen =>isDesktopOrLaptopOrTabletScreen ?TextFonts.XXSmall :TextFonts.medium,
    color:colors.primary
  },
}));

const SelectSubCategories=()=>{
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
    const classes = SubCategoriesToChipsStyles(isDesktopOrLaptopOrTabletScreen);
    const gernalClasses = gernalClassesStyles();
    return (
      <Grid container spacing={0}>
        <Grid sm={1} md={1} item></Grid>
        <Grid xs={12} sm={10} md={10} item container>
          <Grid item xs={5} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Team</li>
              </Link>
  
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Support</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Online Meetings</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={5} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Team</li>
              </Link>
  
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Support</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Online Meetings</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Members</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={5} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Team</li>
              </Link>
  
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Support</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>TOS Rules</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Online Meetings</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={5} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Team</li>
              </Link>
  
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Support</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>React Js</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Express JS</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Online Meetings</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
            </ul>
          </Grid>
        </Grid>
        <Grid sm={1} md={1} item></Grid>
      </Grid>
    );
}
export const SubCategoriesToChips = ( {selectedCategoryChipId} ) => {
  useEffect(()=>{
    console.log(selectedCategoryChipId)
  })
  if(selectedCategoryChipId === 'id_0'){
   return <SelectSubCategories />   
  }else 
  return <h1>empty</h1>
};

