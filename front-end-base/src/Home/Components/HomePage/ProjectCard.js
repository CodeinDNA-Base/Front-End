import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

export function CustomCard({ classes, image, title, subtitle }) {
  // handlers
  const hanldeProjectCardClick = () => {
    alert("go to zeeshan project page");
  };
  return (
    <CardActionArea
      className={classes.actionArea}
      onClick={hanldeProjectCardClick}
    >
      <Card className={classes.card}>
        <CardMedia
          classes={{ media: classes.media }}
          component={"img"}
          image={image}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
