import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Box } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const CustomCardCarouselStyles = makeStyles(() => ({
    image: {
     width:'120%'
    },
    icon:{
        fontSize:18
    }
  }));

export const MobileCustomCardCarousel=({subServiceThumbnails,navButtonAndFavIconVisibility})=>{
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
    const classes=CustomCardCarouselStyles({isDesktopOrLaptopOrTabletScreen});
return(
    <Carousel
          NextIcon={<NavigateNextIcon className={classes.icon} />}
          PrevIcon={<NavigateBeforeIcon className={classes.icon}/>}
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
            {subServiceThumbnails.map((thumbnail,index)=>{
                return( <Box key={'img_'+index}>
                    <img src={thumbnail} className={classes.image} />
                  </Box>)
            })}
         
        </Carousel>
)

}