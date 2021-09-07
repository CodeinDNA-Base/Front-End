import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DividerInservices } from "../HorizontalLine";
import { HomePageComponentsHeading } from "../../../CustomComponents/UI/Text/HomePageHeadings";
import colors from "../../../Theme/colors";
import ServiceCard from './ServiceCard'
// dumpy data
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

const ServiceCardContainerForDesktop = () => {
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
      <Grid xs={10} sm={5} md={3} item>
        <ServiceCard img={itemData[0].img} color={"#F0F7F8"} />
      </Grid>{" "}
      <Grid xs={10} sm={5} md={3} item>
        <ServiceCard img={itemData[1].img} color={"#FAF8F6"} />
      </Grid>{" "}
      <Grid xs={10} sm={5} md={3} item>
        <ServiceCard img={itemData[0].img} color={"#F6F9F8"} />
      </Grid>{" "}
      <Grid xs={10} sm={5} md={3} item>
        <ServiceCard img={itemData[1].img} color={"#FDF6F4"} />
      </Grid>
    </Grid>
  );
};

const ServiceCardContainerForMobile = () => {
  return (
    <Grid
      xs={12}
      sm={12}
      item
      container
      justifyContent="center"
      alignItems="center"
    >
      {/* <Grid xs={1} sm={1} item></Grid> */}
      <Grid xs={10} sm={5} item>
        <ServiceCard img={itemData[0].img} color={"#F0F7F8"} />
      </Grid>{" "}
    </Grid>
  );
};

export default function Services() {
  const serviceCardColors = ["#F0F7F8", "#FAF8F6", "#F6F9F8", "#FDF6F4"];
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

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
        <HomePageComponentsHeading
          title={"Services"}
          titleColor={colors.primary}
        />
        {/* <HeaderTitle title={"Services"} /> */}
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
        {isDesktopOrLaptopOrTabletScreen
          ? [1, 2].map(() => serviceItemOnDesktop())
          : [1, 2, 3, 4, 5, 6, 7, 8].map(() => serviceItemOnMobile())}
      </Carousel>

      <DividerInservices />
    </Grid>
    //
    // </Grid>
  );
}

const serviceItemOnMobile = () => {
  return <ServiceCardContainerForMobile />;
};
const serviceItemOnDesktop = () => {
  return <ServiceCardContainerForDesktop />;
};
