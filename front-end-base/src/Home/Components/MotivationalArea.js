import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Slide from "@material-ui/core/Slide";
import Home from "@material-ui/icons/Home";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Styles/MotivationalAreaStyles.css";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	btnContained: {
		backgroundColor: "#1074e7",
		color: "white",
		marginLeft: "5%",
		marginBottom: "5%",
	},
}));

const MotivationalArea = () => {
	return (
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
					backgroundColor: "white",
					color: "black",
					opacity: 1,
				},
			}}

			// OR
		>
			<One />
			<Two />
			<Two />
		</Carousel>
	);
};

const One = () => {
	const classes = useStyles();
	return (
		<Grid container spacing={0}>
			<Grid
				item
				container
				justifyContent="flex-start"
				xs={7}
				sm={7}
				md={7}
				className="colorCodeOne"
			>
				<p className="mainMessageDetail">Grow with Us</p>

				<p className="mainMessage">Join Siba Overflow Today </p>
				<Button
					variant="contained"
					classes={{
						root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
					}}
				>
					See More Projects
				</Button>
			</Grid>
			<Grid item xs={5} sm={5} md={5}>
				<img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
			</Grid>
		</Grid>
	);
};

const Two = () => {
	const classes = useStyles();
	return (
		<Grid container spacing={0}>
			<Grid
				item
				container
				justifyContent="flex-start"
				xs={7}
				sm={7}
				md={7}
				className="colorCodeOne"
			>
				<p className="mainMessageDetail">Grow with Us</p>

				<p className="mainMessage">Join Siba Overflow Today </p>
				<Button
					variant="contained"
					classes={{
						root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
					}}
				>
					See More Projects
				</Button>
			</Grid>
			<Grid item xs={5} sm={5} md={5}>
				<img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
			</Grid>
		</Grid>
	);
};
export default MotivationalArea;
