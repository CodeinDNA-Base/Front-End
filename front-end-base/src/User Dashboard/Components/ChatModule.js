//ReactJS

//Material-UI core
import { Box } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import DesktopChatModuleContainer from "./ChatModuleComponents/DesktopChatModuleContainer"
import MobileChatModuleContainer from "./ChatModuleComponents/MobileChatModuleContainer"
import { useMediaQuery } from "@material-ui/core"

//Material-UI styles


//Icons

//Theme and Styles

//Routes

//Resources

export const ChatModule=()=>{
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
    return(
        <Box>
            {/* <Skeleton variant="text" />
            <Skeleton variant="circle" width={80} height={80} />
            <Skeleton variant="rect"  height={400} /> */}
            { (isDesktopOrLaptopOrTabletScreen) ? <DesktopChatModuleContainer/> : <MobileChatModuleContainer/>}

        </Box>
    )
}