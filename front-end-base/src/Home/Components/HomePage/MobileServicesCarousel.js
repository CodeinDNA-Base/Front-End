import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ServiceCard from "./ServiceCard";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectAllServices } from "../Slices/HomePageSlices/ServicesSlices";
import { loadAllServices } from "../Slices/HomePageSlices/ServicesSlices";

export const MobileServicesCarousel = () => {
  const { isLoading } = useSelector((state) => state.allServices);
  const { hasError } = useSelector((state) => state.allServices);
  const all_services = useSelector(selectAllServices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllServices());
    console.log("in services");
    console.log(all_services);
  }, [dispatch]);

  return (
    <Grid container justifyContent="center" alignItems="center">
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
          style: {
            backgroundColor: "black",
            color: "white",
            opacity: 0.8,
          },
        }}

        // OR
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          return serviceItemOnMobile(all_services[item], isLoading);
        })}
      </Carousel>
    </Grid>
  );
};

const ServiceCardContainerForMobile = ({ service, isLoading }) => {
  return (
    <Grid
      xs={12}
      sm={12}
      item
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={10} sm={5} item>
        <ServiceCard
          service={service}
          color={"#F0F7F8"}
          isLoading={isLoading}
        />
      </Grid>{" "}
    </Grid>
  );
};
const serviceItemOnMobile = (service, isLoading) => {
  return (
    <ServiceCardContainerForMobile service={service} isLoading={isLoading} />
  );
};
