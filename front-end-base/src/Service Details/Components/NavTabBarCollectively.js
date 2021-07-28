import React from "react";
import ServiceDetailsNavbar from "./ServiceDetailsNavbar";
import ServiceDetailsTabs from "./ServiceDetailsTabs";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AppBar, Grid,Box} from "@material-ui/core";
import './Styles/StyleSheet.css'

export default class NavTabBarCollectively extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
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
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };
  render() {
    console.log(this.state);
    return(
      <AppBar style={{backgroundColor:"transparent"}}>
       
              <div className="navdiv">
                  <div className={this.state.show ? "active" : "hidden"}>
                       <ServiceDetailsNavbar/>
                        <Grid container >
                            <Grid item xs={12}>
                                <Box px={0}>
                                    <ServiceDetailsTabs/>
                                </Box>
                            </Grid>
                        </Grid>
                  </div>
              </div>
      </AppBar>   
      );
  }
}