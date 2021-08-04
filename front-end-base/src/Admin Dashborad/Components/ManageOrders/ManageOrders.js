import React,{useState} from 'react';
import { makeStyles,Grid} from '@material-ui/core';
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
                    <div className={classes.root}>
                        <Tabs
                          orientation="vertical"
                          variant="scrollable"
                          value={value}
                          onChange={handleChange}
                          aria-label="Vertical tabs example"
                          className={classes.tabs}
                        >
     
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/dotty/50/000000/delivery.png"/>} label={stringCollection.ManageOrders.DeliverOrderTabText} {...a11yProps(0)} />
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/ios/50/000000/create-order.png"/>}  label={stringCollection.ManageOrders.ShowNewOrdersTabText} {...a11yProps(1)} />
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/ios-filled/50/000000/in-progress.png"/>}  label={stringCollection.ManageOrders.ShowUnCompleteOrdersTabText} {...a11yProps(2)} />
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/ios-filled/50/000000/task-completed.png"/>}  label={stringCollection.ManageOrders.ShowCompleteOrdersTabText} {...a11yProps(3)} />
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/dotty/50/000000/cancel.png"/>}  label={stringCollection.ManageOrders.ShowCanceledOrdersTabText} {...a11yProps(4)} />
                          <Tab icon={<img width={tabIconWidth} height={tabIconHeight} src="https://img.icons8.com/ios-filled/80/000000/search.png"/>}  label={stringCollection.ManageOrders.SearchTabText} {...a11yProps(5)} />
                                       
                        </Tabs>

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

