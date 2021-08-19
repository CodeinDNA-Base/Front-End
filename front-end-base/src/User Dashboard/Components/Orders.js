//ReactJS
import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

//Material-UI core
import {
  AppBar,
  Tabs,
  Tab,
  Badge,
  Hidden,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fade
} from "@material-ui/core";

//Material-UI
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

//Styles and theme

import "./Styles/Orders.css"
//Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';

//Resources

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
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

//Style the badge: Number of orders

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -12,
    top: 11,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export const Orders = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //To generate the tabs dynamically
  const tabList = [
    {
      tabTitle: "Newest",
      tabBadge: "4",
    },
    {
      tabTitle: "Active",
      tabBadge: "12",
    },
    {
      tabTitle: "Late",
      tabBadge: "3",
    },
    {
      tabTitle: "Delivered",
      tabBadge: "0",
    },
    {
      tabTitle: "Completed",
      tabBadge: "27",
    },
    {
      tabTitle: "Cancelled",
      tabBadge: "4",
    },
  ];

  return (
    <div className={classes.root}>
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
          {/* Numbers Badge content is hidden on small screens */}
          {tabList.map((tab) => {
            return (
              <Tab
                label={
                  <>
                    <Hidden only={["xs"]}>
                      <StyledBadge color="primary" badgeContent={tab.tabBadge}>
                        <Box>
                          <Typography>{tab.tabTitle}</Typography>
                        </Box>
                      </StyledBadge>
                    </Hidden>
                    <Hidden only={["sm", "md", "lg", "xl"]}>
                      <Typography>{tab.tabTitle}</Typography>
                    </Hidden>
                  </>
                }
                {...a11yProps(0)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <OrdersTable tabTitle="Newest Orders" status="Newest" />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <OrdersTable tabTitle="Active Orders" status="Active" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <OrdersTable tabTitle="Late Orders" status="Late" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <OrdersTable tabTitle="Delivered Orders" status="Delivered" />
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <OrdersTable tabTitle="Completed Orders" status="Completed" />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <OrdersTable tabTitle="Cancelled Orders" status="Cancelled" />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const tableStyles = makeStyles({
  table: {
    minWidth:700,
  },
});

const OrdersTable=(props)=>{
  const newestOrdersDetail = [
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
  ];
  
  const activeOrdersDetail = [
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
  ];
  
  const lateOrdersDetail = [
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
  ];

  const deliveredOrdersDetail = [
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
  ];

  const completedOrdersDetail = [
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      deliveredOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
  ];

  const cancelledOrdersDetail = [
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
    {
      orderId:12,
      seller:"CODEINDNA",
      serviceOrProject:"Web Development",
      dueOn:new Date().toLocaleDateString(),
      price:451,
      status:"New", 
    },
  ];
  
  function checkStatus(){
    if(status=="Newest")
      return newestOrdersDetail;
    else if(status=="Active")
      return activeOrdersDetail;
    else if(status=="Late")
      return lateOrdersDetail;
    else if(status=="Delivered")
      return deliveredOrdersDetail;
    else if(status=="Completed")
      return completedOrdersDetail;
    else if(status=="Cancelled")
      return cancelledOrdersDetail;

  }
  
  const classes = tableStyles();
  
  const status=props.status;
  const title=props.tabTitle;

  return (
    <div>
    <h4>{title}</h4>
    
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Seller</StyledTableCell>
            <StyledTableCell align="right">Service/Project</StyledTableCell>
            <StyledTableCell align="right">Due On</StyledTableCell>
            {
              (status=="Delivered" || status=="Completed" || status=="Late")? 
              <StyledTableCell align="right">Delivered On</StyledTableCell>:""
            }
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">More</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {checkStatus().map((order) => (
            <StyledTableRow hover={true} key={order.orderId} className="tableRow">
              <StyledTableCell component="th" scope="row">
                {order.seller}
              </StyledTableCell>
              <StyledTableCell align="right">{order.serviceOrProject}</StyledTableCell>
              <StyledTableCell align="right">{order.dueOn}</StyledTableCell>
              {
              (status=="Delivered" || status=="Completed" || status=="Late")? 
                <StyledTableCell align="right">{order.deliveredOn}</StyledTableCell>:""
              }
              <StyledTableCell align="right">${order.price}</StyledTableCell>
              <StyledTableCell align="right">{order.status}</StyledTableCell>
              <StyledTableCell align="right"><OrderOptionsMenu /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}




function OrderOptionsMenu() {
  
  const options = [
    'View Order',
    'Contact Seller',
  ];
  const ITEM_HEIGHT = 48;
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
        TransitionComponent={Fade}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
