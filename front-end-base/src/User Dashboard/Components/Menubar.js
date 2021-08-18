//ReactJS
import React from "react";

//Material-UI core
import {
  AppBar,
  Divider,
  IconButton,
  InputBase,
  Menu,
  Typography,
  Zoom,
} from "@material-ui/core";
import {
  MenuItem,
  Toolbar,
  Button,
  Box,
  useScrollTrigger,
} from "@material-ui/core";
import { Hidden, Fab } from "@material-ui/core";

import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationIcon from "@material-ui/icons/NotificationImportant";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fade from "@material-ui/core/Fade";

import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LogoutIcon from "@material-ui/icons/ExitToApp";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import HomeIcon from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import OrdersIcon from "@material-ui/icons/AddShoppingCart";
import PaymentIcon from "@material-ui/icons/AccountBalance";
import InboxIcon from "@material-ui/icons/Inbox";
import SettingsIcon from "@material-ui/icons/Settings"

//Routing

import { Link } from "react-router-dom";

//Local Resources
import logo from "../Resources/upwork.svg";
import profilePic from "../Resources/nadir.jpg";

//Styles and CSS
import "./Styles/MenubarStyles.css";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  menuContainer: {
    backgroundColor: "#011c38",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "40ch",
    },
  },
  //Show desktop view only when size is lg
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  avatar: {
    marginTop: "1rem",
  },
  profileMenu: {
    marginTop: "1rem",
  },
}));

export const Menubar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  function handleProfileMenuClick(option) {

    alert(option + " was clicked");
    handleMenuClose();
  }
  //User profile Menu
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className={classes.profileMenu}
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      TransitionComponent={Fade}
      // elevation={4}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={profilePic}
            onClick={() => {
              alert("Display Full Image of User");
            }}
            style={{ cursor: "pointer" }}
          />
        </ListItemAvatar>
        <ListItemText
          className={classes.profileMenuInfo}
          primary={<Typography variant="h6">Nadir Hussain</Typography>}
        />
      </ListItem>
      <Divider />

      <ListItem
        button
        key="settings"
        onClick={() => handleProfileMenuClick("Settings")}
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
            <Link to="/Settings" style={{textDecoration:"none", color:"black"}}><ListItemText primary="Settings" /></Link>
      </ListItem>

      <ListItem
        button
        key="logout"
        onClick={() => handleProfileMenuClick("Logout")}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <Link to="/Logout" style={{textDecoration:"none", color:"black"}}><ListItemText primary="Logout" /></Link>
      </ListItem>

      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  function gotoHomePage() {
    alert("I Will go to Home");
  }

  function handleSearch(event) {}

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 200,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  return (
    <div className={classes.grow}>
      <AppBar className={classes.menuContainer}>
        <Toolbar>
          <Hidden only={["lg"]}>
            <DrawerComponent />
          </Hidden>
          <Hidden only={["xs"]}>
            <img
              src={logo}
              style={{ cursor: "pointer" }}
              onClick={gotoHomePage}
            ></img>
          </Hidden>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onClick={handleSearch}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box spacing={2} m={2}>
              <Button>
                <Link to="/" className="menuBarItem">
                  Dashboard
                </Link>
              </Button>
              <Button>
                <Link to="/Messaging" className="menuBarItem">
                  Messaging
                </Link>
              </Button>
              <Button>
                <Link to="/Orders" className="menuBarItem">
                  Orders
                </Link>
              </Button>
              <Button>
                <Link to="/Payment" className="menuBarItem">
                  Payment
                </Link>
              </Button>
            </Box>
            <IconButton
              edge="start"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => {
                alert("Mazak na kar yar");
              }}
              color="inherit"
            >
              <NotificationIcon />
            </IconButton>
            <Avatar
              className={classes.avatar}
              src={profilePic}
              onClick={handleProfileMenuOpen}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#011c38", color: "white" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

const drawerStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  avatar: {
    width: "4rem",
    height: "4rem",
    margin: "auto",
  },
  profileInfo: {
    marginLeft: "1rem",
  },
});

function DrawerComponent() {
  const drawerOptions = [
    {
      optionTitle: "Profile",
      optionIcon: <ProfileIcon />,
    },
    {
      optionTitle: "Home",
      optionIcon: <HomeIcon />,
    },
    {
      optionTitle: "Dashboard",
      optionIcon: <DashboardIcon />,
    },
    {
      optionTitle: "Inbox",
      optionIcon: <InboxIcon />,
    },
    {
      optionTitle: "Orders",
      optionIcon: <OrdersIcon />,
    },
    {
      optionTitle: "Payment",
      optionIcon: <PaymentIcon />,
    },
  ];
  const classes = drawerStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  function handleDrawerOptionClick(optionTitle) {
    alert("Go to: " + optionTitle);
    toggleDrawer("left", false);
  }
  const drawerOptionList = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              src={profilePic}
              onClick={() => {
                alert("Display Full Image of User");
              }}
              style={{ cursor: "pointer" }}
            />
          </ListItemAvatar>
          <ListItemText
            className={classes.profileInfo}
            primary={<Typography variant="h6">Nadir Hussain</Typography>}
            secondary={<Rating value="3" size="small" readOnly />}
          />
        </ListItem>
      </List>

      <Divider />
      <List>
        {drawerOptions.map(({ optionTitle, optionIcon }) => (
          <ListItem
            button
            key={optionTitle}
            onClick={() => handleDrawerOptionClick(optionTitle)}
          >
            <ListItemIcon>{optionIcon}</ListItemIcon>
            <ListItemText primary={optionTitle} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key="logout"
          onClick={() => handleDrawerOptionClick("Logout")}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <IconButton
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {drawerOptionList("Left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
