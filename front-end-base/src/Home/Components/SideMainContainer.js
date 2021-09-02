import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import colors from "../../Theme/colors";
import { Headingfonts, TextFonts } from "../../Theme/fonts";
import { useMediaQuery } from "@material-ui/core";
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

  return (
    <div>
      <p className={classes.title}>Join Siba Overflow Today </p>

      <p className={classes.subtitle}>
        Register yourself today and get full time support and career advice from
        our experts
      </p>
      <Box style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          classes={{
            root: classes.btnContained, // class name, e.g. `classes-nesting-root-x`
          }}
        >
          Join Now
        </Button>
        <Button
          variant="outlined"
          classes={{
            root: classes.btnOutlined, // class name, e.g. `classes-nesting-root-x`
          }}
        >
          Explore the place
        </Button>
      </Box>
    </div>
  );
};
export default SideMainContainer;
