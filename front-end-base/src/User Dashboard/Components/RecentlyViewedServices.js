//ReactJS
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Material-UI core
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Grid,
  useMediaQuery,
  makeStyles,
  Typography,
} from "@material-ui/core";

//Material-ui styles

//icons
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import AvTimerRoundedIcon from "@material-ui/icons/AvTimerRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

//theme and styles
import colors from "../../Theme/colors";
import { TextFonts } from "../../Theme/fonts";

//Redux
import { useDispatch, useSelector } from "react-redux";
//action creators

//selectors
import {
  selectRecentServices,
  selectRecentServiceIsLoading,
  selectRecentServiceHasError,
} from "../Redux/slices/recentlyViewedServicesSlice";
//thunks
import { fetchRecentlyViewedServices } from "../Redux/slices/recentlyViewedServicesSlice";

import { lightBorder } from "../../Theme/borders";



const useStyles=makeStyles(()=>({
  linkStyle:{
    textDecoration:'none',
    color:"#000"
  }
}))

export const RecentlyViewedServices = () => {
  
  const classes=useStyles()
  const isMdLgXl = useMediaQuery("(min-width: 960px)");

  const dispatch = useDispatch();
  const recentServices = useSelector(selectRecentServices);
  const isLoading = useSelector(selectRecentServiceIsLoading);
  const encounteredError = useSelector(selectRecentServiceHasError);

  useEffect(() => {
    dispatch(fetchRecentlyViewedServices());
  }, [dispatch]);

  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(recentServices);
  }, [recentServices]);

  return (
    <>
      <h2>Recently Viewed Services</h2>
      {isMdLgXl ? (
        <Grid container>
          {isLoading ? (
            <h5>Loading Services</h5>
          ) : (
            services.map((service) => {
              return (
                <Grid item md={6} lg={3} xl={4}>
                  <Box mt={2}>
                    <Link to={{
                      pathname:"/viewservice",
                      state:{serviceId:service.serviceId}
                    }} className={classes.linkStyle}>
                    <DesktopServiceCard service={service} />
                    </Link>
                  </Box>
                </Grid>
              );
            })
          )}
        </Grid>
      ) : (
        <Grid container>
          {isLoading ? (
            <h5>Loading Services</h5>
          ) : (
            services.map((service) => {
              return (
                <Grid item xs={12} sm={12}>
                  <Box mt={2}>
                  <Link to={{
                      pathname:"/viewservice",
                      state:{serviceId:service.serviceId}
                    }} className={classes.linkStyle}>
                    <MobileServiceCard service={service} />
                    </Link>
                  </Box>
                </Grid>
              );
            })
          )}
        </Grid>
      )}
    </>
  );
};

const CustomCardStyles = makeStyles(() => ({
  root: {
    border: lightBorder,
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
    zIndex: -1,
    fontSize: 20,
    padding: "3%",
    position: "absolute",
    bottom: "40%",
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

const MobileServiceCard = ({ service }) => {
  
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
      <Box style={{ display: "flex", borderBottom: "2px solid black" }}>
        <Box width="40%">
          <MobileCardCarousel
            itemData={itemData}
            navButtonAndFavIconVisibility={navButtonAndFavIconVisibility}
          />
        </Box>
        <Box width="50%" className={classes.detailBox} flexShrink={0}>
          <p>{service.serviceTitle}</p>
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

      <Box width="100%" p={1} m={1}>
        <Box display="flex">
          <Box width="100%">
            <Typography className={classes.textLight}>
              From
              <Typography component="span" className={classes.textBold}>
                ${service.basicPrice}
              </Typography>
            </Typography>
          </Box>
          <Box flexShrink={0}>
            <StarRoundedIcon style={{ color: colors.secondary }} />{" "}
          </Box>
          <Box flexShrink={0}>
            {service.ratings} ({service.numberOfRatings})
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

const carouselStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
  icon: {
    fontSize: 18,
  },
}));

const MobileCardCarousel = ({ itemData, navButtonAndFavIconVisibility }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = carouselStyles({ isDesktopOrLaptopOrTabletScreen });
  
  return (
    <Carousel
      NextIcon={<NavigateNextIcon className={classes.icon} />}
      PrevIcon={<NavigateBeforeIcon className={classes.icon} />}
      animation="slide"
      timeout={500}
      autoPlay={false}
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          color: "black",
          opacity: 1,
          visibility: navButtonAndFavIconVisibility,
          padding: "3%",
        },
      }}

      // OR
    >
      {itemData.map((item, index) => {
        return (
          <Box key={"img_" + index}>
            <img src={item.img} className={classes.image} />
          </Box>
        );
      })}
    </Carousel>
  );
};

const cardStyles = makeStyles(() => ({
  root: {
    border: lightBorder,
    minHeight: 280,
    maxWidth: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? 200 : 160,
    cursor: "pointer",
    position: "relative",
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
  serviceContainer: {
    border: lightBorder,
  },
}));

export const DesktopServiceCard = ({ service }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const [navButtonAndFavIconVisibility, setNavButtonAndFavIconVisibility] =
    useState("hidden");

  const [isFavIconSelected, setIsFavIconSelected] = useState(false);
  const classes = cardStyles({
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
        <DesktopCardCarousel
          itemData={itemData}
          navButtonAndFavIconVisibility={navButtonAndFavIconVisibility}
        />
      </Box>
      <Box className={classes.detailBox}>
        <Typography component="h6" className={classes.title}>
          {service.serviceTitle}
        </Typography>

        <Box display="flex" style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Box width="10%">
            <AvTimerRoundedIcon fontSize="small" />
          </Box>
          <Box flexShrink={0}>{service.deliveryDays} days Delivery</Box>
        </Box>
        <hr style={{ marginTop: "5%", marginBottom: "5%" }} />
        <Box display="flex">
          <Box width="100%">
            <Typography className={classes.textLight}>
              From{" "}
              <Typography component="span" className={classes.textBold}>
                ${service.basicPrice}
              </Typography>
            </Typography>
          </Box>
          <Box flexShrink={0}>
            <StarRoundedIcon style={{ color: colors.secondary }} />{" "}
          </Box>
          <Box flexShrink={0}>
            {service.ratings} ({service.numberOfRatings})
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

const DesktopCarouselStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
  icon: {
    fontSize: 18,
  },
}));

export const DesktopCardCarousel = ({
  itemData,
  navButtonAndFavIconVisibility,
}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = DesktopCarouselStyles({ isDesktopOrLaptopOrTabletScreen });

  return (
    <Carousel
      NextIcon={<NavigateNextIcon className={classes.icon} />}
      PrevIcon={<NavigateBeforeIcon className={classes.icon} />}
      animation="slide"
      timeout={500}
      autoPlay={false}
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          color: "black",
          opacity: 1,
          visibility: navButtonAndFavIconVisibility,
          padding: "3%",
        },
      }}

      // OR
    >
      {itemData.map((item, index) => {
        return (
          <Box key={"img_" + index}>
            <img src={item.img} className={classes.image} />
          </Box>
        );
      })}
    </Carousel>
  );
};
