import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { CustomCard } from "../../../CustomComponents/UI/Support/CustomCard";
import { HomePageComponentsHeading } from "../../../CustomComponents/UI/Text/HomePageHeadings";
import { CategoryChips } from "../../../CustomComponents/UI/Support/CategoryChips";
import { SubCategoriesToChips } from "./SubCategoriesToChips";
import { HowItWorksAreaInServices } from "./HowItWorksAreaInServices";
import colors,{ColorGradient} from "../../../Theme/colors";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { DividerInProjects } from "../HorizontalLine";
import { useMediaQuery } from "@material-ui/core";
import {MobileCustomCard} from '../../../CustomComponents/UI/Support/MobileCustomCard'
import { FilterOptions } from "./FilterOptions";
export const ServicePage = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const [selectedCategoryChipId, setSelectedCategoryChipId] = useState("id_0");
  return (
    <Grid container spacing={6} justifyContent="center" >
      <Grid container justifyContent="center" alignItems='center' style={{backgroundImage:ColorGradient.lightSkyBlue}}>
      <HomePageComponentsHeading title='Advanced Search' />
      <Grid container justifyContent="center" alignItems='center'>
      < FilterOptions />
      </Grid>
      </Grid>
      <DividerInProjects />
      <HomePageComponentsHeading
        title="Get inspired by the React projects"
        margin={"0% 0% 2% 0%"}
      />

      <Grid item>
        {isDesktopOrLaptopOrTabletScreen ? (
          <CustomCard />
        ) : (
          <MobileCustomCard />
        )}
      </Grid>
      <Grid item>
        {isDesktopOrLaptopOrTabletScreen ? (
          <CustomCard />
        ) : (
          <MobileCustomCard />
        )}
      </Grid>
      <Grid item>
        {isDesktopOrLaptopOrTabletScreen ? (
          <CustomCard />
        ) : (
          <MobileCustomCard />
        )}
      </Grid>
      <Grid item>
        {isDesktopOrLaptopOrTabletScreen ? (
          <CustomCard />
        ) : (
          <MobileCustomCard />
        )}
      </Grid>
      <Grid item>
        {isDesktopOrLaptopOrTabletScreen ? (
          <CustomCard />
        ) : (
          <MobileCustomCard />
        )}
      </Grid>
      <Grid item>
        {isDesktopOrLaptopOrTabletScreen ? (
          <CustomCard />
        ) : (
          <MobileCustomCard />
        )}
      </Grid>
      <Grid item>{isDesktopOrLaptopOrTabletScreen && <CustomCard />}</Grid>
      <Grid item>{isDesktopOrLaptopOrTabletScreen && <CustomCard />}</Grid>
      <Grid item>{isDesktopOrLaptopOrTabletScreen && <CustomCard />}</Grid>
      <Grid item>{isDesktopOrLaptopOrTabletScreen && <CustomCard />}</Grid>
      <Grid item>{isDesktopOrLaptopOrTabletScreen && <CustomCard />}</Grid>
      <Grid item>{isDesktopOrLaptopOrTabletScreen && <CustomCard />}</Grid>

      <Grid container justifyContent="flex-end">
        <Box p={isDesktopOrLaptopOrTabletScreen? 2 :0} mr={6}>
          <Link>See More Projects</Link>
        </Box>
      </Grid>
      <DividerInProjects />
      <HomePageComponentsHeading title="How it Works" margin={"0% 0% 2% 0%"} />

      <HowItWorksAreaInServices />
      <DividerInProjects />
      <Grid container justifyContent="center" alignItems='center' style={{backgroundImage:ColorGradient.lightSkyBlue}}>
      <HomePageComponentsHeading
        title="Browse more categories"
        margin={"0% 0% 2% 0%"}
      />
      <Grid container>
        <Grid md={1} xs={1} sm={1} item></Grid>
        <Grid md={10} xs={10} sm={10} item container>
          <CategoryChips
            label="Airtifical intelligence"
            margin={"0% 1% 2% 0%"}
            id="id_0"
            color={colors.white}
            bgColor={colors.primary}
          />
          <CategoryChips
            label="Development & IT"
            margin={"0% 1% 2% 0%"}
            id="id_1"
          />
          <CategoryChips
            label="Writting and Translation"
            margin={"0% 1% 2% 0%"}
            id="id_2"
          />
          <CategoryChips
            label="Data & Marketing"
            margin={"0% 1% 2% 0%"}
            id="id_3"
          />
          <CategoryChips
            label="Graphic designing"
            margin={"0% 1% 2% 0%"}
            id="id_4"
          />
        </Grid>
        <Grid md={1} xs={1} sm={1} item></Grid>
      </Grid>

</Grid>
      <SubCategoriesToChips selectedCategoryChipId={selectedCategoryChipId} />
    </Grid>
  );
};

export default ServicePage;
