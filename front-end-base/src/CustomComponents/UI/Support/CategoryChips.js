import React from "react";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import colors from "../../../Theme/colors";
import { TextFonts } from "../../../Theme/fonts";
const CategoryChipsStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",

    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  // chip: {
  //   font: TextFonts.XXSmall,
  //   color: ({ color }) => color,
  //   backgroundColor: ({ bgColor }) => bgColor
  // },
}));
export const CategoryChips = ({
  label,
  color = colors.primary,
  bgColor = colors.white,
  link,
  margin,
}) => {
  const CategoryChipsStyles = makeStyles({ color, bgColor, margin });
  return (
    <div className={CategoryChipsStyles.root} style={{ margin: margin }}>
      <Chip
        label={label}
        component="a"
        href={link}
        clickable
        variant="outlined"
        style={{
          font: TextFonts.XXSmall,
          color: color,
          backgroundColor: bgColor,
        }}
      />
    </div>
  );
};
