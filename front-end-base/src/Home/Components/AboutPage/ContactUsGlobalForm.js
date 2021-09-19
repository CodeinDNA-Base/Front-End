import React, { useEffect, useState } from "react";
import { Divider, Grid, makeStyles, Box } from "@material-ui/core";
import { SmallHeading } from "../../../CustomComponents/UI/Text/SmallHeading";
import { TextField } from "@material-ui/core";
import colors from "../../../Theme/colors";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import { TextFonts } from "../../../Theme/fonts";
import { useMediaQuery } from "@material-ui/core";
import AttachmentSharpIcon from "@material-ui/icons/AttachmentSharp";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectStandardQueries,
  sendContactFormDetails,
  loadStandardQueries,
} from "../Slices/AboutPageSlices/ContactUsGlobalFormSlice";

// temp queries
const queries = [
  { label: "How i can place my order", value: "How i can place my order" },
  {
    label: "How to register for new account",
    value: "How to register for new account",
  },
  { label: "I forget my email address", value: "I forget my email address" },
];

// styles
const useContactFormStyles = makeStyles(() => ({
  textArea: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "7%",
  },
  textField: {
    width: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "49%" : "100%",
  },
  fonts: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
  },
  margin: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "3%" : "6%",
  },
  marginRightOne: {
    marginRight: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen && "1%",
  },
  marginLeftOne: {
    marginLeft: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen && "1%",
  },
  card: {
    boxShadow:
      "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.19)",
    width: "80%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "5%",
  },
  attachmentIcon: {
    float: "left",
    transform: "rotate(145deg)",
    cursor: "pointer",
  },
}));


//ContactUsGlobalForm
const ContactUsGlobalForm = () => {
  // redux
  const dispatch = useDispatch();
  const standard_queries = useSelector(selectStandardQueries);
  const { loadStandardQueriesIsLoading } = useSelector(
    (state) => state.contactFormDetails
  );
  const { loadStandardQueriesHasError } = useSelector(
    (state) => state.contactFormDetails
  );
  const { sendContactFormDetailsIsLoading } = useSelector(
    (state) => state.contactFormDetails
  );
  const { sendContactFormDetailsHasError } = useSelector(
    (state) => state.contactFormDetails
  );

  useEffect(() => {
    dispatch(loadStandardQueries());
  }, [dispatch]);

  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  // local states
  const [query, setQuery] = useState("");
  const [customeQuery, setCustomeQuery] = useState("");
  const classes = useContactFormStyles(isDesktopOrLaptopOrTabletScreen);
  const [isDisplayOtherQueryField, setIsDisplayOtherQueryField] =
    useState("none");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // hanlders
  const handleSetName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleSetEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleQueryChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    if (event.target.value !== "Other") {
      setIsDisplayOtherQueryField("none");
      setCustomeQuery("");
    } else {
      setIsDisplayOtherQueryField("block");
    }
  };
  const handleSetDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const handleSetCustomeQuery = (event) => {
    event.preventDefault();
    setCustomeQuery(event.target.value);
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();
    let userQuery = isDisplayOtherQueryField === "none" ? query : customeQuery;
    dispatch(
      sendContactFormDetails({ name, email, description, userQuery })
    ).then(() => {
      alert("submitted");
      clearForm();
    });
  };

  const clearForm = () => {
    setCustomeQuery("");
    setDescription("");
    setQuery(queries[0].label);
    setEmail("");
    setName("");
  };
  return (
    <Grid container justifyContent="center" alignItems="center">
      <form className={classes.card}>
        <SmallHeading title="Share your Queries" />
        <Box display="inline">
          <TextField
            id="name"
            label="Full Name"
            defaultValue=""
            variant="outlined"
            className={[
              classes.fonts,
              classes.textField,
              classes.marginRightOne,
              classes.margin,
            ]}
            value={name}
            onChange={handleSetName}
            required
            size="small"
            type="text"
          />
          <TextField
            id="email"
            label="Email"
            defaultValue=""
            variant="outlined"
            className={[
              classes.fonts,
              classes.textField,
              classes.marginLeftOne,
              classes.margin,
            ]}
            value={email}
            onChange={handleSetEmail}
            required
            size="small"
            type="email"
          />
        </Box>
        <TextField
          id="customerQueries"
          select
          label="Please select your query"
          value={query}
          defaultValue=""
          fullWidth
          onChange={handleQueryChange}
          className={[classes.fonts, classes.margin]}
          SelectProps={{
            native: true,
          }}
          size="small"
          // helperText="Please select your query"
          variant="outlined"
        >
          {!loadStandardQueriesIsLoading &&
            standard_queries.map((query) => (
              <option
                key={query.value}
                value={query.value}
                className={classes.fonts}
              >
                {query.label}
              </option>
            ))}
          <Divider />
          <option className={classes.fonts}>Other</option>
        </TextField>
        <Box display={isDisplayOtherQueryField}>
          <TextField
            id="ootherQuery"
            label="query"
            defaultValue=""
            variant="outlined"
            fullWidth
            className={[classes.margin, classes.fonts]}
            size="small"
            value={customeQuery}
            onChange={handleSetCustomeQuery}
            required
          />
        </Box>
        <TextField
          id="description"
          label="Description"
          multiline
          rows={isDesktopOrLaptopOrTabletScreen ? 10 : 5}
          defaultValue=""
          variant="outlined"
          fullWidth
          className={[classes.textArea, classes.fonts]}
          value={description}
          onChange={handleSetDescription}
          required
        />
        <div className={classes.attachmentIcon} onClick={() => alert("attach")}>
          <AttachmentSharpIcon />
        </div>
        <RoundButton
          title={"Submit"}
          width={"100%"}
          color={colors.white}
          bgColor={colors.secondary}
          margin={"5% 0% 0%  0%"}
          handleClick={handleSubmitClick}
        />
      </form>
    </Grid>
  );
};
export default ContactUsGlobalForm;
