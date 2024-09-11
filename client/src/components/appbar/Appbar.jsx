import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const AppsBar = () => {
  const user = "admin";
  const adminMenu = ["Setting", "Dashboard", "Logout"];
  const userMenu = ["Profile", "Orders", "Logout"];

  const [open, setOpen] = useState(null);
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setOpen(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="logo2.png"
            alt="logo"
            style={{
              height: "60px",
              width: "120px",
              objectFit: "contain",
            }}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton color="inherit">
              <ShoppingCartOutlinedIcon />
            </IconButton>
            {user === "user" ? (
              <>
                <IconButton color="inherit" onClick={handleOpenMenu}>
                  <AccountCircleOutlinedIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={handleCloseMenu}
                >
                  {userMenu.map((item) => (
                    <MenuItem onClick={handleCloseMenu} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : user === "admin" ? (
              <>
                <IconButton color="inherit" onClick={handleOpenMenu}>
                  <AccountCircleOutlinedIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={handleCloseMenu}
                >
                  {adminMenu.map((item) => (
                    <MenuItem onClick={handleCloseMenu} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <IconButton color="inherit">
                <LoginIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppsBar;
