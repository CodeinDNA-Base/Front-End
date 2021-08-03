import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SearchCard from "./SearchCard";
import SideMainContainer from "./SideMainContainer";
const MainContainer = () => {
	return (
		<Grid container spacing={0} style={{ marginTop: "5%", marginBottom: "5%" }}>
			<Grid item md={6}>
				<SideMainContainer />
			</Grid>
			<Grid item md={2}></Grid>
			<Grid item md={4}>
				<SearchCard />
			</Grid>
		</Grid>
	);
};
export default MainContainer;
