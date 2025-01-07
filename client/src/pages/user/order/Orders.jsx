import { AppBar, Box } from "@mui/material";
import AppsBar from "../../../components/appbar/Appbar";
import Footer from "../../../components/Footer/footer";
import ListOrder from "./ListOrder";

const Orders = () => {
  return (
    <Box>
      <AppsBar />
      <Box sx={{ height: 620, padding: "30px" }}>
        <ListOrder />
      </Box>
      <Footer />
    </Box>
  );
};

export default Orders;
