import { Box } from "@mui/material";
import Appsbar from "../../components/appbar/appbar";
import Products from "../product/Product";
import Footer from "../../components/Footer/footer";

const Home = () => {
  return (
    <div>
      <Appsbar />
      <Box
        sx={{
          minHeight: 700,
          margin: 2,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Products />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
