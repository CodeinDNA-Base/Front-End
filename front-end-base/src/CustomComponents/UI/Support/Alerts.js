import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: ({ width }) => width,
    marginBottom: "0%",
  },
  alert: {
    backgroundColor: ({ bgColor }) => bgColor,
    color: ({ color }) => color,
  },
}));

export default function CustomAlerts({
  open,
  title,
  severity,
  size,
  setOpen,
  width = "auto",
  color,
  bgColor,
}) {
  const classes = useStyles({ width, bgColor, color });
  // const [open, setOpen] = React.useState(true);

  return (
    <Grid
      container
      spacing={1}
      alignItems="flex-start"
      justifyContent="center"
      className={classes.root}
    >
      <Collapse in={open}>
        <Alert
          severity={severity}
          className={classes.alert}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size={size}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {title}
        </Alert>
      </Collapse>
    </Grid>
  );
}
