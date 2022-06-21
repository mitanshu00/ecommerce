import Login from "./login";
import Register from "./register";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./cart/cart";
import Products from "./Shop/Products";
import Wishlist from "./Wishlist/Wishlist";
// import PlaceOrder from "./PlaceOrder/PlaceOrder";
import SelectAddress from "./PlaceOrder/SelectAddress";

function Dummy() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/cart">
        <button>Cart {cartQuantity}</button>
      </Link>
      <Link to="/wishlist">
        <button>Wishlist</button>
      </Link>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<Products />} />
        <Route path="/placeorder" element={<SelectAddress />} />
      </Routes>
    </div>
  );
}

export default Dummy;
