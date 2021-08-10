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

const ITEM_HEIGHT = 40;

function ProjectHolder(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    'Edit',  
    'Get Share link',
  ];
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            CodeinDNA
          </Avatar>
        }
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
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title="Paella dish"
      />
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
        <div className={classes.ratingBar}>

        <div className={classes.ratingsRoot}>
        <h3 className={classes.ratingText}>Rating</h3>
        <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        />
        
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>
        </div>
        <div className={classes.reviewBar}>
             <div className={classes.wasItHelpFullOrNotContainer}>
                {/* Was helpfull or not */}
                <div className="Thumb">
                {/* Thumbs up */}
                <FontAwesomeIcon size="sm" icon={faThumbsUp} />
                </div>
                <div className="ThumbFonts">
                    {/* Help full */}
                    <h6>Likes [12]</h6>
                </div>
                <div className="Thumb">
                {/* Thumbs up */}
                <FontAwesomeIcon size="sm" icon={faThumbsDown} />
                </div>
                <div className="ThumbFonts">
                    {/* Help full */}
                    <h6>Dislikes [22]</h6>
                </div>
            </div>
        </div>
        
      </CardContent>
      {/* <CardActions disableSpacing className={classes.bottomButtons}>
        <IconButton>
          
          <EditOutlined />

        </IconButton>
        <IconButton >
          
          <DeleteSharp />
        
        </IconButton>
        
        <IconButton>
          
          <UpdateRounded />
        
        </IconButton>
      </CardActions> */}
      
    </Card>
  );
}
const useStyles = makeStyles((theme)=>({
    container:{
        height:390
    },
    bottomButtons:{
      paddingLeft:'25%'
    },
    bottomButtonsContainer:{
      
        height:50,
        width:'100%'
    },
    root: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor:"#1f0678",
        fontSize:7
      },
      ratingsRoot: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
      },
      ratingBar:{

      },
      reviewBar:{
        marginTop:-30,
        height:50
      },
      ratingText:{
          paddingRight:'6%'
      },
      wasItHelpFullOrNotContainer:{
       
    }
}))

export default ProjectHolder;