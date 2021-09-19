import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { CustomIcon } from "../../../Theme/Icons/png/TechnologyIcons";
import { useMediaQuery } from "@material-ui/core";

//icons
import PersonPinIcon from "@material-ui/icons/PersonPin";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllTrendingTechnologies,
  loadTrendingTechnologies,
} from "../Slices/HomePageSlices/TrendingTechnologiesSlice";

export default function TechnologyIcons() {
  // redux
  const dispatch = useDispatch();
  const trending_technologies = useSelector(selectAllTrendingTechnologies);
  const { isLoading } = useSelector((state) => state.trendingTechnologies);
  const { hasError } = useSelector((state) => state.trendingTechnologies);

  useEffect(() => {
    dispatch(loadTrendingTechnologies());
    console.log(trending_technologies);
  }, [dispatch]);

  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  const handleClick = (technologyId) => { alert(`${technologyId} is clicked`)};
  return (
    <Grid
      md={10}
      xs={12}
      sm={12}
      container
      justifyContent="center"
      alignItems="center"
    >
      {!isLoading &&
        trending_technologies.map((technology) => (
          <Grid
            item
            md={2}
            sm={2}
            xs={3}
            container
            justifyContent="center"
            alignItems="center"
            key ={technology.technologyId}
          >
            <CustomIcon
              title={technology.technologytitle}
              icon={<PersonPinIcon style={{fontSize:isDesktopOrLaptopOrTabletScreen ? 60 : 40}} />}
              handleClick={()=>handleClick(technology.technologyId)}
            />
          </Grid>
        ))}
    </Grid>
  );
}
