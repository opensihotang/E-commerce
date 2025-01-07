import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SelectOption from "./SelectOption";

const Order = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        p: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "650px",
        boxShadow: 4,
      }}
    >
      <Typography variant="H6" fontWeight="bold">
        Atur Jumlah
      </Typography>
      <Box sx={{ display: "flex", gap: "15px", padding: "10px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Box
            sx={{
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </Box>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Total Stock : 30
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize="18">
          Subtotal
        </Typography>
        <Typography fontWeight="bold" fontSize="18">
          Rp. 3.000.000
        </Typography>
      </Box>
      <Typography fontWeight="bold">Pengiriman</Typography>
      <Box>
        <SelectOption
          provinsi={(p) => setProvince(p)}
          kota={(c) => setCity(c)}
          kurir={(cr) => setCourier(cr)}
          layanan={(sr) => setService(sr)}
          alamat={(ad) => setAddress(ad)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize="18">
          Ongkir
        </Typography>
        <Typography fontWeight="bold" fontSize="18">
          Rp. 3.000.000
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize="18">
          Total
        </Typography>
        <Typography fontWeight="bold" fontSize="18">
          Rp. 3.000.000
        </Typography>
      </Box>
      <Button variant="outlined">Beli</Button>
    </Box>
  );
};

export default Order;
