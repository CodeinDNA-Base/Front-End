import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  Button,
  Radio,
  RadioGroup,
  Popover,
  MenuItem,
  StepContent
} from "@material-ui/core";

import { Rating } from "@material-ui/lab";
import { Grid } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import {
  FormControlLabel,
} from "@material-ui/core";

import { FilterByCategory } from "./FilterByCategory";
import { FilterByAttribues } from "./FilterByAttributes";
import { FilterByPrice } from "./FilterByPrice";
import { FilterByRating } from "./FilterByRating";
import { FilterByDeliveryTime } from "./FilterByDeliveryTime";

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
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  scroller: {
    flexGrow: 0,
  },
}));

export const FilterOptions = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [projectRatingRadio, setProjectRatingRadioValue] = React.useState("");

  const handleRadioChange = (event) => {
    setProjectRatingRadioValue(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const[label, setLabel]=useState("Three")
  const[content, setContent]=useState("Wah")
  const[val, setVal]=useState("one")
  const[anchorElement, setAnchorElement]=useState(null)

  function handleTabClick(){
    console.log("Yes")
  }

  function handleMenuItemClick(menuItem) {
    handleClose();
    setLabel(menuItem)
    setContent(menuItem)
    setVal("More")
  }

  function handleCloseTab(){
            setAnchorElement(null);
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
      <AppBar position="static" color="default">
        <Tabs
          classes={{ root: classes.root, scroller: classes.scroller }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={"scrollable"}
          scrollButtons={"on"}
        >
          <Tab label="Category" {...a11yProps(0)} onClick={handleTabClick}/>
          <Tab label="Attributes" {...a11yProps(1)} />
          <Tab label="Price" {...a11yProps(2)} />
          <Tab label="Ratings" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Delivery Time" {...a11yProps(5)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <FilterByCategory />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FilterByAttribues />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FilterByPrice />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FilterByRating />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <RatingPopOver />
      </TabPanel>
      <TabPanel value={value} index={5}>
          
      </TabPanel> 
              <Popover
          open={open}
          anchorEl={anchorElement}
          onClose={handleCloseTab}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick("Three")}>
            Three
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Four")}>
            Four
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Five")}>
            Five
          </MenuItem>
        </Popover>
        </AccordionDetails>
      </Accordion>

    </div>
  );
};


const TriggersTooltips=()=> {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={<FilterByRating />}
              >
                <Button onClick={handleTooltipOpen}>Click</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}


const st = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  popOverStyle:{
      padding:"10px"
  }
}));

const RatingPopOver=()=>{
  const classes = st();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{padding:"10px"}}
      >
          <FilterByRating />
      </Popover>
    </div>
  );
}
