//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import Skeleton from "@material-ui/lab/Skeleton";

//Style and Theme

//Icons

//Resources

export const ProjectChatModule = () => {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={80} height={80} />
      <Skeleton variant="rect" height={200} />
    </div>
  );
};
