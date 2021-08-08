import React,{useState} from 'react';
import { makeStyles,Grid,AppBar} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import { stringCollection } from '../Strings/StringCollection';

import DeliverOrderTab from './DeliverOrderTab';
import SearchTab from './SearchTab';
import ShowCanceledOrdersTab from './ShowCanceledOrdersTab';
import ShowCompleteOrdersTab from './ShowCompleteOrdersTab';
import ShowNewOrdersTab from './ShowNewOrdersTab';
import ShowUnCompleteOrdersTab from './ShowUnCompleteOrdersTab';

function ManageOrders(props) {
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
                    <h1>{stringCollection.ManageOrders.OrdersManagerTitle}</h1>
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
     
                          <Tab label={stringCollection.ManageOrders.DeliverOrderTabText} {...a11yProps(0)} />
                          <Tab label={stringCollection.ManageOrders.ShowNewOrdersTabText} {...a11yProps(1)} />
                          <Tab label={stringCollection.ManageOrders.ShowUnCompleteOrdersTabText} {...a11yProps(2)} />
                          <Tab label={stringCollection.ManageOrders.ShowCompleteOrdersTabText} {...a11yProps(3)} />
                          <Tab label={stringCollection.ManageOrders.ShowCanceledOrdersTabText} {...a11yProps(4)} />
                          <Tab label={stringCollection.ManageOrders.SearchTabText} {...a11yProps(5)} />
                                       
                        </Tabs>
                        </AppBar>
                              <TabPanel value={value} index={0}>
                                <DeliverOrderTab/>
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                <ShowNewOrdersTab/>
                              </TabPanel>
                              <TabPanel value={value} index={2}>
                                <ShowUnCompleteOrdersTab/>
                              </TabPanel>
                              <TabPanel value={value} index={3}>
                                <ShowCompleteOrdersTab/>
                              </TabPanel>
                              <TabPanel value={value} index={4}>
                                <ShowCanceledOrdersTab/>
                              </TabPanel>
                              <TabPanel value={value} index={5}>
                                <SearchTab/>
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
        paddingTop:'ManageOrders%'
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
export default ManageOrders;

