import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../Theme/colors";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { Divider } from "@material-ui/core";
import { DividerInFooter, DividerInProjects } from "./HorizontalLine";
import { TextFieldWithIcon } from "../../CustomComponents/UI/Form/TextFields";
import { RoundButton } from "../../CustomComponents/UI/Buttons/RoundButton";
import { SmallHeading } from "../../CustomComponents/UI/Text/SmallHeading";
import "./Styles/hrStyle.css";
import CustomAlerts from "../../CustomComponents/UI/Support/Alerts";
//import GoogleIcon from '@material-ui/icons/Google';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.white,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "10%",
    alignItems: "center",
    paddingTop: "5%",
  },

  text: {
    marginBottom: "5%",
  },
}));

export default function LoginIn() {
  const classes = useStyles();
  const [userPassword, setUserPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [isIncorrectUserId, setIsIncorrectUserId] = useState(false);
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(true);
  const handleUserPassword = (value) => {
    setUserPassword(value);
    console.log(value);
  };
  const handleUserId = (value) => {
    setUserId(value);
    console.log(value);
  };

  return (
    <Box boxShadow={2} justifyContent="center" alignContent="center">
      <form className={classes.form}>
        <SmallHeading title={"Login to CODEINDNA"} />
        <TextFieldWithIcon
          label="Email or Phone number"
          icon={<AccountCircle />}
          value={userId}
          onChange={handleUserId}
          type={"text"}
        />
        <CustomAlerts
          title={"User not exists"}
          severity={"error"}
          size={"small"}
          open={isIncorrectUserId}
          setOpen={setIsIncorrectUserId}
          width={"100%"}
          bgColor={colors.white}
          color={colors.error}
        />
        <TextFieldWithIcon
          label="Password"
          icon={<LockIcon />}
          value={userPassword}
          onChange={handleUserPassword}
          type={"password"}
        />
        <CustomAlerts
          title={"Incorrect Password"}
          severity={"error"}
          size={"small"}
          open={isIncorrectPassword}
          setOpen={setIsIncorrectPassword}
          width={"100%"}
          bgColor={colors.white}
          color={colors.error}
        />
        <Grid
          style={{ marginTop: "10%" }}
          container
          spacing={1}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item>
            <RoundButton
              title={"Log in"}
              width={280}
              color={colors.white}
              bgColor={colors.secondary}
              margin={"0% 0% 5%  0%"}
            />
            <div class="separator">OR</div>
          </Grid>

          <Grid item>
            <RoundButton
              title={"Continue with Google"}
              width={280}
              color={colors.white}
              bgColor={colors.info}
              margin={"0% 0% 5%  0%"}
              icon={<AccountCircle  />}
            />
          </Grid>
        </Grid>
        <DividerInProjects />

        <Grid
          container
          spacing={1}
          justifyContent="center"
          style={{ marginTop: "5%" }}
          alignItems="center"
        >
          <Grid item>
            <Typography>Don't have an account yet? Create Now!</Typography>
            <RoundButton
              title={"Sign Up"}
              width={280}
              color={colors.success}
              variant={"outlined"}
              borderColor={colors.success}
              margin={"10% 0% 10%  0%"}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
