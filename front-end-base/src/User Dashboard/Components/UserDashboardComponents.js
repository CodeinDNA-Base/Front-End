import { LoremIpsum, Avatar } from "react-lorem-ipsum";

//Material-UI
import {
  Grid, Typography,
} from "@material-ui/core";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Box } from "@material-ui/core";

//Component imports
import { Menubar } from "./Menubar";
import { Footer } from "./Footer";
import MobileFooter from "./MobileFooter";
import { UserProfileCard } from "./UserProfileCard";
import { PostRequestCard } from "./PostRequestCard";
import { LinkedAccounts } from "./LinkedAccounts";
import { OngoingOrders } from "./OngoingOrders";
import { TrendingProjects } from "./TrendingProjects";

//CSS
import "./Styles/FooterStyles.css";
import "./Styles/MenubarStyles.css";
import "./Styles/UserDashboardStyles.css";
import "../Color/Colors.css";

export const UserDashboardComponents = () => {
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
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
          
          <Grid item xs={10} sm={4} md={3} lg={2} xl={4}>

            <Box border={1}>
               <UserProfileCard />
            </Box>
            <Box mt={5} border={1} >
               <PostRequestCard />
            </Box>
            <Box mt={5} border={1}>
               <LinkedAccounts /></Box>
          </Grid>        

          <Grid item xs={10} sm={6} md={7} lg={6} xl={4}>
          <Box ml={4} border={1} p={0.5}>

               <OngoingOrders />
               </Box>
               <Box ml={4} border={1} p={0.5}>
               <TrendingProjects /></Box>
               <Box ml={4} border={1} p={0.5}>
            </Box>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
        </Grid>
      </div>

      {/* <div className="bodySection2">
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
          
          <Grid item xs={10} sm={4} md={3} lg={2} xl={4}>
            <div style={{border:"1px solid red", padding:"4px"}}>
               <PostRequestCard />
            </div>
          </Grid>

          <Grid item xs={10} sm={6} md={7} lg={6} xl={4}>
          <Box ml={4} border={1} p={0.5}>
               <TrendingProjects />
            </Box>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
        </Grid>
      </div> */}



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