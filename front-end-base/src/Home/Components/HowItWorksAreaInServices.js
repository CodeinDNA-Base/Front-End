import React from "react";
import { Grid } from "@material-ui/core";
export const HowItWorksAreaInServices = () => {
  return (
    <Grid container>
      <Grid item md={1}></Grid>
      <Grid item Container md={5}>
        <div>
          <h2>1 .Browse </h2>
          <p>
            Find the type of work you need, clearly defined and ready to start.
          </p>
        </div>
        <hr />
        <div>
          <h2>2. Buy</h2>
          <p>Work begins as soon as you purchase and provide requirements.</p>
        </div>
        <hr />
        <div>
          <h2>3. Approve </h2>
          <p>
            Receive and review your project. The professional will be paid once
            you’ve approved it.
          </p>
        </div>
      </Grid>
      <Grid item Container md={5}>
        <video
          src={"https://www.youtube.com/watch?v=umxLRYwyq24"}
          width="100%"
          height='100%'
          controls="controls"
          autoplay="true"
        />
      </Grid>
    </Grid>
  );
};
