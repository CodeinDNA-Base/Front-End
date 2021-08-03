import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "../Color/Colors.css";
import "./Styles/SideMainContainerStyles.css";
import Button from "@material-ui/core/Button";

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
	},
}));

const SideMainContainer = () => {
	const classes = useStyles();

	return (
		<div>
			<p className="mainMessage">Join Siba Overflow Today </p>

			<p className="mainMessageDetail">
				Register yourself today and get full time support and career advice from
				our experts
			</p>
			<Box style={{ marginTop: 20 }}>
				<Button
					variant="contained"
					classes={{
						root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
					}}
				>
					Join Now
				</Button>
				<Button
					variant="outlined"
					classes={{
						root: classes.btnOutlined, // class name, e.g. `classes-nesting-root-x`
					}}
				>
					Explore the place
				</Button>
			</Box>
		</div>
	);
};
export default SideMainContainer;
