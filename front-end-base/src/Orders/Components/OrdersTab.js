//React
import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

//Material-UI
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box, Badge, Hidden } from "@material-ui/core";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export const OrdersTab = () => {
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
            return <Tab
              label={<>
              <Hidden only={["xs"]}>
                <StyledBadge color="primary" badgeContent={tab.tabBadge}>
                  <Box>
                    <Typography>{tab.tabTitle}</Typography>
                  </Box>
                </StyledBadge></Hidden>
                <Hidden only={["sm", "md", "lg", "xl"]}>
                <Typography>{tab.tabTitle}</Typography>
                </Hidden>
                </>
              }
              {...a11yProps(0)}
            />;
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TabContent tabTitle="Newest Orders" status="Newest"/>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
        <TabContent tabTitle="Active Orders" status="Active"/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <TabContent tabTitle="Late Orders" status="Late"/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <TabContent tabTitle="Delivered Orders" status="Delivered"/>
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
        <TabContent tabTitle="Completed Orders" status="Completed"/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        <TabContent tabTitle="Cancelled Orders" status="Cancelled"/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};


const TabContent=(props)=>{

    return(
        <div>
            <Box mt={1} p={1}>
            <Typography variant="h4">
            {props.tabTitle}
            </Typography>

            </Box>
        <CustomizedTables status={props.status}/>
        </div>
    )
}



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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const tableStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function CustomizedTables(props) {
  
  const classes = tableStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Seller</StyledTableCell>
            <StyledTableCell align="right">Service/Project</StyledTableCell>
            <StyledTableCell align="right">Due at</StyledTableCell>
            
            {
                props.status=="Completed" || props.status=="Delivered" ?<StyledTableCell align="right">Delivered at</StyledTableCell>:""
            }
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              {
                props.status=="Completed" || props.status=="Delivered" ?<StyledTableCell align="right">12 August</StyledTableCell>:""
            }
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
