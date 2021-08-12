import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: "100%",
		color: "#007FED",
	},
	indicator: {
		backgroundColor: "#ea6645",
	},
}));

const TechnologyTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: 22,
		marginRight: theme.spacing(12),
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:hover": {
			color: "#011c38",
			opacity: 1,
		},
		"&$selected": {
			color: "#011c38",
			fontWeight: theme.typography.fontWeightMedium,
		},
		"&:focus": {
			color: "#011c38",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function TechnologyIcons() {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons="on"
				textColor="inherit"
				aria-label="scrollable force tabs example"
				classes={{ indicator: classes.indicator }}
			>
				<TechnologyTab
					label="React JS"
					icon={<FavoriteIcon fontSize="large" />}
				/>

				<TechnologyTab
					label="Angular JS"
					icon={<PersonPinIcon fontSize="large" />}
				/>
				<TechnologyTab label="Node JS" icon={<HelpIcon fontSize="large" />} />
				<TechnologyTab
					label="Mern"
					icon={<ShoppingBasket fontSize="large" />}
				/>
				<TechnologyTab label="Express" icon={<ThumbDown fontSize="large" />} />
				<TechnologyTab
					label="React Native"
					icon={<ThumbUp fontSize="large" />}
				/>
			</Tabs>
		</div>
	);
}
