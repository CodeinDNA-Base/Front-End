import HeaderTitle from "./HeaderTitle";
import { Grid } from "@material-ui/core";
import TechnologyIcons from "./TechnologyIcons";
import { DividerInservices } from "./HorizontalLine";
const Technologies = () => {
	return (
		<Grid container spacing={0}>
			<Grid
				xs={12}
				sm={12}
				md={12}
				item
				container
				justifyContent="center"
				alignItems="center"
			>
				<HeaderTitle title={"Technologies"} />
				<Grid
					md={12}
					container
					item
					justifyContent="center"
					alignItems="center"
				>
					<TechnologyIcons />
				</Grid>
				<Grid
					md={12}
					container
					item
					justifyContent="center"
					alignItems="center"
					style={{ marginTop: "8%" }}
				>
					<TechnologyIcons />
				</Grid>
			</Grid>
			<DividerInservices />
		</Grid>
	);
};
export default Technologies;
