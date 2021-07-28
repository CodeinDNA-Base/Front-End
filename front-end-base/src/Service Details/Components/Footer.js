import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "./Styles/FooterStyles.css";
import "../Color/Colors.css";
function Footer(props) {
	return (
		<Grid container className="themeColor">
			<Grid
				item
				xs={12}
				sm={6}
				md={3}
				container
				justifyContent="center"
				alignItems="center"
			>
				<ul className="ulStyle">
					<li>
						<h3>1</h3>
					</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
				</ul>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={3}
				container
				justifyContent="center"
				alignItems="center"
			>
				<ul className="ulStyle">
					<li>
						<h3>2</h3>
					</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
				</ul>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={3}
				container
				justifyContent="center"
				alignItems="center"
			>
				<ul className="ulStyle">
					<li>
						<h3>3</h3>
					</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
				</ul>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={3}
				container
				justifyContent="center"
				alignItems="center"
			>
				<ul className="ulStyle">
					<li>
						<h3>4</h3>
					</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
				</ul>
			</Grid>
		</Grid>
	);
}
export default Footer;

{
	/* <GridEmptySpace
  xs="hidden"
  md={6}
  xl="hidden"
/> */
}
