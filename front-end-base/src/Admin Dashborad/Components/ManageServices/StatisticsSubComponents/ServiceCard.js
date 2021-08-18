import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function ServiceCard(props) {
	const useStyles = makeStyles({
		root: {
			marginLeft: "6%",
			marginRight: "6%",
			backgroundColor: props.color,
			textAlign: "center",
		},
		digit: {
			width: 150,
			height: 160,
			borderRadius: 80,
			marginLeft: "1%",
			marginTop: "10%",
			fontSize:70,
			backgroundColor:'#d43e33',
			paddingTop:"25%"
		},
	});

	const classes = useStyles();

	return (
		
		<Card className={classes.root}>
			<CardActionArea>
				
				<CardContent>
					<div className={classes.digit}>
							50
					</div>
					<Typography gutterBottom variant="h5" component="h2">
						Total Clicks
					</Typography>
					
				</CardContent>
			</CardActionArea>
			
		</Card>
	);
}
