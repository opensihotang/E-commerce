import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Box } from "@mui/material";

const SelectOption = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "province":
        setProvince(value);
        break;
      case "city":
        setCity(value);
        break;
      case "courier":
        setCourier(value);
        break;
      case "service":
        setService(value);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={province}
          label="Provinsi"
          name="province"
          onChange={handleChange}
        >
          <MenuItem value={"Jawa Barat"}>Jawa Barat</MenuItem>
          <MenuItem value={"Jawa Tengah"}>Jawa Tengah</MenuItem>
          <MenuItem value={"Jawa Timur"}>Jawa Timur</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kota/Kabupaten</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Kota/Kabupate"
          name="city"
          onChange={handleChange}
        >
          <MenuItem value={"Jawa Barat"}>Jawa Barat</MenuItem>
          <MenuItem value={"Jawa Tengah"}>Jawa Tengah</MenuItem>
          <MenuItem value={"Jawa Timur"}>Jawa Timur</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kurir</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={courier}
          label="Kurir"
          name="courier"
          onChange={handleChange}
        >
          <MenuItem value={"Jawa Barat"}>Jawa Barat</MenuItem>
          <MenuItem value={"Jawa Tengah"}>Jawa Tengah</MenuItem>
          <MenuItem value={"Jawa Timur"}>Jawa Timur</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Layanan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Layanan"
          name="service"
          onChange={handleChange}
        >
          <MenuItem value={"Jawa Barat"}>Jawa Barat</MenuItem>
          <MenuItem value={"Jawa Tengah"}>Jawa Tengah</MenuItem>
          <MenuItem value={"Jawa Timur"}>Jawa Timur</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOption;
