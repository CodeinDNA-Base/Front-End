// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Box } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const CustomCardCarouselStyles = makeStyles(() => ({
  image: {
    maxWidth: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? 260 : 160,
  },
  icon: {
    fontSize: 18,
  },
}));

export const CustomCardCarousel = ({
  subServiceThumbnails,
  navButtonAndFavIconVisibility,
}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = CustomCardCarouselStyles({ isDesktopOrLaptopOrTabletScreen });
  return (
    // <Carousel
    //       NextIcon={<NavigateNextIcon className={classes.icon} />}
    //       PrevIcon={<NavigateBeforeIcon className={classes.icon}/>}
    //       animation="slide"
    //       timeout={500}
    //       autoPlay={false}
    //       indicatorIconButtonProps={{
    //         style: {
    //           display: "none",
    //         },
    //       }}
    //       navButtonsProps={{
    //         style: {
    //           backgroundColor: "white",
    //           color: "black",
    //           opacity: 1,
    //           visibility: navButtonAndFavIconVisibility,
    //           padding: "3%",
    //         },
    //       }}

    //       // OR
    //     >
    <Carousel
      axis="horizontal"
      interval={4000}
      showArrows={navButtonAndFavIconVisibility === "visible" ? true : false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      {subServiceThumbnails.map((thumbnail, index) => {
        return (
          <Box key={"img_" + index}>
            <img src={thumbnail} className={classes.image} />
          </Box>
        );
      })}
    </Carousel>
  );
};
