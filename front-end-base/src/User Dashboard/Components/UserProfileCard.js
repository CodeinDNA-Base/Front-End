import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';


//Resources
import profilePic from '../Resources/nadir.jpg'
import { Rating } from '@material-ui/lab';

export const UserProfileCard=()=> {
  return (
    <div>
      <ProfileCard></ProfileCard>
    </div>
  );
}


const useStyles = makeStyles(({ palette }) => ({
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
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
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
}));

export const ProfileCard = React.memo(function ProfileCard() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();

  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        <Avatar className={styles.avatar} src={profilePic} onClick={()=>{alert("Go to my profile page")}} style={{cursor:"pointer"}}/>
        <h3 className={styles.heading} onClick={()=>{alert("Go my profile page")}} style={{cursor:"pointer"}}>Alan Podemski</h3>
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
    </Card>
  );
});
