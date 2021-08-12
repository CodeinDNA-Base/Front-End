import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import { Button } from "@material-ui/core";
export default function ProjectCard(props) {
	const [opacity, setOpacity] = useState(1);
	const useStyles = makeStyles((theme) => ({
		root: {
			maxWidth: "auto",
			boxShadow:
				"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
			opacity: opacity,
			transition: "all 0.3s",
			transform: opacity !== 1 && "scale(1.1) rotate(2deg)",
		},

		avatar: {
			backgroundColor: red[500],
		},
		cardAction: {
			position: "absolute",
			alignSelf: "center",
		},
	}));
	const classes = useStyles();
	const handleMouseEnterClick = () => {
		setOpacity(0.7);
	};
	const handleMouseLeaveClick = () => {
		setOpacity(1);
	};

	return (
		<Card
			className={classes.root}
			onMouseEnter={() => handleMouseEnterClick()}
			onMouseLeave={() => handleMouseLeaveClick()}
		>
			<CardMedia
				className={classes.media}
				image={props.img}
				title="Paella dish"
			/>
			{/* <CardActions classes={{ root: classes.cardAction }}>
				<Button variant="outlined" color="secondary">
					Secondary
				</Button>
			</CardActions> */}
			<CardHeader
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
		</Card>
	);
}
