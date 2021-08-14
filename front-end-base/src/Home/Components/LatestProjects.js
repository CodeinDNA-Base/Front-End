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
const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  btnContained: {
	backgroundColor: " #011c38",
	color: "white",
	borderRadius: 20,
	marginLeft: 10,
},
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  media: {
  height:200,
  width:'100%'
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "1.5rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "1rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const LatestProjects = (props) => {
	
  const classes = useStyles();
  const styles = useStyles({ color: "#203f52" });
  const styles2 = useStyles({ color: "#4d137f" });
  const styles3 = useStyles({ color: "#ff9900" });
  const styles4 = useStyles({ color: "#34241e" });
  return (
    <div className="highlighter">
      <HeaderTitle
        title={"Projects"}
        description={`Get projects done using cutting edge technologies like react, spring boot and more...!`}
      />

      <Grid container spacing={0} style={{ marginTop: "2%" }}>
        <Grid xs={0} sm={1} md={1} item></Grid>
        <Grid xs={12} sm={10} md={10} item container spacing={4}>
          <Grid item xs={12} sm={9} md={6}>
            <CustomCard
              classes={styles}
              title={"Website"}
              subtitle={"Just By Fashion"}
              image={
                "https://images.unsplash.com/photo-1581089786257-d34fe7d9bff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <CustomCard
              classes={styles2}
              title={"File Filter Desktop app"}
              subtitle={"C sharp and dot Net"}
              image={
                "https://images.unsplash.com/photo-1490971688337-f2c79913ea7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <CustomCard
              classes={styles3}
              title={"Face Recoginization"}
              subtitle={"Neural Networks"}
              image={
                "https://images5.alphacoders.com/690/thumb-1920-690653.png"
              }
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <CustomCard
              classes={styles4}
              title={"3D Games"}
              subtitle={"C sharp, Unity"}
              image={
                "https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan"
              }
            />
          </Grid>
        </Grid>
        <Grid xs={0} sm={1} md={1} item></Grid>
      </Grid>

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
