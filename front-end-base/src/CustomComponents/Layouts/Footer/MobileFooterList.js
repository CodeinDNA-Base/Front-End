import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import gernalClassesStyles from "../../../Theme/gernalStyles";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(12),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  themeColor: {
    backgroundColor: colors.primary,
    color: colors.lightGray,
  },
  liStyle: {
    marginBottom: "6%",
    font: TextFonts.medium,
  },
  ulStyle: {
    listStyle: "none",
  },
  listHeading: {
    font: Headingfonts.large,
    marginBottom: "5%",
  },
}));

const MobileFooterLists = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const gernalClasses = gernalClassesStyles();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid item xs={10}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        classes={{
          root: classes.themeColor,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.listHeading}>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className={classes.ulStyle}>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Team</li>
            </Link>

            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Support</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Online Meetings</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>new Technologies</li>
            </Link>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        classes={{
          root: classes.themeColor,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.listHeading}>
            Terms & Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className={classes.ulStyle}>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Team</li>
            </Link>

            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Support</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Online Meetings</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>new Technologies</li>
            </Link>
          </ul>
        </AccordionDetails>{" "}
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        classes={{
          root: classes.themeColor,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.listHeading}>
            Teams & Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className={classes.ulStyle}>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Team</li>
            </Link>

            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Support</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Online Meetings</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>new Technologies</li>
            </Link>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        classes={{
          root: classes.themeColor,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.listHeading}>Technologies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className={classes.ulStyle}>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Team</li>
            </Link>

            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Support</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>Online Meetings</li>
            </Link>
            <Link to="#" className={gernalClasses.linkStyle}>
              <li className={classes.liStyle}>new Technologies</li>
            </Link>
          </ul>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};
export default MobileFooterLists;
