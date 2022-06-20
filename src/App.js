import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/validators/ProtectedRoute";
// import PublicRoute from "./components/validators/PublicRoute";
import Navbar from "./components/layout/nav/Navbar";
import { useSelector } from "react-redux";
import Product from "./components/pages/product/Product";
import { useDispatch } from "react-redux";
import { catActions } from "./store/slice/categories-slice";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/product-list/Products";

function App() {
  let apiUrl = process.env.REACT_APP_API_URL;
  let dispatch = useDispatch();

  useEffect(() => {
    fetch(`${apiUrl}/main_categories`)
      .then((res) => res.json())
      .then((data) => dispatch(catActions.add(data)));
  }, [apiUrl, dispatch]);

  const isAuth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar isAuth={isAuth.isAuthenticated} />}>
          <Route path="/" element={<Home isAuth={isAuth.isAuthenticated} />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/Product/:id" element={<Product />} />

          {/* <Route path="register" element={<Register />} />
            <Route
              path="login"
              element={<Login setLoggedUser={setLoggedUser} />}
            /> */}
          <Route element={<ProtectedRoute isAuth={isAuth.isAuthenticated} />}>
            {/* <Route path="whishlist" element={<Whishlist />} />*/}
            {/* <Route path="Order" element={<Order />} />*/}
            {/* <Route path="Profile" element={<Profile />} />*/}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
