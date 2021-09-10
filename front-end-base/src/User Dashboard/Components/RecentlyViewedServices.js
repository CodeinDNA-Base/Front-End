//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import { Box, Grid, useMediaQuery } from "@material-ui/core";

//Material-UI styles

//Icons

//Custom components
import { ServiceCard } from "./RecentlyViewedServices/ServiceCard";
import { MobileServiceCard } from "./RecentlyViewedServices/MobileServiceCard";
import { Link } from "react-router-dom";
//Theme and styles

//Resources

export const RecentlyViewedServices = () => {
  const isMdLgXl = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <h5>Recently Viewed Services</h5>
      {isMdLgXl ? (
        <Grid container>
          {Array(4)
            .fill()
            .map((index) => {
              return (
                              <Grid item md={6} lg={3} xl={3}>
                  <Link to="services" style={{textDecoration:"none"}}>
                  <Box mr={2} mt={2}>
                    <ServiceCard />
                  </Box>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      ) : (
        <Grid container>
          {Array(4)
            .fill()
            .map((index) => {
              return (
                <Grid item xs={12} sm={12}>
                  <Link to="services" style={{textDecoration:"none"}}>
                  <Box mt={2}>
                    <MobileServiceCard />
                  </Box>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      )}
    </>
  );
};
