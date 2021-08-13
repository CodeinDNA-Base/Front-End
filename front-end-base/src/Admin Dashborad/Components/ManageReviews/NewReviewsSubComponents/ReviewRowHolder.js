import { Grid, makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const ITEM_HEIGHT = 48;
function ReviewRowHolder(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [expand, setExpand] = useState(false);

    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const options = [
        'View review',
        'Cancel'
      ];    
    
  const onClick = () => {
    setExpand(!expand);
  };
  const text = "It was very nice to work with these guys ... they are just awsomes";
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={1}>
                    {/* thumbnail */}
                    <div className={classes.logo}> 
                  
                    <img className={classes.logoImg} src="https://img.icons8.com/flat-round/64/000000/two-of-five-stars.png"/>
                    
                    </div>
                </Grid>
                <Grid item xs={2}>
                    {/* Service name */}
                    <div className={classes.optContainer}>
                    <h3>Client Name</h3>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <div className={classes.optContainer}>
                       <h5>Order id</h5>
                    </div>
                </Grid>
               
                <Grid item xs={2}>
                    {/* Service name */}
                    <div className={classes.optContainer}>
                    <h5>Target Catagory</h5>
                    </div>
                </Grid> 
                <Grid item xs={2}>
                    {/* Service name */}
                    <div className={classes.optContainer}>
                    <h5>Rating score</h5>
                    </div>
                </Grid> 
              
                <Grid item xs={3}>
                    {/* Service name */}
                    <div className={classes.optContainer}>
                    <ShowMoreText
        lines={1}
        more={<ExpandMore />}
        less={<ExpandLess />}
        onClick={onClick}
        expanded={expand}
        width={180}
        height={10}
      >
        {text}
      </ShowMoreText>
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
        // border:'1px solid black',
      
        paddingTop:"25%",
    },
    logoImg:{
        height:50,
        width:50,
        marginTop:-10,
        marginLeft:10   
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

export default ReviewRowHolder;