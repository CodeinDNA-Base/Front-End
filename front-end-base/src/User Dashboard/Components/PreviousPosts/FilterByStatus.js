//ReactJS
import React, { useState } from "react";

//Material-UI core
import {
  Box,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

//Material-UI styles

//Custom Components

//Icons

//Styles and Theme

//Router

//Resources

const statusFilterStyles = makeStyles((theme) => ({
  elements: {
    display: "inline",
  },
  ratingContainer: {
    flex: 1,
  },
}));

export const FilterByStatus = () => {
  const classes = statusFilterStyles();
  const [value, setValue] = useState("");

  const options = [
    {
      optionTitle: "All",
      value: 0,
    },
    {
      optionTitle: "Drafts",
      value: 1,
    },
    {
      optionTitle: "Open",
      value: 2,
    },
    {
      optionTitle: "Filled",
      value: 3,
    },
    {
      optionTitle: "Closed",
      value: 4,
    },
  ];

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const isItXsOrSm = useMediaQuery("(max-width: 959px)");

  return (
    <Box>
      <Typography variant="h6">Post Status</Typography>

      <RadioGroup
        aria-label="Rating"
        name="ratingOptions"
        value={value}
        onChange={handleRadioChange}
        className={classes.elements}
      >
        {options.map(({ optionTitle, value }) => {
          return (
            <FormControlLabel
              value={"" + value}
              control={<Radio size="small" color="primary" />}
              label={<Typography>{optionTitle}</Typography>}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};
