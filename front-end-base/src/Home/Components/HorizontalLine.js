import Grid from "@material-ui/core/Grid";
export const DividerInFooter = () => {
	return (
		<Grid container>
			{/* for offset */}
			<Grid item md={4} sm={3} xs={2}></Grid>
			<Grid item xs={8} md={4} sm={6}>
				<hr />
			</Grid>
			<Grid md={4} sm={3} xs={2}></Grid>
		</Grid>
	);
};

export const DividerInservices = () => {
	return (
		<Grid container style={{ marginTop: 120 }}>
			{/* for offset */}
			<Grid item md={2} sm={2} xs={1}></Grid>
			<Grid item xs={10} md={8} sm={8}>
				<hr style={{ borderColor: "#f8f9fa" }} />
			</Grid>
			<Grid md={2} sm={2} xs={1}></Grid>
		</Grid>
	);
};

export const DividerInProjects = () => {
	return (
		<Grid container style={{ marginTop: 120 }}>
			{/* for offset */}
			<Grid item md={3} sm={2} xs={1}></Grid>
			<Grid item xs={10} md={8} sm={10}>
				<hr style={{ borderColor: "#f8f9fa" }} />
			</Grid>
			<Grid md={3} sm={1} xs={1}></Grid>
		</Grid>
	);
};
