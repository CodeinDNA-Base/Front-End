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
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	imageList: {
		flexWrap: "nowrap",
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: "translateZ(0)",
	},
	title: {
		fontSize: 30,
		paddingBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		paddingBottom: 10,
	},
	titleBar: {
		background:
			"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
	},
	RoundBorder: {
		borderRadius: 7,
	},
}));

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
		title: "Image",
		author: "author",
	},
	{
		img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
		title: "Image",
		author: "author",
	},

	{
		img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
		title: "Image",
		author: "author",
	},
	{
		img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
		title: "Image",
		author: "author",
	},
	{
		img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
		title: "Image",
		author: "author",
	},
];

function ImgList() {
	const classes = useStyles();
	const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
	return (
		<ImageList
			className={classes.imageList}
			cols={isDesktopOrLaptopOrTabletScreen ? 5 : 1.5}
			gap={30}
			rowHeight={300}
		>
			{itemData.map((item) => (
				<ImageListItem
					key={item.img}
					classes={{
						item: classes.RoundBorder,
					}}
				>
					<img src={item.img} alt={item.title} />
					<ImageListItemBar
						title={item.title}
						subtitle={<span>by: Nigeeta</span>}
						classes={{
							root: classes.titleBar,
							title: classes.title,
							subtitle: classes.subtitle,
						}}
						actionIcon={
							<IconButton aria-label={`star ${item.title}`}>
								<StarBorderIcon className={classes.title} />
							</IconButton>
						}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

export default function Categories() {
	const classes = useStyles();

	return (
		<Grid container spacing={0}>
			<Grid xs={0} sm={1} md={1} item></Grid>
			<Grid xs={12} sm={10} md={10} item container>
				<div className={classes.root}>
					<Header />
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
						<ImgList />
						<ImgList />
					</Carousel>
				</div>
			</Grid>
			<Grid xs={0} sm={1} md={1} item></Grid>
		</Grid>
	);
}

function Header() {
	return (
		<Grid container spacing={0} style={{ marginBottom: "2%" }}>
			<Grid xs={0} sm={1} md={1} item></Grid>
			<Grid xs={12} sm={10} md={10} item style={{ textAlign: "center" }}>
				<h1>Categories</h1>
				{/* <p>
						Get projects done using cutting edge technologies like react, spring
						boot and more...!
					</p> */}
			</Grid>
			<Grid xs={0} sm={1} md={1} item></Grid>
		</Grid>
	);
}
