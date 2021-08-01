import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import "../Color/Colors.css";
import { Container } from "@material-ui/core";
import "./Styles/LatestProjectStyles.css";
import ProjectCard from "./ProjectCard";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const LatestProjects = (props) => {
	// const itemData = [
	// 	{
	// 		img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
	// 		title: "Image",
	// 		author: "author",
	// 	},
	// 	{
	// 		img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
	// 		title: "Image",
	// 		author: "author",
	// 	},

	// 	{
	// 		img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
	// 		title: "Image",
	// 		author: "author",
	// 	},
	// 	{
	// 		img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
	// 		title: "Image",
	// 		author: "author",
	// 	},
	// 	{
	// 		img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
	// 		title: "Image",
	// 		author: "author",
	// 	},
	// ];

	return (
		<div className="highlighter">
			<Grid container spacing={0}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid xs={12} sm={10} md={10} item style={{ textAlign: "center" }}>
					<h1>Latest Projects</h1>
					<p>
						Get projects done using cutting edge technologies like react, spring
						boot and more...!
					</p>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>

			<Grid container spacing={0} style={{ marginTop: "2%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid xs={12} sm={10} md={10} item container spacing={4}>
					<Grid item xs={12} sm={9} md={6}>
						<ProjectCard
							img={
								"https://images.unsplash.com/photo-1505357957917-ed2e269a1b47?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							}
						/>
					</Grid>
					<Grid item xs={12} sm={9} md={6}>
						<ProjectCard
							img={"https://material-ui.com/static/images/themes-light.jpg"}
						/>
					</Grid>
					<Grid item xs={12} sm={9} md={6}>
						<ProjectCard
							img={
								"https://images.unsplash.com/photo-1625422764310-eb18fcf1dbfe?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							}
						/>
					</Grid>
					<Grid item xs={12} sm={9} md={6}>
						<ProjectCard
							img={
								"https://images.unsplash.com/photo-1626622084464-710e90492d63?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							}
						/>
					</Grid>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>

			<Grid container spacing={0} style={{ marginTop: "4%" }}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid xs={12} sm={10} md={10} item style={{ textAlign: "center" }}>
					<Button variant="outlined" color="primary">
						See More Projects
					</Button>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>
		</div>
	);
};
export default LatestProjects;

{
	/* <Grid container spacing={0}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid xs={12} sm={10} md={10} item container>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */
}
