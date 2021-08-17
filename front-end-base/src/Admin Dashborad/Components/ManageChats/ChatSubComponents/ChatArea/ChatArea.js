import React from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChatList from './ChatList';
import MessageCompositionOptions from './MessageCompositionOptions';
import DrawerContent from '../Drawer/DrawerContent'
import { dimensions } from '../../ManageChats';
const drawerWidth = 300;


function ChatArea(props) {
  const classes = useStyles();
  const theme = useTheme();
  

    return (
        <Grid container>
            <Grid item xs={12}>
                {/* Heading */}
                <div className={classes.root}>
                   <main
                     className={clsx(classes.content, {
                       [classes.contentShift]: props.open,
                     })}
                   >
                    <div className={classes.drawerHeader} />

                    {/* <div className={classes.chatAreaContainer}>
                       
                    </div> */}
                    {/* <div className={classes.messageCompositionOptionsContainer}>
                       
                    </div> */}
                     <ChatList/>
                     <MessageCompositionOptions/>
                   </main>
                  
                   <Drawer

                     className={classes.drawer}
                     variant="persistent"
                     anchor="right"
                     open={props.open}
                     classes={{
                       paper: classes.drawerPaper,
                     }}
                   >
       
                     <div className={classes.drawerContentContainer}>
                         {/* Drawer content */}
                         <DrawerContent/>
                     </div>
                   </Drawer>
                   </div>
            </Grid>

        </Grid>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      height: `calc(100% - ${dimensions.drawerTop}px)`,
      top: dimensions.drawerTop
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 0),
      // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1, 
      padding: theme.spacing(0),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    drawerContentContainer:{

    },
    chatAreaContainer:{
     
    },
    messageCompositionOptionsContainer:{
    
    }
}))
export default ChatArea;