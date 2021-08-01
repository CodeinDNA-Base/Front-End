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
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import { Icon } from "@material-ui/core";
const ExploreArea = (props) => {
	return (
		<div className="highlighter">
			<Grid container spacing={0}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid xs={12} sm={10} md={10} item style={{ textAlign: "center" }}>
					<h1>Explore Our Market</h1>
					<p>
						Get Your Project done on time and in reasonable budjet in various
						Categories options
					</p>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>

			<Grid container spacing={0} style={{ marginTop: "4%" }}>
				<Grid xs={1} sm={2} md={1} item></Grid>
				<Grid xs={10} sm={8} md={10} item container spacing={4}>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<BorderColorIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Content Writting</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<AddToHomeScreenIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Digital Marketing</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<LocalCafeIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Life Style</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<LocalCafeIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Life Style</p>
					</Grid>
					{/* <Grid item xs={0} sm={4} md={3}></Grid> */}
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<LocalCafeIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Life Style</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<AddToHomeScreenIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Digital Marketing</p>
					</Grid>
					<Grid item xs={12} sm={9} md={3}></Grid>
				</Grid>
				<Grid xs={1} sm={2} md={1} item></Grid>
			</Grid>
		</div>
	);
};
export default ExploreArea;

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
