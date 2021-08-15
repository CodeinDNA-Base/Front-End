import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Headingfonts, TextFonts } from "../../Theme/fonts";
import colors, { ColorPalette } from "../../Theme/colors";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  btnContained: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.medium,
    backgroundColor: colors.info,
    color: colors.white,
    marginLeft: "5%",
    marginBottom: "5%",
    width: "auto",
    height: "10%",
  },
  title: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.medium,
    color: colors.highlighter,
    marginLeft: "5%",
  },
  subtitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.large
        : Headingfonts.extraLarge,
    color: colors.highlighter,
    marginLeft: "5%",
  },
  media: {
    width: "100%",
    height: "100%",
  },
  bgColor: {
    backgroundImage: "linear-gradient(#66163b, #72103d, #7e1a49, #72103d)",
  },
  /**	font-size: 70px;
	font-weight: 500;
	color: white;
	font-family: "Jura", sans-serif;
	margin-left: 5%; */
}));

const MotivationalArea = () => {
  return (
    <Carousel
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      animation="slide"
      timeout={500}
      cycleNavigation={false}
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "white",
          color: "black",
          opacity: 1,
        },
      }}

      // OR
    >
      <SliderItemInMotivationalArea
        title="Grow With Us"
        subtitle="Start your bussiness with us"
        btntitle="Contact Now"
        color={""}
        image="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
      />
      <SliderItemInMotivationalArea
        title="Start New bussiness"
        subtitle="What you define, We design"
        btntitle="Contact Now"
        image="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
    </Carousel>
  );
};

const SliderItemInMotivationalArea = ({
  title,
  subtitle,
  btntitle,
  color,
  image,
}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  return (
    <Grid container spacing={0}>
      {!isDesktopOrLaptopOrTabletScreen && <Grid xs={1} sm={1}></Grid>}
      <Grid
        item
        container
        justifyContent="flex-start"
        xs={6}
        sm={6}
        md={7}
        className={classes.bgColor}
      >
        <p className={classes.title}>{title}</p>

        <p className={classes.subtitle}>{subtitle} </p>
        <Button
          variant="contained"
          classes={{
            root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
          }}
        >
          {btntitle}
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={5}>
        <img src={image} className={classes.media} />
      </Grid>
    </Grid>
  );
};

export default MotivationalArea;
