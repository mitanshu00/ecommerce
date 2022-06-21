import { Navigate, Outlet } from "react-router-dom";

const SellerRoute = ({ isSeller, redirectPath = "/", children }) => {
  if (!isSeller) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default SellerRoute;
