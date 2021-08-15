import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import "../Color/Colors.css";
import { Container } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { DividerInProjects } from "./HorizontalLine";
import { makeStyles } from "@material-ui/core";
import Color from "color";
import HeaderTitle from "./HeaderTitle";
import { CustomCard } from "./ProjectCard";
import LatestProjectsForDesktop from "./LatestProjectsForDesktop";
import LatestProjectsForMobile from "./LatestProjectsForMobile";
import { useMediaQuery } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  btnContained: {
    backgroundColor: " #011c38",
    color: "white",
    borderRadius: 20,
    marginLeft: 10,
  },
}));

const LatestProjects = (props) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles();
  return (
    <div className="highlighter">
      <HeaderTitle
        title={"Projects"}
        description={`Get projects done using cutting edge technologies like react, spring boot and more...!`}
      />
      {isDesktopOrLaptopOrTabletScreen ? (
        <LatestProjectsForDesktop />
      ) : (
        <LatestProjectsForMobile />
      )}
      <Grid container spacing={0} style={{ marginTop: "4%" }}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid xs={12} sm={10} md={10} item style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            classes={{
              root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            See More Projects
          </Button>
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid>
    </div>
  );
};
export default LatestProjects;

{
  /* <Grid container spacing={0}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid xs={12} sm={10} md={10} item container>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid> */
}
