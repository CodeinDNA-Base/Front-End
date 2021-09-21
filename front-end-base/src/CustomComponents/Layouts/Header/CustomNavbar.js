import React from "react";
import TopNavbar from "./TopNavbar";
import NavbarTabs from "./NavbarTabs";
import {
  AppBar,
  Grid,
  Box,
  LinearProgress,
  makeStyles,
} from "@material-ui/core";
import colors from "../../../Theme/colors";

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
      currentSelectedTabIndex: 0,
      handelTabIndex: props.handelTabIndex.bind(props.handelTabIndex()),
      handelTabChangeEvent: this.handelTabChangeEvent.bind(this),
      progress: 0,
      timerId: "",
      isBarDisplay: "visible",
    };
  }

  handelTabChangeEvent = (event, indexSelected) => {
    this.state.handelTabIndex(event, indexSelected);
    this.setState({
      currentSelectedTabIndex: indexSelected,
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const timer = setInterval(() => {
      const diff = Math.random() * 10;
      let pro = Math.min(this.state.progress + diff, 100);
      this.setState({ progress: pro });
      console.log(this.state.progress);
    }, 500);

    this.setState({ timerId: timer });
  }
  componentDidUpdate() {
    if (this.state.progress === 100) {
      clearInterval(this.state.timerId);
      this.setState({ isBarDisplay: "none", progress: 101 });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <AppBar style={{ backgroundColor: "transparent" }}>
        <div className="navdiv">
          <div className={this.state.show ? "active" : "hidden"}>
            <TopNavbar
              navbarMenuOptions={this.props.navbarMenuOptions}
              isAvatar={this.props.isAvatar}
              navbarAvatar={this.props.navbarAvatar}
              isNavBarIconButtons={this.props.isNavBarIconButtons}
              navbarIconButtons={this.props.navbarIconButtons}
              drawerMenuOptions={this.props.drawerMenuOptions}
              darwerMenuExtraOptions={this.props.darwerMenuExtraOptions}
              drawerListItemAvatar={this.props.drawerListItemAvatar}
            />
            <Box sx={{ width: "100%" }} display={this.state.isBarDisplay}>
              <LinearProgress
                variant="determinate"
                value={this.state.progress}
                style={{
                  backgroundColor: colors.primary,
                }}
              />
            </Box>
            {this.props.isNavbarTabs && (
              <Grid container>
                <Grid item xs={12}>
                  <Box px={0}>
                    <NavbarTabs
                      handelTabChangeEvent={this.state.handelTabChangeEvent}
                      packageContainerStickyNess={
                        this.props.packageContainerStickyNess
                      }
                      navbarTabsOptions={this.props.navbarTabsOptions}
                    />
                  </Box>
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </AppBar>
    );
  }
}
