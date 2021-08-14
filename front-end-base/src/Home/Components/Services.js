import React, { useEffect, useState } from "react";
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
import Slide from "@material-ui/core/Slide";
import Home from "@material-ui/icons/Home";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeaderTitle from "./HeaderTitle";
import { DividerInservices } from "./HorizontalLine";
import ServiceCard from "./ServiceCard";
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    overflow: "hidden",
    //backgroundColor: theme.palette.background.paper,
  },

  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: "10%",
    paddingTop: "10%",
    color: "rgba(0, 0, 0, 0.87)",
  },

  titleBar: {
    backgroundColor: "#f8f9fa",
    height: "30%",
  },
  RoundBorder: {
    borderRadius: 7,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0)",
  },
  listItems: {},
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

const NumberToArray = (number) => {
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }
  return tempArray;
};

const ServiceCardContainer = ({ cardsPerItemOfCarousel }) => {
  const [totalItemsReturned, setTotalItemsReturned] = useState([0, 1, 2, 3]);
  useEffect(() => {
    console.log("in service card container ");
    console.log(cardsPerItemOfCarousel);

    setTotalItemsReturned(NumberToArray(cardsPerItemOfCarousel));
  }, []);
  return (
    <>
      {totalItemsReturned.map((item) => {
        return (
          <Grid xs={10} sm={5} md={3} item>
            <ServiceCard img={itemData[0].img} color={"#F0F7F8"} />
          </Grid>
        );
      })}
    </>
  );
};

export default function Services() {
  const classes = useStyles();
  const serviceCardColors = ["#F0F7F8", "#FAF8F6", "#F6F9F8", "#FDF6F4"];
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const cardsInCarousel = isDesktopOrLaptopOrTabletScreen ? 2 : 8;
  const [cardArrayInCarousel, setCardArrayInCarousel] = useState([0, 1]);
  const [cardsPerItemOfCarousel, setCardsPerItemOfCarousel] = useState(4);
  useEffect(() => {
    setCardArrayInCarousel(() => NumberToArray(cardsInCarousel));
    if (isDesktopOrLaptopOrTabletScreen) setCardsPerItemOfCarousel(4);
    else setCardsPerItemOfCarousel(1);
    console.log(cardArrayInCarousel);
    console.log(cardsPerItemOfCarousel);
  }, [isDesktopOrLaptopOrTabletScreen]);

  return (
    <Grid container spacing={0}>
      <Grid
        xs={12}
        sm={12}
        md={12}
        item
        justifyContent="center"
        alignItems="center"
      >
        <HeaderTitle title={"Services"} />
      </Grid>
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
            backgroundColor: "black",
            color: "white",
            opacity: 0.8,
          },
        }}

        // OR
      >
        {cardArrayInCarousel.map((item) => {
          return (
            <Grid
              xs={12}
              sm={12}
              md={12}
              item
              container
              justifyContent="center"
              alignItems="center"
            >
              <ServiceCardContainer
                cardsPerItemOfCarousel={cardsPerItemOfCarousel}
              />
            </Grid>
          );
        })}
      </Carousel>
      <DividerInservices />
    </Grid>
    //
    // </Grid>
  );
}
