import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function ReviewCard(props) {
	const useStyles = makeStyles({
		root: {
			marginLeft: "6%",
			marginRight: "6%",
			backgroundColor: props.color,
			textAlign: "center",
		},
		Img: {
			width: 100,
			height: 100,
			borderRadius: 50,
			marginLeft: "4%",
			marginTop: "5%",
		},
	});

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="140"
					image={props.img}
					classes={{ img: classes.Img }}
					title="Contemplative Reptile"
				/>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Newton Lg.
				</Button>
			</CardActions>
		</Card>
	);
}
