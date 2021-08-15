import React,{useState} from 'react';
import { makeStyles,Grid,AppBar} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import { stringCollection } from '../Strings/StringCollection';
import DiscardedReviewsTab from './DiscardedReviewsTab';
import NewReviewsTab from './NewReviewsTab';
import VisibleReviewsTab from './VisibleReviewsTab';

function ManageReviews(props) {
    const classes =useStyles();
    const [value, setValue] = React.useState(0);
 
    const tabIconHeight=30;
    const tabIconWidth=30;

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };                  
    return (
       <Grid container >
            <Grid item lg={12} xs={12}>
                <div>
                    <h1>{stringCollection.ManageReviews.ReviewManagerTitle}</h1>
                </div>
            </Grid>
            <Grid item lg={12} xs={12}>
                    {/* Options tab */}
                          <AppBar position="static" color="default">
                    {/* <div className={classes.root}> */}
                        <Tabs
                          // orientation="vertical"
                          // variant="scrollable"
                          // value={value}
                          // onChange={handleChange}
                          // aria-label="Vertical tabs example"
                          // className={classes.tabs}
                           value={value}
                           onChange={handleChange}
                           indicatorColor="primary"
                           textColor="primary"
                           variant="scrollable"
                           scrollButtons="auto"
                           aria-label="scrollable auto tabs example"
                        >
    
                          <Tab label={stringCollection.ManageReviews.NewReviewTabText} {...a11yProps(0)} />
                          <Tab label={stringCollection.ManageReviews.VisibleReviewsTabText} {...a11yProps(1)} />
                          <Tab label={stringCollection.ManageReviews.DiscardedReviewsTabText} {...a11yProps(2)} />
                         
                        </Tabs>
                        </AppBar>
                              <TabPanel value={value} index={0}>
                                <NewReviewsTab/>
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                <VisibleReviewsTab/>
                              </TabPanel>
                              <TabPanel value={value} index={2}>
                                <DiscardedReviewsTab/>
                              </TabPanel>
                              
                            {/* </div> */}
            </Grid>
            
       </Grid>
    );
}

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height:450,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        paddingTop:'7%'
      },
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
export default ManageReviews;

