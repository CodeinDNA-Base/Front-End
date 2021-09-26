import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DividerInservices } from "../HorizontalLine";
import { HomePageComponentsHeading } from "../../../CustomComponents/UI/Text/HomePageHeadings";
import colors from "../../../Theme/colors";
import ServiceCard from "./ServiceCard";
import { DesktopServicesCarousel } from "./DesktopServicesCarousel";
import { MobileServicesCarousel } from "./MobileServicesCarousel";

export default function Services() {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 576px)");

  return (
    <Grid container spacing={0}>
      <Grid container justifyContent="center" alignItems="center">
        <HomePageComponentsHeading
          title={"Services"}
          titleColor={colors.primary}
        />
        {/* <HeaderTitle title={"Services"} /> */}
      </Grid>

      {isDesktopOrLaptopOrTabletScreen ? (
        <DesktopServicesCarousel />
      ) : (
        <MobileServicesCarousel />
      )}
      <DividerInservices />
    </Grid>
  );
}
