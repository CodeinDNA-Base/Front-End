//ReactJS
import React, { useState } from "react";

//Material-UI core
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";

//Material-UI styles

//Custom Components

//Icons

//Styles and Theme

//Router

//Resources

export const FilterByCategory = () => {
  return (
    <FormControl component="fieldset">
      <Typography variant="h6">Post Category</Typography>
      <FormGroup aria-label="position" row>
        {[
          "Java",
          "HTML5",
          "CSS3",
          "JS",
          "JQuery",
          "Semantic UI",
          "ReactJS",
          "Bootstrap",
          "NodeJS",
          "Express",
          "Mongo",
        ].map((elm) => {
          return (
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label={elm}
              labelPlacement="end"
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
