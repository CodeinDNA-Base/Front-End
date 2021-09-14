import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import { useMediaQuery } from "@material-ui/core";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
const useStyles = makeStyles((theme) => ({
  subtitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.extraSmall : TextFonts.large,
    color: colors.lightGray,
  },
  title: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.large
        : Headingfonts.XXXLarge,
    color: colors.white,
  },
  btnOutlined: {
    color: colors.white,
    borderColor: colors.white,
    borderRadius: 20,
    marginLeft: 10,
  },
  btnContained: {
    backgroundColor: colors.secondary,
    color: colors.white,
    borderRadius: 20,
    marginLeft: 10,
  },
}));

const SideMainContainer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  // hanlder
  const handleJoinNowClick = () => {alert('open modal for registration')};
  const handleExploreThePlaceClick = () => {alert('navigate to nadir project page')};
  return (
    <div>
      <p className={classes.title}>Join Siba Overflow Today </p>

      <p className={classes.subtitle}>
        Register yourself today and get full time support and career advice from
        our experts
      </p>
      <Box style={{ marginTop: 20 }}>
        <RoundButton
          variant="contained"
          title="Join Now"
          bgColor={colors.secondary}
          color={colors.white}
          handleClick={handleJoinNowClick}
        />

        <RoundButton
          variant="outlined"
          title={`Explore the Place`}
          color={colors.white}
          borderColor={colors.white}
          margin={"0% 0% 0% 2%"}
          handleClick={handleExploreThePlaceClick}
        />
      </Box>
    </div>
  );
};
export default SideMainContainer;
