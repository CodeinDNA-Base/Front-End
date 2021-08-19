import { Box } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"

export const ChatModule=()=>{
    return(
        <Box>
            <Skeleton variant="text" />
<Skeleton variant="circle" width={80} height={80} />
<Skeleton variant="rect"  height={400} />
        </Box>
    )
}