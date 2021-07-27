import React from 'react';
import Paper from '@material-ui/core/Paper';
import { AppBar,Container,Typography,Toolbar } from '@material-ui/core';

import useStyles from './Styles/StyleSheet';
function ServiceDetailsFooter(props) {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2019 Gistia
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    );
}

export default ServiceDetailsFooter;