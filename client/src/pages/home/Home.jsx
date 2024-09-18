import { Box } from "@mui/material";
import Appsbar from "../../components/appbar/appbar";
import Footer from "../../components/Footer/footer";
import Products from "../product/Product";

const Home = () => {
  return (
    <div>
      <Appsbar />
      <Box
        sx={{
          minHeight: 700,
          margin: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Products />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
