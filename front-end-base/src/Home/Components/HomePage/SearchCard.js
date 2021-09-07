import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CardHeader } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import colors from "../../../Theme/colors";
import { TextFonts, Headingfonts } from "../../../Theme/fonts";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
    transition: "transform 0.15s ease-in-out",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
  button: {
    backgroundColor: colors.secondary,
    color: colors.white,
  },
  media: {
    height: 140,
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "85%",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  cardContent: {
    shadow: "none",
    focus: "none",
  },
  cardHeader: {
    font: Headingfonts.extraSmall,
  },
}));

export default function SearchCard() {
  const classes = useStyles();

  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
  return (
    <Card
      className={classes.root}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
    >
      <CardHeader
        classes={{ title: classes.cardHeader }}
        title="Get the beat team today, Search Anythig!!!"
      />

      <CardContent>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Keyword" />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField id="standard-basic" label="Price" />
        </form>
      </CardContent>

      <CardActions style={{ marginBottom: 20 }}>
        <Button
          variant="contained"
          style={{ width: "100%" }}
          classes={{
            root: classes.button, // class name, e.g. `classes-nesting-root-x`
          }}
        >
          Search
        </Button>
      </CardActions>
    </Card>
  );
}
