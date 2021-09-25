import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import IconButton from "@material-ui/core/IconButton";
// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export function CustomLoading() {
  return (
    <Grid
      md={12}
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "10%" }}
    >
      <Box style={{ position: "relative" }}>
        <FacebookCircularProgress />
      </Box>
     
    </Grid>
  );
}
