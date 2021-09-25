//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import {
  Box,
  Button,
  Grid,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

//Material-UI styles
import { deepOrange, green } from "@material-ui/core/colors";
import ClockIcon from "@material-ui/icons/Timer";

//Icons

//Styles and Theme
import "./Styles/OngoingOrders.css";

//Router
import { Link } from "react-router-dom";

//Resources
import ServiceImage from "../Resources/java1.jpg";
import { Headingfonts, TextFonts } from "../../Theme/fonts";


//Redux
import { useDispatch, useSelector } from "react-redux";

//action Creators

//Thunks
import { fetchOrderDetails } from "../Redux/slices/ordersSlice";
//Selectors
import  {selectOrders, selectHasOrderError, selectIsOrderLoading } from "../Redux/slices/ordersSlice"
import ListSkeleton from "../../CustomComponents/UI/Skelton/ListSkeleton";

//custom components
import {lightBorder} from "../../Theme/borders"

const ongoingOrderStyles = makeStyles({
  container: {
    flex: 1,
  },
  heading: {
    font: TextFonts.large,
  },
  headingPane:{
    border:lightBorder
  }
});

export const OngoingOrders = () => {
  const classes = ongoingOrderStyles();

  const dispatch=useDispatch()
  const orders=useSelector(selectOrders)
  const isLoading=useSelector(selectIsOrderLoading)
  const encounteredError=useSelector(selectHasOrderError)

  //Now from orders, get active, cancelled and completed orders by checking their status
  useEffect(() => {
      dispatch(fetchOrderDetails("status")) //dispatch thunk with status of order or simply bring all orders for this user
  }, [dispatch])

  //Get these numbers from API
  const [activeOrders, setActiveOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);
  const [cancelledOrders, setCancelledOrders] = useState(0);


  const [option, setOption] = useState(0);
  function setOptionHandler(op) {
    setOption(op);
  }
  function renderSelectedOption() {

    if (option == 0) {
      return <ActiveOrderCard />;
    } else if (option == 1) {
      return <CompletedOrderCard />;
    } else if (option == 2) {
      return <CancelledOrderCard />;
    }
  }

  return (
    <div>
      <Box /*boxShadow={3}*/ display="flex" className={classes.headingPane}>
        <Box ml={2} className={classes.container}>
          <h3>Active Orders -0($0)</h3>
        </Box>
        <Box p={2}>
          <OrderOptions setOptionHandler={setOptionHandler} />
        </Box>
      </Box>
      <Box>
      {
        Array(5).fill().map(()=>{
          return <Box>{
            isLoading?<ListSkeleton height={5}/>:
            renderSelectedOption
          }</Box>
        })
      }
      </Box>
    </div>
  );
};

const OrderOptions = (props) => {
  function handleSelection(event) {
    props.setOptionHandler(event.target.value);
  }
  return (
    <select style={{ padding: "4px" }} onChange={handleSelection}>
      <option value={0}>Active Orders (0)</option>
      <option value={1}>Completed Orders (0)</option>
      <option value={2}>Cancelled Orders (0)</option>
    </select>
  );
};

const activeOrderCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    border:lightBorder
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
  statLabel: {
    fontSize: 8,
    color: theme.palette.grey[500],
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  boxStyle: {
    textAlign: "center",
  },
  serviceImageStyle: {
    width: "5rem",
    height: "5rem",
    borderRadius: "2px",
  },
  gridStyle: {
    flex: 1,
  },
  ongoingOrderButton: {
    fontSize: 8,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
}));

