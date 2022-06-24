import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/validators/ProtectedRoute";
import PublicRoute from "./components/validators/PublicRoute";
import Navbar from "./components/layout/nav/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Product from "./components/pages/product/Product";
import { catActions } from "./store/slice/categories-slice";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/product-list/Products";
import Cart from "./components/pages/cart/Cartt";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import Wishlist from "./components/pages/wishlist/Wishlist";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/register";

import Profile from "./components/pages/profile/Profile";
import { subCatActions } from "./store/slice/subcategories-slice";
import { brandActions } from "./store/slice/brands-slice";
import NotFound from "./components/pages/error-pages/NotFound";
import Seller from "./components/seller/Seller";
import Category from "./components/pages/category/Category";
import { authCheck, sellerCheck } from "./store/action/auth-action";
import Search from "./components/pages/product-list/Search";
import { fetchCartData } from "./store/action/cart-action";
import SellerRoute from "./components/validators/SellerRoute";
import Order from "./components/pages/order/Order";
// import PlaceOrder from "./components/pages/checkout/PlaceOrder";

function App() {
  let apiUrl = process.env.REACT_APP_API_URL;
  let dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  let userId = isAuth?.user?.user?.id;

  useEffect(() => {
    fetch(`${apiUrl}/main_categories`)
      .then((res) => res.json())
      .then((data) => dispatch(catActions.add(data)))
      .catch((err) => console.log(err));

    fetch(`${apiUrl}/sub_categories`)
      .then((res) => res.json())
      .then((data) => dispatch(subCatActions.add(data)))
      .catch((err) => console.log(err));

    fetch(`${apiUrl}/brands`)
      .then((res) => res.json())
      .then((data) => dispatch(brandActions.add(data.data)))
      .catch((err) => console.log(err));
  }, [apiUrl, dispatch]);

  // useeffect check if user is logged in
  useEffect(() => {
    dispatch(authCheck());
    dispatch(sellerCheck());
    dispatch(fetchCartData(userId));
  }, [dispatch, userId]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              isAuth={isAuth.isAuthenticated}
              isSeller={isAuth.isSeller}
            />
          }
        >
          <Route path="/" element={<Home isAuth={isAuth.isAuthenticated} />} />
          <Route path="/:subcategory" element={<Products />} />
          <Route path="/c/:category" element={<Category />} />

          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cart/placeorder" element={<PlaceOrder />} />

          <Route path="/Search/:query" element={<Search />} />

          <Route element={<PublicRoute isAuth={isAuth.isAuthenticated} />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="Order" element={<Order />} />
          <Route path="PlaceOrder" element={<PlaceOrder />} />
          <Route element={<ProtectedRoute isAuth={isAuth.isAuthenticated} />}>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route element={<SellerRoute isSeller={isAuth.sellerId} />}>
          <Route path="seller" element={<Seller />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ? private route for seller
