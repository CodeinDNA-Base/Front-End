import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Stars from "./Stars";
import Star from "@material-ui/icons/Star";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		backgroundColor: "#FAF8F6",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},

	cover: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginLeft: "5%",
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
	media: {
		display: "flex",
		alignSelf: "center",
		flex: "1 0 auto",
	},
}));

export default function ReviewCard({ img }) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<div className={classes.media}>
				<CardMedia className={classes.cover} image={img} title="user-Img" />
			</div>

			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography variant="subtitle1" color="textSecondary">
						In publishing and graphic design, Lorem ipsum is a placeholder text
						commonly used to demonstrate the visual form of a document.
					</Typography>
					<Typography component="h5" variant="h5" style={{ marginTop: "3%" }}>
						John Miller
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						London
					</Typography>
					<Stars fontSize={"small"} noOfStars={5} color="primary" />
				</CardContent>
			</div>
		</Card>
	);
}
