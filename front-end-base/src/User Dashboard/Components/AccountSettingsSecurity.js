//ReactJS
import React, { useState } from "react";

//Material-UI core
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  TextField,
  Typography,
  Card,
  CardHeader,
  CardContent,

} from "@material-ui/core";

//material-UI styles
import { makeStyles } from "@material-ui/core/styles";

//Icons
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Resources
import { Select } from "@material-ui/core";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

export const AccountSettingsSecurity = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Password and Security</Typography>
      </Box>
      <PersonalInfoContainers />
    </div>
  );
};

function PersonalInfoContainers() {
  return (
    <>
      <Password />
      <SecurityQuestion />
    </>
  );
}

const passwordStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
}));

const Password = () => {
  const classes = passwordStyles();

  const [strength, setStrength] = useState(0);
  const [strengthColor, setStrengthColor] = useState("secondary");

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function handleOldPassword(event) {
    setOldPassword(event.target.value);
  }

  function handleNewPassword(event) {
    const newPass = event.target.value;
    setNewPassword(newPass);
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );

    if (strongRegex.test(newPass)) {
      // setStrengthColor("primary")
      setStrength(100);
    } else if (mediumRegex.test(newPass)) {
      // setStrengthColor("secondary")
      setStrength(50);
    } else {
      // setStrengthColor("secondary")
      setStrength(0);
    }
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader title={<Typography variant="h4">Password</Typography>} />
      <Divider />
      <CardContent>
        <Box mt={2}>
          <TextField
            label="Current Password"
            id="outlined-size-small"
            variant="outlined"
            type="password"
            size="small"
            value={oldPassword}
            required
            fullWidth
            onChange={handleOldPassword}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="New Password"
            id="outlined-size-small"
            variant="outlined"
            type="password"
            size="small"
            value={newPassword}
            fullWidth
            required
            onChange={handleNewPassword}
            helperText={
              <div>
                <span>
                  Must containe small and capital letters, and a number with
                  lenght atleast 8
                </span>
                {/* <LinearProgress variant="determinate" value={strength} color={strengthColor}/> */}
              </div>
            }
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Confirm Password"
            id="outlined-size-small"
            variant="outlined"
            type="password"
            size="small"
            value={confirmPassword}
            required
            fullWidth
            onChange={handleConfirmPassword}
          />
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary">
              Update
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const securityQuestionStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
  formControl: {
    width: "50%",
    padding: "2rem",
  },
}));

const SecurityQuestion = () => {
  const classes = securityQuestionStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        }
        title={<Typography variant="h4">Security Question</Typography>}
      />
      <Divider />
      <CardContent>
        <SecurityQuestionOptions />
      </CardContent>
    </Card>
  );
};

const optionsStyles = makeStyles((theme) => ({
  text: {
    fontWeight: "bold",
    color: "black",
  },
}));

const SecurityQuestionOptions = () => {
  const classes = optionsStyles();
  const [securityQuestion, setSecurityQuestion] = useState(0);

  function handleSecurityQuestion(event) {
    setSecurityQuestion(event.target.value);
  }

  const borderSelectClasses = useBorderSelectStyles();

  const menuProps = {
    classes: {
      list: borderSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + borderSelectClasses.icon}
      />
    );
  };

  const questions=[
    {
      questionId:1,
      questionContent:"What was the name of your elementary school?"
    },
    {
      questionId:2,
      questionContent:"What was the name of your first pet?"
    },
    {
      questionId:3,
      questionContent:"What was your childhood nickname?"
    },
    {
      questionId:4,
      questionContent:"In what city did your parents meet?"
    },
    {
      questionId:5,
      questionContent:"What is the name of your favorite childhood friend?"
    },    
  ]
  return (
    <FormControl fullWidth>
      <Box mt={2} display="flex">
        <Box>
          <Select
            disableUnderline
            classes={{ root: borderSelectClasses.select }}
            labelId="inputLabel"
            IconComponent={iconComponent}
            MenuProps={menuProps}
            value={securityQuestion}
            onChange={handleSecurityQuestion}
          >
            <MenuItem value={0} disabled>
              <Typography className={classes.text}>
              Select Security Question
              </Typography>
            </MenuItem>

            {
              questions.map(({questionId, questionContent})=>{
                return<MenuItem value={questionId}>
                  <Typography className={classes.text}>
                    {questionContent}
                  </Typography>
                </MenuItem>
              })
            }
          </Select>
        </Box>
      </Box>
    </FormControl>
  );
};