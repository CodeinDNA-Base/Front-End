import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { StandardTextField } from "../../CustomComponents/UI/Form/StandardTextField";
import { RoundButton } from "../../CustomComponents/UI/Buttons/RoundButton";
import colors from "../../Theme/colors";
import { SmallHeading } from "../../CustomComponents/UI/Text/SmallHeading";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  selector: {
    height: 10,
  },
}));

export default function RegisterDetails({ handleSignUpWithEmailClicked }) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignInClick = () => {
    handleSignUpWithEmailClicked();
  };
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <SmallHeading title={"Complete your Information"} />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
              <StandardTextField
                variant="outlined"
                label="First Name"
                value={firstName}
                onChange={(value) => setFirstName(value)}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <StandardTextField
                variant="outlined"
                label="last Name"
                value={lastName}
                onChange={(value) => setLastName(value)}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <StandardTextField
                variant="outlined"
                label="User Name"
                value={userName}
                onChange={(value) => setUserName(value)}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Country</InputLabel>
                <Select
                  value={country}
                  onChange={({ target }) => setCountry(target.value)}
                  label="Country"
                  fullWidth
                  InputProps={{ classes: { input: classes.selector } }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <StandardTextField
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(value) => setPassword(value)}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the terms and the conditions"
              />
            </Grid>
          </Grid>
          <RoundButton
            type="submit"
            variant="contained"
            color={colors.white}
            bgColor={colors.info}
            handleClick={() => alert("sign up")}
            title="Sign Up"
            width='100%'
          />

          <Grid
            container
            justifyContent="flex-end"
            style={{ marginBottom: "5%", marginTop: "5%" }}
          >
            <Grid item>
              <p>Already have an account? </p>
              <div onClick={handleSignInClick} style={{ cursor: "pointer" }}>
                Sign In
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
