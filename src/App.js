import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/validators/ProtectedRoute";
// import PublicRoute from "./components/validators/PublicRoute";
import Navbar from "./components/layout/nav/Navbar";
import { useSelector } from "react-redux";
import Home from "./components/pages/home/Home";

function App() {
  const isAuth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar isAuth={isAuth.isAuthenticated} />}>
          <Route path="/" element={<Home isAuth={isAuth.isAuthenticated} />} />

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
