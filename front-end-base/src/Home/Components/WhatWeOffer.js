import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Offer from "./Offer";
import HeaderTitle from "./HeaderTitle";
import { DividerInProjects } from "./HorizontalLine";
import { useMediaQuery } from "@material-ui/core";
const WhatWeOffer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
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
      <DividerInProjects />
      <HeaderTitle title="Need something done ?" />
      <Grid
        xs={12}
        sm={12}
        md={12}
        item
        container
        justifyContent="center"
        alignItems="center"
        spacing={isDesktopOrLaptopOrTabletScreen ? 4 : 0}
        style={{ marginBottom: "3%" }}
      >
        <Grid xs={10} sm={5} md={3} item>
          <Offer title="Post a job" />
        </Grid>

        <Grid xs={10} sm={5} md={3} item>
          <Offer title="Choose Freelancer" />
        </Grid>
        <Grid xs={10} sm={5} md={3} item>
          <Offer title="Pay Safely" />
        </Grid>
        <Grid xs={10} sm={5} md={3} item>
          <Offer title="We are here to help" />
        </Grid>
      </Grid>
      <DividerInProjects />
    </Grid>
  );
};
export default WhatWeOffer;
