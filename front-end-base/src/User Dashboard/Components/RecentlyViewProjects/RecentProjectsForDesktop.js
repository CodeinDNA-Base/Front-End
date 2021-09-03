import Grid from "@material-ui/core/Grid";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import Color from "color";

export const RecentProjectsForDesktop = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} style={{ marginTop: "2%" }}>
      <Grid xs={0} sm={1} md={1} item></Grid>
      <Grid xs={12} sm={10} md={10} item container spacing={4}>
        <Grid item xs={12} sm={9} md={6}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={9} md={6}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={9} md={6}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={9} md={6}>
          <CustomCard />
        </Grid>
      </Grid>
      <Grid xs={0} sm={1} md={1} item></Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
    backgroundColor: "#203f52",
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  media: {
    height: 200,
    width: "100%",
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "1.5rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "1rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = () => {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component={"img"}
          image={
            "https://images.unsplash.com/photo-1490971688337-f2c79913ea7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            Hello Card
          </Typography>
          <Typography className={classes.subtitle}>World Card</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
