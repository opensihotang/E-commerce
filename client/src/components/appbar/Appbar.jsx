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
import { useNavigate } from "react-router-dom";

const AppsBar = () => {
  const user = "user";
  const adminMenu = ["Setting", "Dashboard", "Logout"];
  const userMenu = [
    { menu: "Profile", link: "/profile" },
    { menu: "Orders", link: "/orders" },
    { menu: "Logout", link: "/logout" },
  ];

  const [open, setOpen] = useState(null);
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setOpen(null);
  };
  const navigate = useNavigate();

  const toCart = () => navigate("/cart");
  const toPage = (link) => {
    navigate(link);
    handleCloseMenu();
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
              navigate: "/",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton color="inherit" onClick={toCart}>
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
                  {userMenu.map((item, index) => (
                    <MenuItem onClick={() => toPage(item.link)} key={index}>
                      {item.menu}
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
