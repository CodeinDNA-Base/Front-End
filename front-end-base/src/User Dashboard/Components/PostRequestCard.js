import React from "react";

import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { Button, Box } from "@material-ui/core";

export const PostRequestCard = () => {
  return (
    <RequestCard />
  );
};


const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
}));

export const RequestCard = React.memo(function ProfileCard() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
      <p className={styles.statValue}>
        Get offers from sellers for your project
      </p>
      <Box m={1} pt={3}>
        <Button variant="outlined" >Post a Request</Button>
      </Box>
      <Box m={1}>
        <Button variant="contained" color="primary">Show Previous</Button>
      </Box>
      </CardContent>
    </Card>
  );
});