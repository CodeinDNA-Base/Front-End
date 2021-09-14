import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import colors from "../../../Theme/colors";
import { makeStyles } from "@material-ui/core";
import HeaderTitle from "../HeaderTitle";
import LatestProjectsForDesktop from "./LatestProjectsForDesktop";
import LatestProjectsForMobile from "./LatestProjectsForMobile";
import { useMediaQuery } from "@material-ui/core";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
const useStyles = makeStyles(() => ({
  btnContained: {
    backgroundColor: " #011c38",
    color: "white",
    borderRadius: 20,
    marginLeft: 10,
  },
  root: { backgroundColor: colors.highlighter },
}));

const LatestProjects = (props) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles();
  // hanlders
  const handleSeeMoreProjectsClick=()=>{
    alert('go to nadir projects page')
  }
  return (
    <div className={classes.root}>
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
          <RoundButton
            variant="contained"
           title={`See more projects`}
           color={colors.white}
           bgColor={colors.primary}
           handleClick={handleSeeMoreProjectsClick}

         />
         
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid>
    </div>
  );
};
export default LatestProjects;
