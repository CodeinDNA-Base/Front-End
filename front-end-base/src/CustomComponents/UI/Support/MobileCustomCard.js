import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import colors from "../../../Theme/colors";
import { TextFonts, HeadingFonts } from "../../../Theme/fonts";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AvTimerRoundedIcon from "@material-ui/icons/AvTimerRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MobileCustomCardCarousel } from "./MobileCustomCardCarousel";
const CustomCardStyles = makeStyles(() => ({
  root: {
    boxShadow:
      "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.19)",
    maxWidth: "100%",
    cursor: "pointer",
    position: "relative",
  },

  detailBox: {
    margin: "0% 0% 0% 2%",
  },
  title: {
    font: TextFonts.medium,
    fontWeight: "bolder",
  },
  deliveryTime: {
    font: TextFonts.small,
  },
  textLight: {
    font: TextFonts.large,
  },
  textBold: {
    font: TextFonts.large,
  },
  favouriteIcon: {
    zIndex: 9,
    fontSize: 20,
    padding: "3%",
    position: "absolute",
    bottom:'40%',
    left: "85%",
    backgroundColor: "white",
    borderRadius: "50%",
    fill: ({ isFavIconSelected }) =>
      isFavIconSelected ? colors.error : colors.secondary,
    
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

export const MobileCustomCard = ({
  subServiceTitle,
  basicPackageDeliveryTime,
  basicPackagePrice,
  subServiceRating,
  subServiceTotalRatedOrders,
  subServiceThumbnails,
}) => {
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
      <Box style={{ display: "flex", borderBottom:'2px solid black',}}>
        <Box width="40%">
          <MobileCustomCardCarousel
            subServiceThumbnails={subServiceThumbnails}
            navButtonAndFavIconVisibility={navButtonAndFavIconVisibility}
          />
        </Box>
        <Box width="50%" className={classes.detailBox} flexShrink={0}>
        { Array.from(subServiceTitle).slice(0,50) }{Array.from(subServiceTitle).length > 50 && '...'}
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
        </Box>
      </Box>
      
      <Box width='100%' p={1} m={1}>
       
        <Box display="flex">
          <Box width="100%">
            <Typography className={classes.textLight}>
              From{" "}
              <Typography component="span" className={classes.textBold}>
                {basicPackagePrice + '$'}
              </Typography>
            </Typography>
          </Box>
          <Box flexShrink={0}>
            <StarRoundedIcon style={{ color: colors.secondary }} />{" "}
          </Box>
          <Box flexShrink={0}>{subServiceRating} {`(${subServiceTotalRatedOrders})`}</Box>
        </Box>
      </Box>
    </Grid>
  );
};
