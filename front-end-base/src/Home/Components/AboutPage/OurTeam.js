import React, { useEffect } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import colors, { ColorGradient } from "../../../Theme/colors";
import { makeStyles } from "@material-ui/core";
import { HomePageComponentsHeading } from "../../../CustomComponents/UI/Text/HomePageHeadings";
import TeamCard from "./TeamCard";

// string constants
import { TEAM_TITLE ,TEAM_SUBTITLE} from "../../Strings/AboutUsStrings";

// reducer
import { useSelector, useDispatch } from "react-redux";
import { loadTeamDetail } from "../Slices/AboutPageSlices/OurTeamSlices";
import { selectTeamDetail } from "../Slices/AboutPageSlices/OurTeamSlices";

// styles
const OurTeamStyles = makeStyles(() => ({
  root: {
    backgroundImage: ColorGradient.lightSkyBlue,
    borderRadius: 10,
  },
  cardStyle: {
    marginBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "15%",
  },
}));

const OurTeam = () => {
  // redux
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.teamDetail);
  const { hasError } = useSelector((state) => state.teamDetail);
  const team_detail = useSelector(selectTeamDetail);

  useEffect(() => {
    dispatch(loadTeamDetail());
  }, [dispatch]);

  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = OurTeamStyles(isDesktopOrLaptopOrTabletScreen);
  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item md={2}></Grid>
      <Grid container justifyContent="center" item md={8}>
        <HomePageComponentsHeading
          title={TEAM_TITLE}
          titleColor={colors.primary}
          margin={"0% 0% 5% 0%"}
          description={TEAM_SUBTITLE}
          descriptionColor={colors.lightBlack}
        />

        {!isLoading &&
          team_detail.map((member) => (
            <div className={classes.cardStyle}>
              <TeamCard
                img={member.memberProfilePicture}
                name={member.memberFirstName + " " + member.memberLastName}
                position={member.memberRole}
                description={member.memberIntroductionText}
              />
            </div>
          ))}
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};
export default OurTeam;
