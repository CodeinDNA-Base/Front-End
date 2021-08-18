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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import './Styles.css'
import { Divider } from '@material-ui/core';

import cx from 'clsx';
import Box from '@material-ui/core/Box';

import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const ITEM_HEIGHT = 40;

function AccountCardHolder(props){
  const [value, setValue] = React.useState(2);
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const [hover, setHover] = React.useState(-1);

  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
     
      <CardContent>
        <Avatar className={styles.avatar} src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} onClick={()=>{alert("Go to my profile page")}} style={{cursor:"pointer"}}/>
        <h3 className={styles.heading} onClick={(e)=>{

          props.handelOptionSelection(e,props.projectKey);

        }} style={{cursor:"pointer"}}>Alan Podemski</h3>
        <Box p={1} mt={0}>
        <Rating value={3} size="small" readOnly ></Rating><span  onClick={()=>{alert("Go to reviews from Sellers")}} style={{cursor:"pointer"}}> 4.7</span>
        </Box>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={1} flex={'auto'}>
          <p className={styles.statLabel}>Response Time</p>
          <p className={styles.statValue}>1 Hour</p>
        </Box>
        <Box p={1} flex={'auto'}>
          <p className={styles.statLabel}>Last Seen</p>
          <p className={styles.statValue}>Active</p>
        </Box>
      </Box>
      <Divider light />
      <Box display={'flex'}>
        <Box p={1} flex={'auto'}>
          <p className={styles.statLabel}>Balance</p>
          <p className={styles.statValue}>100$</p>
        </Box>
        <Box p={1} flex={'auto'}>
          <p className={styles.statLabel}>Amount Spent</p>
          <p className={styles.statValue}>+1K$</p>
        </Box>
      </Box>
    <Divider light/>
      <Box display={'flex'}>
      <Box p={1} flex={'auto'} >
          <p className={styles.statLabel}>Payment method</p>
          <p className={styles.statValue}>Verified</p>
        </Box>
        <Box p={1} flex={'auto'}>
          <p className={styles.statLabel}>Total Purchases</p>
          <p className={styles.statValue}>007</p>
        </Box>
      </Box>
      <Divider light/>
      <Box display={'flex'}>
      <Box p={1} flex={'auto'} >
          <p className={styles.viewAccountBtn} onClick={(e)=>{

            props.handelOptionSelection(e,props.projectKey);
          
        }}>View Account</p>
        </Box>
      </Box>
    </Card>
  );
}

const useStyles = makeStyles(({theme})=>({
    container:{
        height:300,
        
    },
    card: {
      borderRadius: 12,
      textAlign: 'center',
    },
    avatar: {
      width: 80,
      height: 80,
      margin: 'auto',
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: '0.5px',
      marginTop: 8,
      marginBottom: 0,
    },
    subheader: {
      fontSize: 14,
      // color: theme.grey[500],
      marginBottom: '0.875em',
    },
    statLabel: {
      fontSize: 12,
       // color: theme.grey[500],
      fontWeight: 500,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      margin: 0,
    },
    statValue: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    viewAccountBtn:{
      cursor:'pointer',
      // backgroundColor:"#2a0e47",
      fontSize: 12,
       // color: theme.grey[500],
      fontWeight: 500,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      margin: 0,
      '&:hover': {
        background: "#e8e6eb",
      }
    }
}))

export default AccountCardHolder;