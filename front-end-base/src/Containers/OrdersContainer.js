
//Material-UI
import { Grid, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//Component imports
import { Menubar } from "../Orders/Components/Menubar";
import { Footer } from "../Orders/Components/Footer";
import MobileFooter from "../Orders/Components/MobileFooter";

//Routes
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

//CSS
import '../Orders/Components/Styles/FooterStyles.css'
import "../Orders/Components/Styles/MenubarStyles.css";
import "../Orders/Components/Styles/UserDashboardStyles.css";

import "../Orders/Components/Styles/TrendingServicesStyles.css"
import "../Orders/Color/Colors.css";
import { Avatar } from "react-lorem-ipsum";


export const UserDashboardContainer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  return (
    <Router>
        <Switch>
            <Route exact path="/">
            <Grid container>
        <Grid item xs={4} sm={12} md={12}>
          <Menubar />
        </Grid>
      </Grid>

      <div className="bodySection1">
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>

          <Grid item xs={10} sm={4} md={3} lg={2} xl={4}>
            <Box>
                <Avatar></Avatar>
            </Box>
            <Box mt={5} border={1}>
              <PostRequestCard />
            </Box>
            <Box mt={5}>
            <Avatar></Avatar>
            </Box>
          </Grid>

          <Grid item xs={10} sm={6} md={7} lg={6} xl={4}>
            <Box ml={8} p={0.5}>
            <Avatar></Avatar>
            </Box>
            <Box ml={8} mt={4} p={0.5}>
            <Avatar></Avatar>
            </Box>
            <Box ml={8} mt={4} border={1} p={0.5}>
            <Avatar></Avatar>
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
      </Route>
    </Switch>

    <Switch>
        <Route exact path="/Orders">
            
        </Route>
    </Switch>
    </Router>
  );
};