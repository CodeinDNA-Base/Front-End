import React,{useState} from 'react';
import { makeStyles,Grid,AppBar} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import useWindowDimensions from '../useWindowDimensions';
import { stringCollection } from '../Strings/StringCollection';

import AddNewServiceTab from './AddNewServiceTab';
import SearchTab from './SearchTab';
import StatisticsTab from './StatisticsTab';
import ViewAllServicesTab from './ViewAllServicesTab';


function ManageServices(props) {
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
                    <h1>{stringCollection.ManageServices.ServiceManagerTitle}</h1>
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
                        
                          <Tab label={stringCollection.ManageServices.ViewAllServicesTabText} {...a11yProps(0)} />
                          <Tab  label={stringCollection.ManageServices.SummuryTabText} {...a11yProps(1)} />
                          <Tab label={stringCollection.ManageServices.AddNewServiceTabText} {...a11yProps(2)} />
                          <Tab label={stringCollection.ManageServices.SearchServiceTabText} {...a11yProps(3)} />
                          
                        </Tabs>
                        </AppBar>
                              <TabPanel value={value} index={0}>
                                <ViewAllServicesTab/>
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                <StatisticsTab/>
                              </TabPanel>
                              <TabPanel value={value} index={2}>
                                <AddNewServiceTab/>
                              </TabPanel>
                              <TabPanel value={value} index={3}>
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
export default ManageServices;

