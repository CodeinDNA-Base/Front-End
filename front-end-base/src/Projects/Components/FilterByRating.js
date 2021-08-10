import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import { Radio, RadioGroup, FormControlLabel, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const ratingStyleHook = makeStyles((theme) => ({
    // root: {
    //   [theme.breakpoints.down("sm")]: {
  
    //     marginBottom: "2px",
    //   },
    //   width: "18rem",
    //   display:"inline"
  
    // },
    elements: {
      display: "inline",
    },
  }));
  
export const FilterByRating = () => {
    const classes = ratingStyleHook();
    const [value, setValue] = React.useState("");
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Ratings</Typography>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
          className={classes.elements /*,root: classes.root*/}
        >
          {[1, 2, 3, 4].map((elm, ind) => {
            return (
              <FormControlLabel
                value={"d" + ind}
                control={<Radio />}
                label={<Rating value={ind + 1} readOnly />}
              />
            );
          })}
        </RadioGroup>
        <Button
          variant="contained"
          className={classes.priceRangeFormButtons}
          style={{ backgroundColor: "#011c38", color: "white" }}
          size="small"
        >
          Apply
        </Button>
        <Button
          variant="contained"
          className={classes.priceRangeFormButtons}
          color="secondary"
          size="small"
        >
          Clear
        </Button>
      </form>
    );
  };
  