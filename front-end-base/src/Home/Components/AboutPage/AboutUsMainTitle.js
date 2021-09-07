import React from "react";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";

const AboutUsMainTitleStyles = makeStyles((theme) => ({
    subtitle: {
      font: (isDesktopOrLaptopOrTabletScreen) =>
        isDesktopOrLaptopOrTabletScreen ? TextFonts.extraSmall : TextFonts.large,
      color: colors.lightBlack,
    },
    title: {
      font: (isDesktopOrLaptopOrTabletScreen) =>
        isDesktopOrLaptopOrTabletScreen
          ? Headingfonts.large
          : Headingfonts.XXXLarge,
      color: colors.secondary,
      
    },

  }));

  
const AboutUsMainTitle = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <Grid container spacing={0} >
      {!isDesktopOrLaptopOrTabletScreen && <Grid item xs={1} sm={1}></Grid>}
      <Grid item md={8} sm={10} xs={10}>
        <AboutUsMainTitleText />
      </Grid>
    </Grid>
  );
};


const AboutUsMainTitleText=()=>{
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
    const classes = AboutUsMainTitleStyles(isDesktopOrLaptopOrTabletScreen);
    return( <div>
        <p className={classes.title}>Independent talent with Action, Community & Quality  </p>
  
        <p className={classes.subtitle}>
          Be the Part of Our Community, to grow your bussiness smoothly
        </p>
        <Box style={{ marginTop: 20 }}>
          <RoundButton  title='Contact Us' color={colors.white} bgColor={colors.secondary}  />
          
        </Box>
      </div>)
}




export default AboutUsMainTitle;