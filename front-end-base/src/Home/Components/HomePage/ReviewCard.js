import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Stars from "../Stars";
import { useMediaQuery } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#FAF8F6",
    cursor:'pointer'
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
    alignSelf: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen && "center",
    flex: "1 0 auto",
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "0" : "10%",
  },
}));


// review card
export default function ReviewCard({
  firstName,
  image,
  lastName,
  reviewRating,
  country,
  reviewText,
}) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const handleReviewCardClick=()=>{
    alert('card is clicked')
  }

  return (
    <Card className={classes.root} onClick={handleReviewCardClick}>
      <div className={classes.media}>
        <CardMedia className={classes.cover} image={image} title="user-Image" />
      </div>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            {reviewText}
          </Typography>
          <Typography component="h5" variant="h5" style={{ marginTop: "3%" }}>
            {firstName + " " + lastName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {country}
          </Typography>
          <Stars fontSize={"small"} noOfStars={reviewRating} color="primary" />
        </CardContent>
      </div>
    </Card>
  );
}
