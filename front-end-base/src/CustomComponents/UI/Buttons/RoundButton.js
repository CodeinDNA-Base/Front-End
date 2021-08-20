import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
const RoundButtonStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ bgColor }) => bgColor && bgColor,
    color: ({ color }) => color,
    width: ({ width }) => width,
    borderRadius: 20,
    borderColor: ({ borderColor }) => borderColor,
    margin: ({ margin }) => margin,
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: ({ bgColor }) => bgColor && bgColor,
    },
  },
}));
export const RoundButton = ({
  title,
  color,
  bgColor,
  handleClick,
  width,
  variant = "contained",
  borderColor,
  margin,
  icon,
  type
}) => {
  const props = {
    color,
    bgColor,
    width,
    borderColor,
    margin,
  };
  const classes = RoundButtonStyles(props);
  return (
    <Button
      variant={variant}
      onClick={handleClick}
      classes={{ root: classes.root }}
      startIcon={icon  }
      type={type}
      fullWidth
    >
      {title}
    </Button>
  );
};
