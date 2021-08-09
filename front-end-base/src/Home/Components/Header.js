import { useEffect, useState } from "react";
import PrimaryNavbar from "./PrimaryNavbar";
import SecondaryNavBar from "./SecondaryNavBar";
import { useWindowDimensions } from "./WindowDimensions";

const Header = () => {
	const { height, width } = useWindowDimensions();

	return (
		<>
			<PrimaryNavbar />
			<SecondaryNavBar />
		</>
	);
};
export default Header;
