import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../Theme/colors";
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from "@material-ui/icons/Lock";
import { Divider } from "@material-ui/core";
import { DividerInFooter, DividerInProjects } from "./HorizontalLine";
import { TextFieldWithIcon } from "../../CustomComponents/UI/Form/TextFields";
import { RoundButton } from "../../CustomComponents/UI/Buttons/RoundButton";
import { SmallHeading } from "../../CustomComponents/UI/Text/SmallHeading";
import "./Styles/hrStyle.css";
import CustomAlerts from "../../CustomComponents/UI/Support/Alerts";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.white,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "10%",
    alignItems: "center",
    paddingTop: "3%",
  },

  text: {
    marginBottom: "5%",
  },
}));

export default function Register() {
  const classes = useStyles();
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isIncorrectEmail, setIsIncorrectEmail] = useState(true);
  const handleEmailPressEnter=()=>{

  }
  const handleContinueWithEmailClick=()=>{

  }

  const handleUserEmail = (value) => {
    setUserEmail(value);
    console.log(value);
  };

  return (
    <Box boxShadow={2} justifyContent="center" alignContent="center">
      <form className={classes.form}>
        <SmallHeading title={"Get your free account"} />
        <TextFieldWithIcon
          label="Email address"
          icon={<MailIcon />}
          value={userEmail}
          onChange={handleUserEmail}
          type={"text"}
          onEnter={handleEmailPressEnter}
        />
        <CustomAlerts
          title={" Would you like to use your work email instead? "}
          severity={"warning"}
          size={"small"}
          open={isIncorrectEmail}
          setOpen={setIsIncorrectEmail}
          width={"100%"}
          bgColor={colors.white}
          color={colors.warning}
        />
        
        <Grid
          style={{ marginTop: "5%" }}
          container
          spacing={1}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item>
            <RoundButton
              title={"Continue with Email"}
              width={280}
              color={colors.white}
              bgColor={colors.secondary}
              margin={"3% 0% 5%  0%"}
              handleClick={handleContinueWithEmailClick}
            />
            <div class="separator">OR</div>
          </Grid>

          <Grid item>
            <RoundButton
              title={"Continue with Google"}
              width={280}
              color={colors.white}
              bgColor={colors.info}
              margin={"3% 0% 10%  0%"}
              icon={<MailIcon  />}
            />
          </Grid>
        </Grid>
        
      </form>
    </Box>
  );
}
