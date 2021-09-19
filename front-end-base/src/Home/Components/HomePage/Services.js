import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DividerInservices } from "../HorizontalLine";
import { HomePageComponentsHeading } from "../../../CustomComponents/UI/Text/HomePageHeadings";
import colors from "../../../Theme/colors";
import ServiceCard from "./ServiceCard";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectAllServices } from "../Slices/HomePageSlices/ServicesSlices";
import { loadAllServices } from "../Slices/HomePageSlices/ServicesSlices";


const ServiceCardContainerForDesktop = ({ services_chunck, isLoading }) => {
  const colorArray = ["#F0F7F8", "#FAF8F6", "#F6F9F8", "#FDF6F4"];
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
      {!isLoading &&
        services_chunck.map((service, index) => (
          <Grid xs={10} sm={5} md={3} item key={service.serviceId}>
            <ServiceCard
              image={service.serviceImage}
              color={colorArray[index]}
              title={service.serviceName}
              description={service.serviceDescription}
            />
          </Grid>
        ))}
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
      {!isLoading && (
        <Grid xs={10} sm={5} item>
          <ServiceCard
            image={service.serviceImage}
            title={service.serviceName}
            description={service.serviceDescription}
            color={"#F0F7F8"}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default function Services() {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
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
          ? [
              { start: 0, end: 4 },
              { start: 4, end: 8 },
            ].map((item) => {
              return serviceItemOnDesktop(
                all_services.slice(item.start, item.end),
                isLoading
              );
            })
          : [0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
              return serviceItemOnMobile(all_services[item], isLoading);
            })}
      </Carousel>

      <DividerInservices />
    </Grid>
    //
    // </Grid>
  );
}

const serviceItemOnMobile = (service, isLoading) => {
  return (
    <ServiceCardContainerForMobile service={service} isLoading={isLoading} />
  );
};
const serviceItemOnDesktop = (services_chunck, isLoading) => {
  return (
    <ServiceCardContainerForDesktop
      services_chunck={services_chunck}
      isLoading={isLoading}
    />
  );
};
