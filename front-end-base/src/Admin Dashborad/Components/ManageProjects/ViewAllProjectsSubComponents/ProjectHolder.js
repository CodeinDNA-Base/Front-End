import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { DeleteSharp } from '@material-ui/icons';
import { UpdateRounded } from '@material-ui/icons';
import { EditOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import './Styles.css'
import { lightBorder } from '../../../../Theme/borders';

const ITEM_HEIGHT = 40;

function ProjectHolder(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (opt) => {
    setAnchorEl(null);
    
  };

  const options = [
    'Edit',  
    'Get Share link',
  ];
  return (
    <Card className={classes.root}
        elevation={0}
    >
    <CardHeader
        action={
     <IconButton aria-label="settings">
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
        {options.map((option,index) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={(e)=>{
            // handleClose(index)
            props.handelOptionSelection(e,index,props.data)
            setAnchorEl(null);
    
          }}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      </div>
          </IconButton>
        }
        title={props.data.projectTitle}
        subheader={props.data.projectPublishDate}
      />

      <CardMedia
        className={classes.media}
        image={props.data.projectThumbNail}
       
      />
      <CardContent>
        {/* Controls */}
      </CardContent> 
    </Card>
  );
}
const useStyles = makeStyles((theme)=>({
    container:{
        height:390
    },
    root: {
        maxWidth: 345,
        border:lightBorder,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
     
}))

export default ProjectHolder;