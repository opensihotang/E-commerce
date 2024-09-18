import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import products from "../../data/Products";
import { CardActionArea } from "@mui/material";

const Products = () => {
  return (
    <>
      {products.map((product) => (
        <Card key={product.name} sx={{ width: 210, height: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.name}
              image={product.image[0] ? product.image[0].link : null}
              sx={{ minHeight: 200 }}
            />
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default Products;
