import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import Dropdown from './Dropdown';
function CustomCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <h1>Put component here</h1>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />
      
      <CardContent>
        <h1>Content</h1>
      </CardContent>
      
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
}));
  
export default CustomCard;