import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function ServiceCard({ image, color, title, description }) {
  const useStyles = makeStyles({
    root: {
      marginLeft: "6%",
      marginRight: "6%",
      backgroundColor: color,
      textAlign: "center",
    },
    Img: {
      width: 160,
      height: 160,
      borderRadius: 80,
      marginLeft: "20%",
      marginTop: "10%",
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          classes={{ img: classes.Img }}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
