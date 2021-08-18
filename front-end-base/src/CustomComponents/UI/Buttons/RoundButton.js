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
  handleClcik,
  width = 250,
  variant = "contained",
  borderColor,
  margin,
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
      onClick={handleClcik}
      classes={{ root: classes.root }}
    >
      {title}
    </Button>
  );
};
