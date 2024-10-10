import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import products from "../../data/Products";
import {
  Box,
  CardActionArea,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");

  const searchfunction = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearchProduct(value);
      console.log(value, "namee");
    } else if (name === "category") {
      setCategoryProduct(value === "all" ? "" : value);
    }
  };

  const filtered = (product) => {
    const name = product.name
      .toLowerCase()
      .includes(searchProduct.toLowerCase());
    const category = product.category
      .toLowerCase()
      .includes(categoryProduct.toLowerCase());

    return name && category;
  };

  const filteredProduct = products.filter(filtered);
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].sort();

  const productPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productPerPage;
  const endIndex = startIndex + productPerPage;
  const paginatedProducts = filteredProduct.slice(startIndex, endIndex);
  const totalPage = Math.ceil(filteredProduct.length / productPerPage);
  const pageChanging = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Input
          placeholder="Search product...."
          name="search"
          type="text"
          sx={{ p: 1 }}
          onChange={searchfunction}
          value={searchProduct}
        />

        <FormControl sx={{ width: 300 }}>
          <InputLabel>Categories</InputLabel>
          <Select
            name="category"
            value={categoryProduct}
            onChange={searchfunction}
            label="Categories"
            renderValue={(selected) => {
              if (selected === "all") return "All";
              return selected; // Tampilkan nama kategori yang dipilih
            }}
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mt: 2,
        }}
      >
        {paginatedProducts.map((product) => (
          <Card
            key={product.name}
            sx={{
              width: 210,
              minheight: 280,
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => navigate(`/${product.name}`)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={product.name}
                image={product.image[0] ? product.image[0].link : null}
                sx={{ minHeight: 200, objectFit: "cover" }}
              />
            </CardActionArea>
            <CardContent sx={{ color: "text.secondary", fontWeight: "bold" }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                {`RP. ${parseFloat(product.price).toLocaleString("id-ID")}`}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <StarSharpIcon sx={{ color: "orange" }} />
                  {product.rating}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  Stock :{product.stock}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <Pagination
          count={totalPage || 1}
          page={currentPage}
          onChange={pageChanging}
        ></Pagination>
      </Box>
    </Box>
  );
};

export default Products;
