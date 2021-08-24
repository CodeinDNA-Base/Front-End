//ReactJS
import { useState } from "react";
import { Link } from "react-router-dom";

//Material-UI core  
import { Box, Grid, IconButton, MenuItem, useMediaQuery,Menu, Fade } from "@material-ui/core";

//Material-UI styles

//Icons
import MoreVerticalIcon from "@material-ui/icons/MoreVert"

//Theme and Styles
import "../Styles/PreviousPostContainer.css"

//Custom components

//Resources

export const PreviousPostContainer = () => {
    const isItExtraSmall = useMediaQuery("(max-width: 599px)");

  return (
      <Link to="viewpost" className="linkStyle">
    <Grid container className="previousPostContainer">
      <Grid item xs={12} sm={7} md={6} lg={6} xl={6}>
        <Box>
          <h4>Need MERN technology Developer</h4>
        </Box>
        <Box mt={-2}>
          <span> Posted 28 days ago by you</span>
        </Box>

        <Box>
          <p>Closed- 16 August 2021</p>
        </Box>
      </Grid>
      <Grid item xs={5} sm={2} md={3} lg={2} xl={2}>
        <Box display="flex">
          <h4>Status</h4>
        </Box>
        <Box mt={isItExtraSmall?-2:0}>
          <span> Open</span>
        </Box>
      </Grid>

      <Grid item xs={6} sm={2} md={2} lg={3} xl={3}>
        <Box display="flex">
          <h4>Seen By DNA</h4>
        </Box>
        <Box mt={isItExtraSmall?-2:0}>
          <span> Yes </span>
        </Box>
      </Grid>

      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <Box mt={2}>
            <PostOptionsMenu />
        </Box>
      </Grid>
    </Grid>
    </Link>
  );
};


function PostOptionsMenu() {
  

    const options = [{
        optionTitle: "Reuse Post", //When reuse post clicked, autofil the modal with each field and allow user to submit request
        route: "/",    
    },
    {
      optionTitle: "View Post",
      route: "/viewpost",
    },
    {
        optionTitle:"Delete",
        route:"/"
    }
    ];
  
    const ITEM_HEIGHT = 48;
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVerticalIcon />
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
          TransitionComponent={Fade}
        >
          {options.map(({optionTitle, route}) =>{
            return(
              <Link to={route} className="linkStyle">
              <MenuItem key={optionTitle}>
                {optionTitle}
              </MenuItem>
              </Link>
            )
          })}
        </Menu>
      </div>
    );
  }
  