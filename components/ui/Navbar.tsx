import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useContext } from "react";
import { UIContext } from "../../context/ui";

export const Navbar = () => {
  const { openSidebar } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={openSidebar} size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h5">Open Jira App</Typography>
      </Toolbar>
    </AppBar>
  );
};


