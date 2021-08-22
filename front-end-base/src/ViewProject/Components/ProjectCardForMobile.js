import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import colors from "../../Theme/colors";
import { TextFonts, HeadingFonts } from "../../Theme/fonts";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AvTimerRoundedIcon from "@material-ui/icons/AvTimerRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";

const CustomCardStyles = makeStyles(() => ({
  root: {
    boxShadow:
      "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.19)",
    maxWidth: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? 260 : '100%',
    cursor: "pointer",
    position:'relative'
  },

  detailBox: {
    margin: "0% 5% 5% 5%",
  },
  title: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
    fontWeight: "bolder",
  },
  deliveryTime: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.small,
  },
  textLight: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.small,
  },
  textBold: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.small,
  },
  favouriteIcon: {
    zIndex: 9,
    fontSize: 20,
    padding: "3%",
    position: "absolute",
    top: "5%",
    left: "85%",
    backgroundColor: "white",
    borderRadius: "50%",
    fill: ({ isFavIconSelected }) =>
      isFavIconSelected ? colors.error : colors.secondary,
    visibility: ({ navButtonAndFavIconVisibility }) =>
      navButtonAndFavIconVisibility,
    pointer: "progress",
  },
}));
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
    title: "SEO",
    author: "author",
  },
  {
    img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
    title: "Web Developement",
    author: "author",
  },

  {
    img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
    title: "Graphic Designing",
    author: "author",
  },
  {
    img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
    title: "Voice",
    author: "author",
  },
  {
    img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
    title: "Desktop Development",
    author: "author",
  },
];

export const ProjectCardForMobile = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const [navButtonAndFavIconVisibility, setNavButtonAndFavIconVisibility] =
    useState("hidden");
  const [isFavIconSelected, setIsFavIconSelected] = useState(false);
  const classes = CustomCardStyles({
    isDesktopOrLaptopOrTabletScreen,
    navButtonAndFavIconVisibility,
    isFavIconSelected,
  });
  return (
    <Grid
      container
      alignItems="center"
      className={classes.root}
      onMouseEnter={() => setNavButtonAndFavIconVisibility("visible")}
      onMouseLeave={() => setNavButtonAndFavIconVisibility("hidden")}
    >
      <Box className={classes.carousel}>
        {isFavIconSelected ? (
          <FavoriteIcon
            className={classes.favouriteIcon}
            onClick={() => setIsFavIconSelected(!isFavIconSelected)}
          />
        ) : (
          <FavoriteBorderIcon
            className={classes.favouriteIcon}
            onClick={() => setIsFavIconSelected(!isFavIconSelected)}
          />
        )}
       <div>
		   <img width="100%" src={"https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"}/>
	   </div>
      </Box>
      <Box className={classes.detailBox}>
        <Typography component="h6" className={classes.title}>
          You will get custom website in react and node js
        </Typography>

        <Box display="flex" style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Box width="10%">
            <AvTimerRoundedIcon fontSize="small" />
          </Box>
          <Box flexShrink={0}>2 days Delivery</Box>
        </Box>
        <hr style={{ marginTop: "5%", marginBottom: "5%" }} />
        <Box display="flex">
          <Box width="100%">
            <Typography className={classes.textLight}>
              From{" "}
              <Typography component="span" className={classes.textBold}>
                30$
              </Typography>
            </Typography>
          </Box>
          <Box flexShrink={0}>
            <StarRoundedIcon style={{ color: colors.secondary }} />{" "}
          </Box>
          <Box flexShrink={0}>4.5 (2000)</Box>
        </Box>
      </Box>
    </Grid>
  );
};
