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

//Custom components
import { lightBorder } from "../../../Theme/borders";
import { CardActions } from "@mui/material";

const useStyles = makeStyles(() => ({
  card: ({ color }) => ({
    maxWidth: 185,
    minHeight: 235,
    border: lightBorder,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color("#fff")
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
    fontWeight: 700,
    fontSize: 14,
  },
  linkStyle:{
    textDecoration:'none',
    color:'#000'
  }
}));

export const RecentProjectsForMobile = () => {
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
    <Grid container spacing={0} style={{ marginTop: "2%" }}>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {isLoading ? (
          <h5>Loading Projects ...</h5>
        ) : (
          projects.map((item) => {
            return (
              <Grid item md={6} lg={3} xl={3}>
                <Link
                  to={{
                    pathname: "/viewproject",
                    state: { 
                      projectId: item.projectId 
                    },
                  }}
                  className={classes.linkStyle}
                >
                  <Box mt={4} mr={2}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        component={"img"}
                        image={item.projectThumbnail}
                      />
                      <CardContent className={classes.content}>
                        <Typography className={classes.title}>
                          {item.projectTitle}
                        </Typography>
                      </CardContent>
                      <CardActions>
                          <Box>
                            <Typography className={classes.subtitle}>
                              ${item.basicPrice}
                            </Typography>
                          </Box>
                          <Box mt={2} flexShrink={0}>
                            <Rating
                              value={item.ratings}
                              size="small"
                              readOnly
                            />
                          </Box>
                          </CardActions>
                    </Card>
                  </Box>
                </Link>
              </Grid>
            );
          })
        )}
      </div>
    </Grid>
  );
};
