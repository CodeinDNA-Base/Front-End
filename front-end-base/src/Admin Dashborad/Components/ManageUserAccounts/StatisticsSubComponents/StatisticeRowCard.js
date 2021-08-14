import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const ITEM_HEIGHT = 48;
function StatisticeRowCard(props) {
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
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
      ];    
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={2}>
                    {/* thumbnail */}
                    <div > 
                    <img className={classes.logo} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                      </div>
                </Grid>
                <Grid item xs={3}>
                    {/* Service name */}
                    <h3>Client Name</h3>
                </Grid>
                <Grid item xs={2}>
                    {/* Service name */}
                    <h4>User ID</h4>
                </Grid> 
                <Grid item xs={2}>
                    {/* Service name */}
                    <h4>Last Seen</h4>
                </Grid> 
                <Grid item xs={2}>
                    {/* Service name */}
                    <h4>Orders in progress</h4>
                </Grid>
               
                <Grid item xs={1}>
                    {/* thumbnail */}
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
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
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
        border:'1px solid #c4b0af',
       
        marginTop:"2%"
    },
    logo: {
      width: 70,
      height: 70,
      borderRadius: 80,
      marginLeft: "2%",
      marginTop: "2%",
      border:'1px solid black',
    
    },
    logoImg:{
        height:50,
        width:50,
        marginTop:-45,
        marginLeft:5    
    }
    
}))
export default StatisticeRowCard;