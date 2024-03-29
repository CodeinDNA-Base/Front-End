//React
import React from "react";

//Material-UI

import cx from "clsx";
import { Card, CardContent, Box, IconButton } from "@material-ui/core";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { makeStyles } from "@material-ui/core/styles";

//Material-UI Icons
import Facebook from "@material-ui/icons/Facebook";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

export const LinkedAccounts = () => {
  return <LinkedAccountsCard />;
};

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    textAlign: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
}));

const LinkedAccountsCard = React.memo(function ProfileCard() {
  const classes = useStyles();
  const shadowStyles = useFadedShadowStyles();
  return (
    <Card className={cx(classes.card, shadowStyles.root)}>
      <CardContent>
        <p className={classes.statValue}>Linked Accounts</p>
        <Box m={1} pt={3}>
          <IconButton color="primary">
            <LinkedIn fontSize="large" />
          </IconButton>

          <IconButton color="primary">
            <Github fontSize="large" />
          </IconButton>

          <IconButton color="primary">
            <Facebook fontSize="large" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
});
