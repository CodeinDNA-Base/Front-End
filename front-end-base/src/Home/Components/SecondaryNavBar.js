// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";

// const useStyles = makeStyles({
// 	root: {
// 		flexGrow: 1,
// 		position: "fixed",
// 	},
// });

// export default function SecondaryNavBar() {
// 	const classes = useStyles();
// 	const [value, setValue] = React.useState(0);

// 	const handleChange = (event, newValue) => {
// 		setValue(newValue);
// 	};

// 	return (
// 		<Paper className={classes.root}>
// 			<Tabs
// 				value={value}
// 				onChange={handleChange}
// 				indicatorColor="primary"
// 				textColor="primary"
// 				centered
// 			>
// 				<Tab label="Item One" />
// 				<Tab label="Item Two" />
// 				<Tab label="Item Three" />
// 				<Tab label="Item Four" />
// 				<Tab label="Item Five" />
// 				<Tab label="Item Six" />
// 				<Tab label="Item Seven" />
// 				<Tab label="Item Eight" />
// 			</Tabs>
// 		</Paper>
// 	);
// }

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import "./Styles/StyleSheet.css";
import ReactCSSTransitionGroup from "react-transition-group";
function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<h4>{children}</h4>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		"aria-controls": `scrollable-force-tabpanel-${index}`,
	};
}

export default function SecondaryNavbar(props) {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			width: "100%",
			backgroundColor: theme.palette.background.paper,
		},
		appbar: {
			backgroundColor:
				props.packageContainerStickyNess === "StickThePackageContainer"
					? "#011c38"
					: "#f8f9fa",
			boxShadow: "none",
			transition: "background-color 2s ease-in",
			WebkitTransition: "background-color 2s ease-in",
			MozTransition: "background-color 2s ease-in",
		},
		tabs: {
			color:
				props.packageContainerStickyNess === "StickThePackageContainer"
					? "#f8f9fa"
					: "rgba(0, 0, 0, 0.87)",
			transition: "color 2s ease-in",
			WebkitTransition: "color 2s ease-in",
			MozTransition: "color 2s ease-in",
		},
		indicator: {
			backgroundColor: "#ea6645",
		},
	}));

	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
		props.handelTabChangeEvent(event, newValue);
	};
	return (
		<div className={classes.root}>
			<AppBar
				position="static"
				color="black"
				classes={{ root: classes.appbar }}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="on"
					indicatorColor="primary"
					aria-label="scrollable force tabs example"
					classes={{ root: classes.tabs, indicator: classes.indicator }}
				>
					<Tab
						className="TabTextFonts"
						label="Web Development"
						{...a11yProps(0)}
					/>

					<Tab className="TabTextFonts" label="Automations" {...a11yProps(2)} />
					<Tab
						className="TabTextFonts"
						label="Desktop Application"
						{...a11yProps(3)}
					/>

					<Tab
						className="TabTextFonts"
						label="Mobile Development"
						{...a11yProps(1)}
					/>
					<Tab
						className="TabTextFonts"
						label="Writting & Translation"
						{...a11yProps(1)}
					/>
					<Tab
						className="TabTextFonts"
						label="Graphic Designing"
						{...a11yProps(3)}
					/>
					<Tab className="TabTextFonts" label="Bussiness" {...a11yProps(3)} />
					<Tab className="TabTextFonts" label="DataBase" {...a11yProps(4)} />
				</Tabs>
			</AppBar>

			{/*<TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
		</div>
	);
}
