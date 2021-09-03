//ReactJS

//Material-UI core
import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

//Material-UI styles

//Icons

//Theme and styles

//Resources

export const RecentlyViewedServices = () => {
  return (
    <div style={{border:"2px solid blue"}}>
      <Typography>Recently Viewed</Typography>
      {Array(10)
        .fill()
        .map((elm) => {
          return <Skeleton animation="wave" />;
        })}
    </div>
  );
};
