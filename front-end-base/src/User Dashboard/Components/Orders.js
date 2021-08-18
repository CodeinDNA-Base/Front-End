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
  Divider,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Material-UI
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

//Styles and theme

//Icons

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
          <TabContentComponent tabTitle="Newest Orders" status="Newest" />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <TabContentComponent tabTitle="Active Orders" status="Active" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TabContentComponent tabTitle="Late Orders" status="Late" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <TabContentComponent tabTitle="Delivered Orders" status="Delivered" />
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <TabContentComponent tabTitle="Completed Orders" status="Completed" />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <TabContentComponent tabTitle="Cancelled Orders" status="Cancelled" />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

const tabContentComponentStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabContentComponent = (props) => {
  const classes = tabContentComponentStyles();
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">{props.tabTitle}</Typography>}
      />
      <Divider />
      <CardContent>
        <CustomizedTables />
      </CardContent>
    </Card>
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

const tStyles = makeStyles({
  table: {
    minWidth:700
  },
});

function CustomizedTables() {
  const classes = tStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
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
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
