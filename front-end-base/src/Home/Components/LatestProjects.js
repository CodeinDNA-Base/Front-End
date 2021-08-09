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
import { DividerInservices } from "./HorizontalLine";
import { makeStyles } from "@material-ui/core";
import HeaderTitle from "./HeaderTitle";
const useStyles = makeStyles((theme) => ({
	btnOutlined: {
		color: "white",
		borderColor: "white",
		borderRadius: 20,
		marginLeft: 10,
	},
	btnContained: {
		backgroundColor: " #ea6645",
		color: "white",
		borderRadius: 20,
		marginLeft: 10,
		marginTop: "5%",
	},
}));

const LatestProjects = (props) => {
	const classes = useStyles();
	return (
		<div className="highlighter">
			<HeaderTitle
				title={"Projects"}
				description={`Get projects done using cutting edge technologies like react, spring boot and more...!`}
			/>

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
					<Button
						variant="contained"
						classes={{
							root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
						}}
					>
						See More Projects
					</Button>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>
			<DividerInservices />
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
