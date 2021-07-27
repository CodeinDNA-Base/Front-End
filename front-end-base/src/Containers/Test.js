import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import { BottomNavigation, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ServiceDetailsNavbar from '../Service Details/Components/ServiceDetailsNavbar';
import { StickyContainer, Sticky } from 'react-sticky';
import ServiceDetailsTabs from '../Service Details/Components/ServiceDetailsTabs';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: "black",
    },
  }));

function Test(props) {

const classes = useStyles();
const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');

const [distanceFromTop,setDistanceFromTop]=useState();
const [calculatedHeight,setCalculatedHeight]=useState();

return (
  
<StickyContainer>
  <Sticky>
    {({
      style,
      // the following are also available but unused in this example
      isSticky,
      wasSticky,
      distanceFromTop,
      distanceFromBottom,
      calculatedHeight
    }) => (
      <header style={style}>
        <Grid container >
          <Grid item xs={12} style={{marginTop:distanceFromTop}}>
               <ServiceDetailsNavbar/>
          </Grid>
          <Grid item xs={12} >
            <Box px={(isDesktopOrLaptopOrTabletScreen) ? 6 : 0} >
              {/* Tabs container */}
              <ServiceDetailsTabs/>
           </Box>         
          </Grid>
        </Grid>
       
      </header>
    )}
  </Sticky>
   <Grid container spacing={1}>
       
        <Grid item xs={12}>
          <Box px={(isDesktopOrLaptopOrTabletScreen) ? 6 : 3}>
             {/* Body */}
             <Grid container spacing={1}>
                  <Grid item lg={8} md={8} xs={12} >
                    {/* Service description container */}
                    <Paper className={classes.paper}>
                      <div style={
                        {
                          backgroundColor:"green",
                          height:1000,
                          alignItems:'center', 
                        }
                      }>
                          {/* Call here the description componet */}
                          <h3>Service description container</h3>
                      </div>
                    </Paper>
                  </Grid>

                  <Grid item lg={4} md={4} xs={12}>
                    {/* package container */}
                    <Paper className={classes.paper}>
                    <div style={
                        {
                          backgroundColor:"orange",
                          height:350,
                          alignItems:'center', 
                        }
                      }>
                          {/* Call here the description componet */}
                          <h3>Package container</h3>
                      </div>  
                    </Paper>
                  </Grid>
                  
             </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} 
        style={{
              left:0,
              bottom:0,
              right:0,
              height:250
              }}>
              {/* Footer */}
              <Paper className={classes.paper} style={{backgroundColor:"blue",height:'100%'}}>footer container</Paper>
        </Grid>
      </Grid>
</StickyContainer>
  );
}

Test.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(Test);