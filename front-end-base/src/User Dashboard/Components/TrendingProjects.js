import { Typography } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"

export const TrendingProjects=()=>{

    return(
        <div>
            <Typography >
                Trending Projects
            </Typography>
            {
                Array(10).fill().map(elm=>{
                    return <Skeleton animation="wave" />
                })
            }
        </div>
    )
}