import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Created at {year}
    </Box>
  );
};

export default Footer;
