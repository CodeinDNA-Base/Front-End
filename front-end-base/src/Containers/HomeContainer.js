import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { positions } from "@material-ui/system";
import LatestProjects from "../Home/Components/LatestProjects";
// import { compose, spacing, palette, breakpoints } from "@material-ui/system";
// import styled from "styled-components";
import Services from "../Home/Components/Services";
import MainContainer from "../Home/Components/MainContainer";
import ExploreArea from "../Home/Components/ExploreArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MotivationalArea from "../Home/Components/MotivationalArea";
import Header from "../Home/Components/Header";
import "./Color.css";
import UserReview from "../Home/Components/UserReviews";
import Technologies from "../Home/Components/Technologies";
import WhatWeOffer from "../Home/Components/WhatWeOffer";
import { useWindowDimensions } from "../Home/Components/WindowDimensions";
import { AppBar } from "@material-ui/core";
import DesktopFooter from "../CustomComponents/Layouts/Footer/DesktopFooter";
import MobileFooter from "../CustomComponents/Layouts/Footer/MobileFooter";
// const Box = styled.div`
// 	${breakpoints(compose(spacing, palette))}
// `;
function HomeContainer(props) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  // const { height, width } = useWindowDimensions();
  // const [packageContainerStickyNess, setPackageContainerStickyNess] =
  // 	useState("");
  // const [sticknessFlag, setSticknessFlag] = useState(true);
  // const [currentSelectedTabIndex, setCurrentSelectedTabIndex] = useState(0);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  // 	setScrollPosition(window.pageYOffset);
  // };

  // useEffect(() => {
  // 	if (scrollPosition > height * 0.9) {
  // 		console.log("S:" + scrollPosition);
  // 		setPackageContainerStickyNess("UnStickThePackageContainer");
  // 	} else {
  // 		setPackageContainerStickyNess("StickThePackageContainer");
  // 	}
  // }, [scrollPosition > height * 0.9]);

  // const handelTabIndex = (event, index = 0) => {
  // 	setCurrentSelectedTabIndex(index);
  // };

  // useEffect(() => {
  // 	window.addEventListener("scroll", handleScroll, { passive: true });
  // 	return () => {
  // 		window.removeEventListener("scroll", handleScroll);
  // 	};
  // }, []);

  return (
    <div style={{ flexGrow: 1 }}>
      {/* Header
			<Grid item xs={12}>
				<AppBar style={{ backgroundColor: "transparent" }}>
					<Header
						handelTabIndex={handelTabIndex}
						packageContainerStickyNess={packageContainerStickyNess}
					/>
				</AppBar>
			</Grid> */}

      {/* MainContainer */}
      {/* <Grid
				container
				spacing={0}
				style={{ backgroundColor: "#011c38", paddingTop: "5%" }}
			>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<MainContainer />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */}

      {/* Services*/}
      {/* <Grid container spacing={0} style={{ paddingTop: "3%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<Services />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */}

      {/* Technologies */}
      {/* <Grid container spacing={0} style={{ paddingTop: "3%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<Technologies />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */}

      {/* projects */}
      {/* <Grid container style={{ marginTop: "7%" }} className="colorCodeTwo">
				<Grid xs={0} sm={1} md={2} item></Grid>
				<Grid item xs={12} sm={10} md={8}>
					<LatestProjects />
				</Grid>
				<Grid xs={0} sm={1} md={2} item></Grid>
			</Grid>

			<Grid container spacing={0} style={{ paddingTop: "3%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<WhatWeOffer />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */}

      {/*User reviews */}
      {/* <Grid container style={{ marginTop: "1%" }} >
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<UserReview />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */}

      {/* explore
			<Grid container style={{ marginTop: "3%" }} className="colorCodeTwo">
				<Grid xs={1} sm={2} md={3} item></Grid>
				<Grid item xs={10} sm={8} md={6}>
					<ExploreArea />
				</Grid>
				<Grid xs={1} sm={2} md={3} item></Grid>
			</Grid> */}

      {/* extra info area */}
      {/* <Grid container spacing={0} style={{ marginTop: "10%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<MotivationalArea />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */}

      {/* footer */}
      <Grid container style={{ marginTop: "5%" }} spacing={0}>
        <Grid item md={12} xs={12} sm={12}>
          {isDesktopOrLaptopOrTabletScreen ? (
            <DesktopFooter />
          ) : (
            <MobileFooter />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeContainer;
