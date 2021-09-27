//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI
import Grid from "@material-ui/core/Grid";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";

import Color from "color";
import { Link } from "react-router-dom";

//icons

//Styles and theme

//resources

//Redux
import { useDispatch, useSelector } from "react-redux";
//action creators

//selectors
import {
  selectRecentProjects,
  selectRecentProjectIsLoading,
  selectRecentProjectHasError,
} from "../../Redux/slices/recentlyViewedProjectsSlice";

//thunks
import { fetchRecentlyViewedProjects } from "../../Redux/slices/recentlyViewedProjectsSlice";

import { Rating } from "@material-ui/lab";
import { lightBorder } from "../../../Theme/borders";
import { CardActions } from "@mui/material";

const useStyles = makeStyles(() => ({
  card: ({ color }) => ({
    maxWidth: 185,
    minHeight: 235,
    // borderRadius: 16,
    border: lightBorder,
    "&:hover": {
      boxShadow: `0 6px 4px 0 ${Color("#fff")
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
    backgroundColor: "#fff",
  }),
  media: {
    width: "100%",
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "12px",
    color: "#000",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#000",
    opacity: 0.87,
    marginTop: "1rem",
    fontWeight: 800,
    fontSize: 14,
  },
  linkStyle:{
    textDecoration:'none',
    color:'#000'
  }
}));

export const RecentProjectsForDesktop = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const recentProjects = useSelector(selectRecentProjects);
  const isLoading = useSelector(selectRecentProjectIsLoading);
  const encounteredError = useSelector(selectRecentProjectHasError);

  useEffect(() => {
    dispatch(fetchRecentlyViewedProjects());
  }, [dispatch]);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(recentProjects);
  }, [recentProjects]);

  return (
    <Grid container spacing={0} style={{ margin: "auto" }}>
      {isLoading ? (
        <h5>Loading Project ..</h5>
      ) : (
        projects.map((item) => {
          return (
            <Grid item md={6} lg={3} xl={3}>
              <Box mt={2}>
                <Link to={{
                  pathname:"/viewproject",
                  state:{projectId:item.projectId}
                }}
                className={classes.linkStyle}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    component={"img"}
                    image={item.projectThumbnail}
                  />
                  <CardContent>
                    <Typography className={classes.title}>
                      {item.projectTitle}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box flex={1}>
                      <Typography className={classes.subtitle}>
                        ${item.basicPrice}
                      </Typography>
                    </Box>
                    <Box mt={2} flexShrink={0}>
                      <Rating value={item.ratings} size="small" readOnly />
                    </Box>
                  </CardActions>
                </Card>
                </Link>
              </Box>
            </Grid>
          );
        })
      )}
      <Grid xs={0} sm={1} md={1} item></Grid>
    </Grid>
  );
};
