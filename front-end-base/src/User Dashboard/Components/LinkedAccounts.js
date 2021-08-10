
import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import Github from '@material-ui/icons/GitHub';

import { Button, Container, Typography, Box } from "@material-ui/core";

export const LinkedAccounts = () => {
  return (
    <div style={{ padding: "3px", textAlign: "center" }}>
      <Typography variant="p" align="center">
Linked Accounts
      </Typography>
      <Box m={1} pt={3}>
        <Facebook />
        <Facebook />
        <Facebook />
      </Box>
    </div>
  );
};
