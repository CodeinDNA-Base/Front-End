import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { CardHeader } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import { shadows } from "@material-ui/system";
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "80%",
	},
	button: {
		backgroundColor: "#296fb9",
		color: "white",
	},
	media: {
		height: 140,
	},
	form: {
		"& > *": {
			margin: theme.spacing(1),
			width: "85%",
		},
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export default function SearchCard() {
	const classes = useStyles();

	const [age, setAge] = React.useState("");
	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<Box className={classes.root} boxShadow={3}>
			<Card>
				<CardActionArea>
					<CardHeader title="Get the beat team today, Search Anythig!!!" />

					<CardContent>
						<form className={classes.form} noValidate autoComplete="off">
							<TextField id="standard-basic" label="Keyword" />
							<FormControl className={classes.formControl}>
								<InputLabel id="demo-simple-select-label">Age</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={age}
									onChange={handleChange}
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<TextField id="standard-basic" label="Price" />
						</form>
					</CardContent>
				</CardActionArea>
				<CardActions style={{ marginBottom: 20 }}>
					<Button
						variant="contained"
						style={{ width: "100%" }}
						classes={{
							root: classes.button, // class name, e.g. `classes-nesting-root-x`
						}}
					>
						Search
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
}
