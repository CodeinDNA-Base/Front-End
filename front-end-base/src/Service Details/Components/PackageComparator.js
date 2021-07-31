import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
function PackageComparator(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>Package comparator</h1>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
   container:{
       height:300
   }
  }));
  
export default PackageComparator;