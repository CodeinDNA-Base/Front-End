import React from "react";
import TopNavbar from "./TopNavbar";
import NavbarTabs from "./NavbarTabs";
import { AppBar, Grid, Box } from "@material-ui/core";
//import "./Styles/StyleSheet.css";

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
      currentSelectedTabIndex: 0,
      handelTabIndex: props.handelTabIndex.bind(props.handelTabIndex()),
      handelTabChangeEvent: this.handelTabChangeEvent.bind(this),
    };
  }

  handelTabChangeEvent = (event, indexSelected) => {
    this.state.handelTabIndex(event, indexSelected);
    this.setState({ currentSelectedTabIndex: indexSelected });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
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
