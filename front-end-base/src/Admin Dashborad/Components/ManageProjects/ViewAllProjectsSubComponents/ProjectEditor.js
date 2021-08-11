import { makeStyles,Button} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PreviewProjectTab from './PreviewProjectTab';
import UpdateProjectTab from './UpdateProjectTab';
import VisibilityOfProjectTab from './VisibilityOfProjectTab';
import DeleteProjectTab from './DeleteProjectTab';
import { UndoOutlined } from '@material-ui/icons';
import { Update } from '@material-ui/icons';


function ProjectEditor(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
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
          <div className={classes.backBtnContainer}>
          <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<UndoOutlined />}
              onClick={(e)=>{
               props.handelBackToListOfProjectBtnClick(e);
              }}
            >
               
            </Button>
          </div>
          <Tab label="Preview" {...a11yProps(1)} />
          {/* <div className={classes.projectTitleContainer}>
              <p className={classes.projectTitleFonts}>Project title : {props.projectTitle}</p>
          </div> */}
          <div className={classes.updateBtn}>
          <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<Update />}
              onClick={(e)=>{
               props.handelBackToListOfProjectBtnClick(e);
              }}
            >
               Update changes
            </Button>
          </div>
          <div className={classes.deleteBtn}>
          <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<Update />}
              onClick={(e)=>{
               props.handelBackToListOfProjectBtnClick(e);
              }}
            >
               Delete
            </Button>
          </div>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        <PreviewProjectTab/>
      </TabPanel>
   
    </div>
  );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    backBtnContainer:{
        marginLeft:'2%',
        marginTop:7,
        paddingRight:"3%"
    },
    projectTitleContainer:{
        marginLeft:'2%',
  
        paddingRight:"3%"
    },
    projectTitleFonts:{
        fontSize:17,
        fontWeight:'bold'
    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
    updateBtn:{
      marginTop:5,
      marginLeft:'45%'
    },
    deleteBtn:{
      marginLeft:'1%',
      marginTop:5
    }
}))
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
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
export default ProjectEditor;