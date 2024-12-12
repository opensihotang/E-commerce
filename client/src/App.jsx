import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import ProductDetail from "./pages/product/ProductDetail";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/order/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
