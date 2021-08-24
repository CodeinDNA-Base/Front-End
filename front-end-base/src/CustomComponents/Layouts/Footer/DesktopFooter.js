import Grid from "@material-ui/core/Grid";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidRoundedIcon from "@material-ui/icons/AndroidRounded";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { DividerInFooter } from "./DividerInFooter";
import gernalClassesStyles from "../../../Theme/gernalStyles";
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.primary,
    paddingTop: "4%",
    color: colors.lightGray,
  },
  ulStyle: {
    listStyle: "none",
  },
  listHeading: {
    font: Headingfonts.extraSmall,
    marginBottom: "5%",
  },
  liStyle: {
    marginBottom: "4%",
    font: TextFonts.XXSmall,
  },
  websiteMark: {
    color: colors.highlighter,
    font: Headingfonts.extraExtraSmall,
  },
  mobileApp: {
    marginRight: "2%",
    font: Headingfonts.extraExtraSmall,
  },
}));

const DesktopFooter = (props) => {
  const classes = useStyles();
  const gernalClasses = gernalClassesStyles();
  return (
    <Grid classes={{ root: classes.root }}>
      <Grid container spacing={0}>
        <Grid  sm={1} md={1} item></Grid>
        <Grid xs={12} sm={10} md={10} item container>
          <Grid item xs={12} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <li className={classes.listHeading}>Resources</li>

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
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <li className={classes.listHeading}>About</li>

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
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Members</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <li className={classes.listHeading}>Terms & Services</li>

              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Team</li>
              </Link>

              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Support</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>TOS Rules</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Online Meetings</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul className={classes.ulStyle}>
              <li className={classes.listHeading}>Technologies</li>

              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Team</li>
              </Link>

              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Support</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>React Js</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Express JS</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>Online Meetings</li>
              </Link>
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>new Technologies</li>
              </Link>
            </ul>
          </Grid>
        </Grid>
        <Grid  sm={1} md={1} item></Grid>
      </Grid>

      <SocialIcons />

      {/**for horizontal line */}
      <DividerInFooter />
      {/* for extra info*/}
      <Grid container>
        <Grid md={1} sm={3} xs={2} item></Grid>
        <Grid item md={3}>
          <p className={classes.websiteMark}>
            {" "}
            © 2015 - 2021 CodeInDNA® Global Inc.
          </p>
        </Grid>
        <Grid md={5} sm={6} xs={2} item></Grid>
        <Grid md={2} sm={3} xs={2} item container>
          <span className={classes.mobileApp}>Mobile Apps</span>
          <Link to="#" className={gernalClasses.linkStyle}>
            <AppleIcon />
          </Link>
          <Link to="#" className={gernalClasses.linkStyle}>
            <AndroidRoundedIcon />
          </Link>
        </Grid>
        <Grid md={1} sm={3} xs={2} item></Grid>
      </Grid>
    </Grid>
  );
};

export default DesktopFooter;
