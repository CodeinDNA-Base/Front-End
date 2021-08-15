import { Typography } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"

export const RecentlyViewedServices=()=>{

    return(
        <div>
            <Typography >
                Recently Viewed
            </Typography>
            {
                Array(10).fill().map(elm=>{
                    return <Skeleton animation="wave" />
                })
            }
        </div>
    )
}