const ActiveOrderCard = () => {
  const classes = activeOrderCardStyles();

  const isItMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box className={classes.root} p={0.5} mt={2}>
      <Grid container>
        <Grid item lg={2} xs={2}>
          <Box flex={"auto"}>
            <Avatar
              className={classes.serviceImageStyle}
              variant="square"
              src={ServiceImage}
              onClick={() => {
                alert("Go to this service");
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Grid>
        <Grid item lg={2} xs={3}>
          <Box
            flex={"auto"}
            className={classes.boxStyle}
            ml={isItMobile ? 4 : 0}
          >
            <p className={classes.statLabel}>Project Price</p>
            <p className={classes.statValue}>$457</p>
          </Box>
        </Grid>

        <Grid item lg={2} className={classes.gridStyle}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Due in</p>
            <p className={classes.statValue}>
              <ClockIcon className={classes.statValue}></ClockIcon> 4d, 7h
            </p>
          </Box>
        </Grid>

        <Grid item lg={3}></Grid>
        <Grid item lg={3}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <Link to="/messaging" className="linkStyle">
              <Button
                variant="outlined"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                Contact Seller
              </Button>
            </Link>
          </Box>
          <Box flex={"auto"} className={classes.boxStyle} mt={1}>
            <Link to="/vieworder" className="linkStyle">
              <Button
                variant="contained"
                color="primary"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                View Order
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const completedOrderCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      border:lightBorder
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
  statLabel: {
    fontSize: 8,
    color: theme.palette.grey[500],
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  statValue: {
    fontSize: 8,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  boxStyle: {
    textAlign: "center",
  },
  serviceImageStyle: {
    width: "5rem",
    height: "5rem",
    borderRadius: "2px",
  },
  gridStyle: {
    flex: 1,
  },
  ongoingOrderButton: {
    fontSize: 8,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
}));

const CompletedOrderCard = () => {
  const classes = completedOrderCardStyles();
  const isItMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box className={classes.root} p={0.5} mt={2}>
      <Grid container>
        <Grid item lg={2} xs={2}>
          <Box flex={"auto"}>
            <Avatar
              className={classes.serviceImageStyle}
              variant="square"
              src={ServiceImage}
              onClick={() => {
                alert("Go to this service");
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Grid>

        <Grid item lg={2} xs={2}>
          <Box
            flex={"auto"}
            className={classes.boxStyle}
            ml={isItMobile ? 4 : 0}
          >
            <p className={classes.statLabel}>Project Price</p>
            <p className={classes.statValue}>$457</p>
          </Box>
        </Grid>

        <Grid item lg={2} xs={2} className={classes.gridStyle}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Due on</p>
            <p className={classes.statValue}>
              <ClockIcon className={classes.statValue}></ClockIcon>{" "}
              {new Date().toDateString()}
            </p>
          </Box>
        </Grid>

        <Grid item lg={2} xs={3} className={classes.gridStyle}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Delivered on</p>
            <p className={classes.statValue}>
              <ClockIcon className={classes.statValue}></ClockIcon>{" "}
              {new Date().toDateString()}
            </p>
          </Box>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={3}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <Link to="/messaging" className="linkStyle">
              <Button
                variant="outlined"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                Contact Seller
              </Button>
            </Link>
          </Box>
          <Box flex={"auto"} className={classes.boxStyle} mt={1}>
            <Link to="/viewOrder" className="linkStyle">
              <Button
                variant="contained"
                color="primary"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                View Order
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const cancelledOrderCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    border:lightBorder
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
  statLabel: {
    fontSize: 8,
    color: theme.palette.grey[500],
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  statValue: {
    fontSize: 8,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  boxStyle: {
    textAlign: "center",
  },
  serviceImageStyle: {
    width: "5rem",
    height: "5rem",
    borderRadius: "2px",
  },
  gridStyle: {
    flex: 1,
  },
  ongoingOrderButton: {
    fontSize: 8,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
}));

const CancelledOrderCard = () => {
  const classes = cancelledOrderCardStyles();
  const isItMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box className={classes.root} p={0.5} mt={2}>
      <Grid container>
        <Grid item lg={2} xs={2}>
          <Box flex={"auto"}>
            <Avatar
              className={classes.serviceImageStyle}
              variant="square"
              src={ServiceImage}
              onClick={() => {
                alert("Go to this service");
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Grid>

        <Grid item lg={2} xs={2}>
          <Box
            flex={"auto"}
            className={classes.boxStyle}
            ml={isItMobile ? 4 : 0}
          >
            <p className={classes.statLabel}>Project Price</p>
            <p className={classes.statValue}>$457</p>
          </Box>
        </Grid>

        <Grid item lg={2} xs={2} className={classes.gridStyle}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Due on</p>
            <p className={classes.statValue}>
              <ClockIcon className={classes.statValue}></ClockIcon>{" "}
              {new Date().toDateString()}
            </p>
          </Box>
        </Grid>

        <Grid item lg={2} xs={3} className={classes.gridStyle}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Delivered on</p>
            <p className={classes.statValue} style={{ color: "red" }}>
              <ClockIcon className={classes.statValue}></ClockIcon>{" "}
              {new Date().toDateString()}
            </p>
          </Box>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={3}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <Link to="/messaging" className="linkStyle">
              <Button
                variant="outlined"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                Contact Seller
              </Button>
            </Link>
          </Box>
          <Box flex={"auto"} className={classes.boxStyle} mt={1}>
            <Link to="/vieworder" className="linkStyle">
              <Button
                variant="contained"
                color="primary"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                View Order
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
