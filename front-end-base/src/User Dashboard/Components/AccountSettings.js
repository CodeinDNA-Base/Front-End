
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"

import PersonalInfoIcon from "@material-ui/icons/People"

export const AccountSettings=()=>{

    return(
        <div style={{width:"300px"}}>
      <Divider />
      <List>
        <ListItem
          button
          key="logout"
        >
          <ListItemIcon>
            <PersonalInfoIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
        </div>
    )

}