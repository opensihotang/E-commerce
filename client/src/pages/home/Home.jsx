import { Box } from "@mui/material";
import Appsbar from "../../components/appbar/appbar";
import Footer from "../../components/Footer/footer";

const Home = () => {
  return (
    <div>
      <Appsbar />
      <Box
        sx={{
          height: 700,
          margin: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Products
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
