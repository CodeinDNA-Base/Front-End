import { Typography } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"

export const OngoingOrders=()=>{

    return(
        <div>
            <Typography >
                Ongoing Projects
            </Typography>
            {
                Array(10).fill().map(elm=>{
                    return <Skeleton animation="wave" />
                })
            }
        </div>
    )
}