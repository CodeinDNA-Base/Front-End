import React from 'react';
import { Grid,makeStyles,AppBar} from '@material-ui/core';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CurrenCurrentProjectsSubTab from './SetTrendingProjectSubTabs/CurrentProjectsSubTab';
import DynamicProjectsSubTab from './SetTrendingProjectSubTabs/DynamicProjectsSubTab';
import SettingsSubTab from './SetTrendingProjectSubTabs/SettingsSubTab';
import StaticProjectsSubTab from './SetTrendingProjectSubTabs/StaticProjectsSubTab';
import DisplayModeSubTab from './SetTrendingProjectSubTabs/DisplayModeSubTab';

function SetTredingProjectTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
    <div>

      <AppBar position="static" color="default">
      <Tabs
       value={value}
       onChange={handleChange}
       indicatorColor="primary"
       textColor="primary"
       variant="scrollable"
       scrollButtons="auto"
       aria-label="scrollable auto tabs example"
      >
        <Tab label="Current Projects" {...a11yProps(0)} />
        <Tab label="Static Projects" {...a11yProps(1)} />
        <Tab label="Dynamic Projects" {...a11yProps(2)} />
        <Tab label="Display mode" {...a11yProps(3)} />
        <Tab label="Settings" {...a11yProps(4)} />
      </Tabs>

      </AppBar>
      <TabPanel value={value} index={0}>
        <CurrenCurrentProjectsSubTab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StaticProjectsSubTab/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DynamicProjectsSubTab/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DisplayModeSubTab/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SettingsSubTab/>
      </TabPanel>
    </div>

      
    );
}

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
  
const useStyles = makeStyles((theme)=>({
    container:{
        width:"100%",
        backgroundColor:"gold"
    },
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
 }));
export default SetTredingProjectTab;