import React, { useEffect } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import colors from "../../Theme/colors";
import { Headingfonts, TextFonts } from "../../Theme/fonts";
import { useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import * as routeIds from '../../Utils/Routing/Routes'
import { GotTo } from "../../Utils/Routing/Routing";
import * as actions from '../../Utils/Redux/Actions';
import store from "../../Utils/Redux/store";
const useStyles = makeStyles((theme) => ({
  subtitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.extraSmall : TextFonts.large,
    color: colors.lightGray,
  },
  title: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.large
        : Headingfonts.XXXLarge,
    color: colors.white,
  },
  btnOutlined: {
    color: colors.white,
    borderColor: colors.white,
    borderRadius: 20,
    marginLeft: 10,
  },
  btnContained: {
    backgroundColor: colors.secondary,
    color: colors.white,
    borderRadius: 20,
    marginLeft: 10,
  },
}));

const SideMainContainer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  // Here we want to redirect to Service details.

  let history = useHistory();
  let location = useLocation();
  
  var val = GotTo(routeIds.Home,routeIds.ServiceDetails);
  
  useEffect(()=>{
    console.log("State in Home : "+history.action)
    if(history.action==='POP')
    {
      // Here we can clear history if we done want to and fro movement.
      
      console.log("Back at home")
      
      store.dispatch(actions.set_Is_Loged_IN(false));
    }
    else if (history.action==='PUSH'){
      console.log("On Home");
      
    }
  },[location])

  function handleClick() {
    
          console.log(val);

          if(val.isAllowded===true && (store.getState().Authentication.isLogedIn===true))
          {
            // Asume we have loged in.
            store.dispatch(actions.set_Is_Loged_IN(true));
            history.push("/"+val.path);
          }

          
  }
  return (
    <div>
      <p className={classes.title}>Join Siba Overflow Today </p>

      <p className={classes.subtitle}>
        Register yourself today and get full time support and career advice from
        our experts
      </p>
      <Box style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          classes={{
            root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
          }}
          onClick={handleClick}
        >
          Join Now
        </Button>
        <Button
          variant="outlined"
          classes={{
            root: classes.btnOutlined, // class name, e.g. `classes-nesting-root-x`
          }}
        >
          Explore the place
        </Button>
      </Box>
    </div>
  );
};
export default SideMainContainer;
