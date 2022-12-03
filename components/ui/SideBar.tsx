import { useContext } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { menuItems } from "../../constants";
import { UIContext } from "../../context/ui";
export const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={isSidebarOpen} onClose={closeSidebar}>
      <Box sx={{ width: 250 }}>
        <Box
          sx={{
            padding: "5px 15px",
            maxWidth: "350px",
            width: "30%",
          }}
        >
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

