import React from "react";
import cx from "clsx";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import colors from "../../Theme/colors";
import { Typography } from "@material-ui/core";
const TeamCardStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    borderRadius: theme.spacing(2), // 16px
    transition: "0.3s",
    // boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: "relative",
    maxWidth: "100%",
    marginLeft: "auto",
    overflow: "initial",
    background: colors.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: theme.spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: ({expand}) => expand ? "80%" : "100%",
      height: ({expand}) => expand ? "80%" : "100%",
      marginLeft: theme.spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      //backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: theme.spacing(2), // 16
      //opacity: 0.5,
    },
    readMoreButton: {
      backgroundColor: colors.success,
    },
  },
  content: {
    padding: 10,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const TeamCard = React.memo(function BlogCard({
  img,
  name,
  description,
  position,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const styles = TeamCardStyles({expanded});
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root)}>
      <CardMedia className={styles.media} image={img} />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={contentStyles}
          overline={position}
          heading={name}
          body={description}
        />
        <span className={styles.readMoreButton}>Read More</span>
        <IconButton
          className={clsx(styles.expand, {
            [styles.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
});

export default TeamCard;
