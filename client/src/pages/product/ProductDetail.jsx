import { Box, IconButton, Typography } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";

const createMarkUp = (html) => {
  return { __html: html };
};

const product = {
  _id: {
    $oid: "6566c165801e99be12650c63",
  },
  name: "Channa Keynd",
  image: [
    {
      link: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg",
    },
    {
      link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/dddddd/000000",
    },
    {
      link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
    },
  ],
  desc: '<p><span style="color: rgb(33, 33, 33);">Infinix INBOOK X2</span></p><p><span style="color: rgb(33, 33, 33);">Color : Grey, Blue, Red</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Perfect Style, Amazing Display</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Processor : Intel® Core™ i7-1065G7 Processor 8M Cache, up to 3.90 GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Memory : 8GB DDR4</span></p><p><span style="color: rgb(33, 33, 33);">• Storage : SSD 512GB M.2 NVMe PCIe 3.0</span></p><p><span style="color: rgb(33, 33, 33);">• Operating System : Windows 11 Home</span></p><p><span style="color: rgb(33, 33, 33);">• Display : 14" FHD (1920*1080) IPS 300 nits, Colour Gamut100% sRGB, Viewing Angle178 degrees</span></p><p><span style="color: rgb(33, 33, 33);">• Graphics : Intel® Iris® Plus Graphics</span></p><p><span style="color: rgb(33, 33, 33);">• Battery : 50 Wh</span></p><p><span style="color: rgb(33, 33, 33);">• Wi-Fi : IEEE 802.11a/b/g/n/ac,160MHz 2.4GHz and 5GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Bluetooth : BT 5.1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Ports :</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data, Charging and DisplayPort)</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data)</span></p><p><span style="color: rgb(33, 33, 33);">USB 3.0 × 2</span></p><p><span style="color: rgb(33, 33, 33);">HDMI 1.4 × 1</span></p><p><span style="color: rgb(33, 33, 33);">SD card slot x 1</span></p><p><span style="color: rgb(33, 33, 33);">3.5 mm Headset and Microphone Jack x 1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Keyboard : Full-size Backlit Chiclet Keyboard</span></p><p><span style="color: rgb(33, 33, 33);">• Touchpad : Touchpad with Multi-touch</span></p><p><span style="color: rgb(33, 33, 33);">• Camera : Dual-Star light HD Video Camera</span></p><p><span style="color: rgb(33, 33, 33);">• Audio : Dual DTS audio processing</span></p><p><span style="color: rgb(33, 33, 33);">• Microphone : Microphone x 2</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• In The Box :</span></p><p><span style="color: rgb(33, 33, 33);">Inbook X2</span></p><p><span style="color: rgb(33, 33, 33);">45W USB-C Power Adapter</span></p><p><span style="color: rgb(33, 33, 33);">USB-C Charger Cable</span></p><p><span style="color: rgb(33, 33, 33);">Quick Start Guide</span></p><p><span style="color: rgb(33, 33, 33);">Warranty Card</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Case : Aluminium Alloy</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Garansi Resmi Infinix Indonesia 2 Tahun</span></p>',
  category: "Laptop",
  price: 2401709,
  capital: 2391709,
  profit: 10000,
  stock: 23,
  weight: 210,
  rating: 5,
  reviews: [
    {
      user: "64aa82aba176b956ba898348",
      rating: 5,
      comment:
        "Repair Right Upper Lung Lobe, Via Natural or Artificial Opening Endoscopic",
    },
  ],
};

const ProductDetail = () => {
  const [imageIndex, setIndex] = useState(0);
  const leftButton = () => {
    setIndex((imageIndex - 1 + product.image.length) % product.image.length);
  };
  const rightButton = () => {
    setIndex((imageIndex + 1) % product.image.length);
  };
  return (
    <Box>
      <Appbar />
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box sx={{ display: "flex", alignItems: "start", flex: 2 }}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              padding: 2,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src={product.image[imageIndex].link}
                alt={product.name}
                style={{
                  height: "450px",
                  width: "450px",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                position: "absolute",
                width: "510px",
              }}
            >
              <IconButton onClick={leftButton}>
                <ArrowLeftIcon />
              </IconButton>
              <IconButton onClick={rightButton}>
                <ArrowRightIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: 2,
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              {product.name}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", color: "grey" }}
            >
              <StarSharpIcon sx={{ color: "orange" }} />
              {product.rating} dari ({product.reviews.length})
            </Typography>
            <Typography sx={{ color: "grey" }}>
              {product.weight} Gram
            </Typography>
            <Typography
              sx={{ color: "black", fontWeight: "bold" }}
            >{`RP. ${parseFloat(product.price).toLocaleString(
              "id-ID"
            )}`}</Typography>
            <Typography dangerouslySetInnerHTML={createMarkUp(product.desc)} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flex: 1 }}>Counter</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetail;
