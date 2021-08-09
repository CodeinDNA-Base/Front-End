import React, { useState } from "react";
import Footer from "../Home/Components/Footer";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { positions } from "@material-ui/system";
import LatestProjects from "../Home/Components/LatestProjects";
// import { compose, spacing, palette, breakpoints } from "@material-ui/system";
// import styled from "styled-components";
import Services from "../Home/Components/Services";
import MainContainer from "../Home/Components/MainContainer";
import ExploreArea from "../Home/Components/ExploreArea";
import MobileFooter from "../Home/Components/MobileFooter";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MotivationalArea from "../Home/Components/MotivationalArea";
import Header from "../Home/Components/Header";
import "./Color.css";
import UserReview from "../Home/Components/UserReviews";
import Technologies from "../Home/Components/Technologies";
// const Box = styled.div`
// 	${breakpoints(compose(spacing, palette))}
// `;
function HomeContainer(props) {
	const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

	return (
		<div style={{ flexGrow: 1 }}>
			{/* Header */}
			<Grid container spacing={0}>
				<Grid item xs={12} sm={12} md={12}>
					<Header />
				</Grid>
			</Grid>

			{/* MainContainer */}
			<Grid
				container
				spacing={0}
				style={{ backgroundColor: "#011c38", paddingTop: "5%" }}
			>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<MainContainer />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>

			{/* Services*/}
			<Grid container spacing={0} style={{ paddingTop: "3%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<Services />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>

			{/* Technologies */}
			<Grid
				container
				spacing={0}
				style={{ paddingTop: "3%" }}
				className="colorCodeTwo"
			>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<Technologies />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>

			{/* projects */}
			<Grid container style={{ marginTop: "3%" }} className="colorCodeTwo">
				<Grid xs={0} sm={1} md={2} item></Grid>
				<Grid item xs={12} sm={10} md={8}>
					<LatestProjects />
				</Grid>
				<Grid xs={0} sm={1} md={2} item></Grid>
			</Grid>

			{/*User reviews */}
			<Grid container spacing={0} style={{ paddingTop: "3%" }}>
				<Grid xs={0} sm={1} md={0} item></Grid>
				<Grid item xs={12} sm={10} md={12}>
					<UserReview />
				</Grid>
				<Grid xs={0} sm={1} md={0} item></Grid>
			</Grid>

			{/* explore */}
			<Grid container style={{ marginTop: "3%" }} className="colorCodeTwo">
				<Grid xs={1} sm={2} md={3} item></Grid>
				<Grid item xs={10} sm={8} md={6}>
					<ExploreArea />
				</Grid>
				<Grid xs={1} sm={2} md={3} item></Grid>
			</Grid>

			{/* extra info area */}
			<Grid container spacing={0} style={{ marginTop: "5%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid item xs={12} sm={10} md={10}>
					<MotivationalArea />
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
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
