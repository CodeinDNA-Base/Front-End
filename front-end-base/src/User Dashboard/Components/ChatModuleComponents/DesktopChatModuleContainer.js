import { Button, Grid} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ContactList from './ContactList/ContactList';
import ChatArea from './ChatArea/ChatArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPhone,faVideo} from '@fortawesome/free-solid-svg-icons';
import { Headingfonts,TextFonts } from '../../../Theme/fonts';

export const dimensions = {

  drawerWidth : 300,
  contactListHeight:435,
  chatListHeight:435,
  marginLeft_Container:0,
  marginRight_Container:0,
  marginTop_Container:0,
  drawerTop:130,
}

function DesktopChatModuleContainer(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      // setOpen(!open);
    };
    
    const handelContactClick = (event,selectedContctId)=>{
     alert("Contact id:"+selectedContctId)
    }
    return (
       
    <Grid container className={classes.container}>
        <Grid item xs={3} className={classes.contactListContainer}>
                    {/* Contacts list */}
                    <ContactList handelContactClick={handelContactClick}/>
        </Grid>
        <Grid item xs={9} className={classes.chatContainer}>
                    {/* Chat */}
                    <div className={classes.contactHading} onClick={handleDrawerOpen}>
                      {/* Heading */}
                     <Grid container>
                       <Grid item xs={1} className={classes.contactHeadingContentContainer}>
                          <Avatar alt="Z" src={"\src\Images\profiles.jpg"} className={classes.large} />
                       </Grid>
                       <Grid item xs={8} className={classes.contactHeadingContentContainer}>
                         <div className={classes.contactName}>
                            {/* Name */}
                           Codein DNA   
                         </div>
                         <div className={classes.lastSeenCotainer}>
                           {/* Last seen */}
                           Last seen : Today 9:26 PM
                         </div>
                       </Grid>
                       <Grid item xs={1} className={classes.contactHeadingContentContainer}>
                         <div className={classes.phoneIconContainer}>
                          <FontAwesomeIcon icon={faPhone} size="lg"/>
                         </div>
                       </Grid>
                       <Grid item xs={1} className={classes.contactHeadingContentContainer}>
                         <div className={classes.phoneIconContainer}>
                          <FontAwesomeIcon icon={faVideo} size="lg"/>
                         </div>
                       </Grid>
                       <Grid item xs={1} className={classes.contactHeadingContentContainer}>
                         <div className={classes.phoneIconContainer}>
                          <FontAwesomeIcon icon={faInfo} size="lg"/>
                         </div>
                       </Grid>
                     </Grid>
                    </div>
                    <div>
                      {/* Chat area and drawer */}
                      <ChatArea open={open}/>
                    </div>
        </Grid>
    </Grid>
      
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        height:'100%',
        // background:'green',
        width:'100%',
       
    },
    contactListContainer:{
        // backgroundColor:"blue"
    },
    chatContainer:{
        // backgroundColor:"white"
    },
      chatAreaHeaderContainer:{

      },
      contactHading:{
       
        boxShadow: "1px 1px 1px #9E9E9E",
        height:83 ,
        cursor:'pointer',
        // backgroundColor:"blue",
        marginTop:'-1.8%'
      },
      large:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginTop:"4%",
        marginLeft:'10%'
      },
      contactName:{
        font:Headingfonts.extraSmall,
        marginTop:'0.5%',
        fontSize:30
      },
      lastSeenCotainer:{
        fontSize:12,
        font:TextFonts.extraSmall,
        marginLeft:'0.7%'
      },
      contactHeadingContentContainer:{
   
        marginTop:"2%"
      },
      phoneIconContainer:{
        // backgroundColor:"green",
        marginTop:"20%"
      }
}))
export default DesktopChatModuleContainer;