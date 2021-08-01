import React, { useState } from "react";
import Footer from "../Home/Components/Footer";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { positions } from "@material-ui/system";
import LatestProjects from "../Home/Components/LatestProjects";
// import { compose, spacing, palette, breakpoints } from "@material-ui/system";
// import styled from "styled-components";
import Categories from "../Home/Components/Categories";
import Navbar from "../Home/Components/PrimaryNavbar";
import SecondaryNavBar from "../Home/Components/SecondaryNavBar";
import MainContainer from "../Home/Components/MainContainer";
import ExploreArea from "../Home/Components/ExploreArea";
import MobileFooter from "../Home/Components/MobileFooter";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// const Box = styled.div`
// 	${breakpoints(compose(spacing, palette))}
// `;
function HomeContainer(props) {
	const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

	return (
		<div style={{ flexGrow: 1 }}>
			{/* navbar */}
			<Grid container spacing={0}>
				<Grid item xs={12} sm={12} md={12}>
					<Navbar />
				</Grid>
			</Grid>

			{/* secondary navbar */}
			<Grid container spacing={0}>
				<Grid item xs={12} sm={12} md={12}>
					<SecondaryNavBar />
				</Grid>
			</Grid>

			{/* MainContainer */}
			<Grid container spacing={0} style={{ marginTop: "5%" }}>
				<Grid xs={0} sm={1} md={2} item></Grid>
				<Grid item xs={12} sm={10} md={8}>
					<MainContainer />
				</Grid>
				<Grid xs={0} sm={1} md={2} item></Grid>
			</Grid>

			{/* Categories*/}
			<Grid container style={{ marginTop: "5%" }}>
				<Categories />
			</Grid>

			{/* projects */}
			<Grid container style={{ marginTop: "5%" }}>
				<Grid xs={0} sm={1} md={2} item></Grid>
				<Grid item xs={12} sm={10} md={8}>
					<LatestProjects />
				</Grid>
				<Grid xs={0} sm={1} md={2} item></Grid>
			</Grid>

			{/* explore */}
			<Grid container style={{ marginTop: "5%" }}>
				<Grid xs={1} sm={2} md={3} item></Grid>
				<Grid item xs={10} sm={8} md={6}>
					<ExploreArea />
				</Grid>
				<Grid xs={1} sm={2} md={3} item></Grid>
			</Grid>

			{/* MainContainer */}
			<Grid container spacing={0} style={{ marginTop: "5%" }}>
				<Grid xs={0} sm={1} md={2} item></Grid>
				<Grid item xs={12} sm={10} md={8}>
					<MainContainer />
				</Grid>
				<Grid xs={0} sm={1} md={2} item></Grid>
			</Grid>

			{/* footer */}
			<Grid container style={{ marginTop: "5%" }} spacing={0}>
				<Grid item md={12} xs={12} sm={12}>
					{isDesktopOrLaptopOrTabletScreen ? <Footer /> : <MobileFooter />}
				</Grid>
			</Grid>
		</div>
	);
}

export default HomeContainer;
