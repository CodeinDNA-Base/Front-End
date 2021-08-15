
//Material-UI
import { Grid, Box, Hidden } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//Component imports
import { Menubar } from "../User Dashboard/Components/Menubar";
import { Footer } from "../User Dashboard/Components/Footer";
import MobileFooter from "../User Dashboard/Components/MobileFooter";
import { UserProfileCard } from "../User Dashboard/Components/UserProfileCard";
import { PostRequestCard } from "../User Dashboard/Components/PostRequestCard";
import { LinkedAccounts } from "../User Dashboard/Components/LinkedAccounts";
import { OngoingOrders } from "../User Dashboard/Components/OngoingOrders";
import { TrendingServices } from "../User Dashboard/Components/TrendingServices";
import { RecentlyViewedServices } from "../User Dashboard/Components/RecentlyViewedServices";
import { OrdersContainer } from "./OrdersContainer";
// import { DrawerComponent } from "../Projects/Components/DrawerComponent";

//Routes
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

//CSS
import '../User Dashboard/Components/Styles/FooterStyles.css'
import "../User Dashboard/Components/Styles/MenubarStyles.css";
import "../User Dashboard/Components/Styles/UserDashboardStyles.css";

import "../User Dashboard/Components/Styles/TrendingServicesStyles.css"
import "../User Dashboard/Color/Colors.css";


export const UserDashboardContainer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  return (
      <>
            <Grid container>
        <Grid item xs={4} sm={12} md={12}>
          <Menubar />
        </Grid>
      </Grid>

      <div className="bodySection1">
        <Grid container>
          <Grid item xs={0} sm={1} md={1} lg={1} xl={2}></Grid>

          
          {/* Hide profile card, linked accounts and post request options on mobile screen */}
          <Hidden only={["xs"]}>
          <Grid item xs={10} sm={3} md={3} lg={2} xl={4}>
            
            <Box>
              <UserProfileCard />
            </Box>
            <Box mt={5}>
              <PostRequestCard />
            </Box>
            <Box mt={5}>
              <LinkedAccounts />
            </Box>
          </Grid>
          </Hidden>

          <Grid item xs={11} sm={7} md={7} lg={7} xl={4}>
            <Box ml={8} p={0.5}>
              <OngoingOrders />
            </Box>
            <Box ml={8} mt={4} p={0.5}>
              <TrendingServices />
            </Box>
            <Box ml={8} mt={4} border={1} p={0.5}>
              <RecentlyViewedServices />
            </Box>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
        </Grid>
      </div>
 


      {/* Footer Section */}
      <div>
        <Grid container style={{ marginTop: "5%" }} spacing={0}>
          <Grid item md={12} xs={12} sm={12}>
            {isDesktopOrLaptopOrTabletScreen ? <Footer /> : <MobileFooter />}
          </Grid>
        </Grid>
      </div>
  </>
  );
};