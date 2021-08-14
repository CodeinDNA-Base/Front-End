import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const ITEM_HEIGHT = 48;
function AccountRowCardHolder(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const options = [
        'View order',
        'Cancel'
      ];    
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={1}>
                    {/* thumbnail */}
                    <div > 
                    <img className={classes.logo} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    
                    </div>
                </Grid>
                <Grid item xs={2}>
                    {/* Service name */}
                    <div className={classes.optContainer}>
                    <h3>Client Name</h3>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className={classes.optContainer}>
                       <h5>User id</h5>
                    </div>
                </Grid>
               
                <Grid item xs={3}>
                    {/* Service name */}
                    <div className={classes.optContainer}>
                    <h5>Last seen : ONLINE</h5>
                    </div>
                </Grid> 
                <Grid item xs={3}>
                    {/* Service name */}
                    <div className={classes.optContainer}>
                    <h5>Order in progress : Yes/No</h5>
                    </div>
                </Grid> 
              
               
                <Grid item xs={1}>
                    {/* thumbnail */}
                    <div  className={classes.optContainer}>
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
                      >
                        {options.map((option,index) => (
                          <MenuItem key={option} selected={option === 'Pyxis'} onClick={
                            (e)=>{
                              handleClose();
                              props.hanelScreenSwitch(e,index);
                            }
                          }>
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        boxShadow: "2px 2px 2px #9E9E9E",
        border:'1px solid #f7f2f7',
       
        marginTop:"2%"
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 80,
        marginLeft: "2%",
        marginTop: "2%",
        border:'1px solid black',
      
        // paddingTop:"25%",
    },
    logoImg:{
        
    },
    optContainer:{
      borderLeft:'1px solid black',
      // backgroundColor:"blue",
      height:60,
      marginTop:7,
      textAlign:'center',
      paddingTop:'1%'
    }
    
}))
export default AccountRowCardHolder;