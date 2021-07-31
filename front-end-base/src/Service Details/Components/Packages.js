import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import './Styles/StyleSheet.css'
function Packages(props) {
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <Grid container className={classes.mainOuterContainer}>
                <Grid item ld={12} md={12} sm={12} xs={12}>
                    {/* Heading */}
                    <Grid container>
                       <Grid item  ld={12} md={12} sm={12} xs={12}>
                            {/* Tabs */}
                            
                             <div className={classes.root}>
                                      <AppBar position="static" color="white">
                                       <div className={classes.packageHeadingContainer}>
                                            <div className={"OurpackageFonts"}>Our Packages</div>
                                        </div> 
                                        <Tabs
                                          value={value}
                                          onChange={handleChange}
                                          indicatorColor="primary"
                                          textColor="primary"
                                          variant="scrollable"
                                          scrollButtons="auto"
                                          aria-label="scrollable auto tabs example"
                                        >
                                          <Tab label="Basic" {...a11yProps(0)} />
                                          <Tab label="Standard" {...a11yProps(1)} />
                                          <Tab label="Premium" {...a11yProps(2)} />
                                        </Tabs>
                                      </AppBar>
                                      <TabPanel value={value} index={0}>
                                        <div className={classes.basicPackageContainer}>
                                        <Box
                                            boxShadow={2}
                                            bgcolor="background.paper"
                                            m={1}
                                            p={1}
                                            style={{ width: (isDesktopOrLaptopOrTabletScreen) ? '21rem' : '25rem', height: '23rem' }}
                                            >
                                                <h1>Basic</h1>
                                        </Box>
                                        </div>
                                      </TabPanel>
                                      <TabPanel value={value} index={1}>
                                        <div className={classes.standardPackageContainer}>
                                                
                                                <Box
                                                boxShadow={2}
                                                 bgcolor="background.paper"
                                                 m={1}
                                                 p={1}
                                                 style={{ width: (isDesktopOrLaptopOrTabletScreen) ? '21rem' : '25rem', height: '23rem' }}
                                                 >
                                                <h1>Standard package</h1>
                                                </Box>
                                        </div>
                                      </TabPanel>
                                      <TabPanel value={value} index={2}>
                                        <div className={classes.premiumPackageContainer}>
                                                <Box
                                                boxShadow={2}
                                                 bgcolor="background.paper"
                                                 m={1}
                                                 p={1}
                                                 style={{ width: (isDesktopOrLaptopOrTabletScreen) ? '21rem' : '25rem', height: '23rem' }}
                                                 >
                                                  <h1>Premium package</h1>
                                                </Box>
                                        </div>
                                      </TabPanel>
                                    </div>
                                   
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={0}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
      },
    mainInnerContainer:{
        
         // Set according to screen
         ['@media (min-width: 960px)']
         :
         { // eslint-disable-line no-useless-computed-key
                height:450,
                width:400,
                // Set accrding to screen
                borderColor:'black'
         },
         ['@media (max-width: 600px)']
         :
         { // eslint-disable-line no-useless-computed-key
            height:450,
            width:400,

            // Set accrding to screen
            backgroundColor:"blue"
         },
    },
    mainOuterContainer:{
       
        // Set according to screen
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            marginTop:'9%',
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            marginTop:'5%',
        },
    },
    packageHeadingContainer:{
        paddingLeft:'2%',
        paddingTop:'2%'
    },
    basicPackageContainer:{
// Set according to screen
        // borderStyle:'solid',
        // borderWidth:1,
        // borderColor:'black'
        // ,
        boxShadow:1,
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            height:360,
            width:365,
            
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
    },
    standardPackageContainer:{
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
        
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
    },
    premiumPackageContainer:{
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
           
        },
    },
    contactContainer:{
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
           
        },
    }

  }));
export default Packages;