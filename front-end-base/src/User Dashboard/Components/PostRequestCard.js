import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Button, Container, Typography, Box } from "@material-ui/core";

export const PostRequestCard = () => {
  return (
    <div style={{ padding: "3px", textAlign: "center" }}>
      <Typography variant="h6" align="center">
        Get offers from sellers for your project
      </Typography>
      <Box m={1} pt={3}>
        <Button variant="contained" color="primary">Post a Request</Button>
      </Box>
    </div>
  );
};
