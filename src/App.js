import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/validators/ProtectedRoute";
import PublicRoute from "./components/validators/PublicRoute";
import Navbar from "./components/layout/nav/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Product from "./components/pages/product/Product";
import { catActions } from "./store/slice/categories-slice";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import Wishlist from "./components/pages/wishlist/Wishlist";
import Login2 from "./components/pages/login-reg/login2";
import Register2 from "./components/pages/login-reg/register2";
import Profile from "./components/pages/profile/Profile";
import { subCatActions } from "./store/slice/subcategories-slice";
import { brandActions } from "./store/slice/brands-slice";
import NotFound from "./components/pages/error-pages/NotFound";
import Seller from "./components/seller/Seller";
import Category from "./components/pages/category/Category";
import { authCheck, sellerCheck } from "./store/action/auth-action";
import { fetchCartData } from "./store/action/cart-action";
import SellerRoute from "./components/validators/SellerRoute";
import CircularProgress from "@mui/material/CircularProgress";
import PlaceOrder from "./components/pages/placeorder/PlaceOrder";

// import Products from "./components/pages/product-list/Products";
// import Search from "./components/pages/product-list/Search";
const Search = React.lazy(() =>
  import("./components/pages/product-list/Search")
);
const Products = React.lazy(() =>
  import("./components/pages/product-list/Products")
);

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  const token = isAuth?.user?.token;

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
    dispatch(fetchCartData(token));
  }, [dispatch, token]);

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
          <Route
            path="/:subcategory"
            element={
              <Suspense fallback={<CircularProgress size={14} />}>
                <Products />
              </Suspense>
            }
          />
          <Route path="/c/:category" element={<Category />} />

          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/Search/:query"
            element={
              <Suspense fallback={<CircularProgress size={14} />}>
                <Search />
              </Suspense>
            }
          />

          <Route element={<PublicRoute isAuth={isAuth.isAuthenticated} />}>
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/register" element={<Register2 />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/login" element={<Login2 />} />
          </Route>
          <Route element={<ProtectedRoute isAuth={isAuth.isAuthenticated} />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
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
