import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import colors ,{ColorGradient }from "../../Theme/colors";
import { TextFonts, HeadingFonts } from "../../Theme/fonts";
import { makeStyles } from "@material-ui/core";
import { SmallHeading } from "../../CustomComponents/UI/Text/SmallHeading";
import { HomePageComponentsHeading } from "../../CustomComponents/UI/Text/HomePageHeadings";
import TeamCard from "./TeamCard";
const OurTeamStyles = makeStyles(() => ({
    root:{
        backgroundImage:ColorGradient.lightSkyBlue,
        borderRadius:10
    },
    cardStyle:{
   marginBottom:isDesktopOrLaptopOrTabletScreen=>isDesktopOrLaptopOrTabletScreen ? '5%' : '15%'
    }
}));
const OurTeam = () => {
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes=OurTeamStyles(isDesktopOrLaptopOrTabletScreen);
  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item md={2}></Grid>
      <Grid container justifyContent="center" item md={8} >
        <HomePageComponentsHeading
          title={`Our Team`}
          titleColor={colors.primary}
          margin={"0% 0% 5% 0%"}
         // textAlign="start"
          description={'Helping businesses and talent reach their full potential '}
          descriptionColor={colors.lightBlack}
        />

        <div className={classes.cardStyle}>
          <TeamCard
            img={
              "https://media-exp1.licdn.com/dms/image/C4D03AQGP7SaVAVCBug/profile-displayphoto-shrink_800_800/0/1606816407483?e=1635984000&v=beta&t=isqp0v4iqEnuN8e1FZGIlNOqnzDGUAC9SZq1aWYq7Es"
            }
            name={`Nadir Hussian`}
            position={`Hawalii No.1`}
            description={`Nadir Hussian human resources at Upwork. Her strategic leadership not only provides Upwork`}
          />
        </div>
        <div  className={classes.cardStyle}>
          <TeamCard
            img={
              "https://media-exp1.licdn.com/dms/image/C4D03AQEDyrX3oqW4Tw/profile-displayphoto-shrink_800_800/0/1616261782960?e=1635984000&v=beta&t=XObSsizyEmRXALJ1lWaoY2AVuLdkWiYrkk6w9CRTToI"
            }
            name={`Nageeta Wadhwani`}
            position={`Hawalii No.2`}
            description={`Nageeta Wadhwani human resources at Upwork. Her strategic leadership not only provides Upwork`}
          />
        </div>
        <div  className={classes.cardStyle}>
          <TeamCard
            img={
             "https://media-exp1.licdn.com/dms/image/C5603AQHH0HXLrj0ueQ/profile-displayphoto-shrink_400_400/0/1621281563188?e=1635984000&v=beta&t=XTLt2GW_RYU9BaSj5WUKYFO2w4Enbegn0NjOB5uBHXU"         }
            name={`Zeeshan Ahmed`}
            position={`Hawalii No.3`}
            description={`Zeeshan Ahmed human resources at Upwork. Her strategic leadership not only provides Upwork`}
          />
        </div>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};
export default OurTeam;
