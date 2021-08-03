import React,{useState} from 'react';
import { makeStyles,Grid} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import useWindowDimensions from './useWindowDimensions';
import { stringCollection } from '../Strings/StringCollection';

function ManageReviews(props) {
    const classes =useStyles();
    const [value, setValue] = React.useState(0);
    const {height,width} = useWindowDimensions();
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
                    <div className={classes.root}>
                        <Tabs
                          orientation="vertical"
                          variant="scrollable"
                          value={value}
                          onChange={handleChange}
                          aria-label="Vertical tabs example"
                          className={classes.tabs}
                        >
    
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/ios-glyphs/50/000000/new.png"/>} label={stringCollection.ManageReviews.NewReviewTabText} {...a11yProps(0)} />
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/ios/50/000000/invisible.png"/>}  label={stringCollection.ManageReviews.VisibleReviewsTabText} {...a11yProps(1)} />
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/ios-filled/50/000000/in-progress.png"/>}  label={stringCollection.ManageReviews.DiscardedReviewsTabText} {...a11yProps(2)} />
                         
                        </Tabs>

                              <TabPanel value={value} index={0}>
                                Item One
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                Item Two
                              </TabPanel>
                              <TabPanel value={value} index={2}>
                                Item Three
                              </TabPanel>
                              
                            </div>
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

