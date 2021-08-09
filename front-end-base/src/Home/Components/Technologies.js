import HeaderTitle from "./HeaderTitle";
import { Grid } from "@material-ui/core";
const Technologies = () => {
	return (
		<Grid container spacing={0}>
			<Grid
				xs={12}
				sm={12}
				md={12}
				item
				justifyContent="center"
				alignItems="center"
			>
				<HeaderTitle title={"Technologies"} />
			</Grid>
		</Grid>
	);
};
export default Technologies;
