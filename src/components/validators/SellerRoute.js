import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const SellerRoute = ({ isSeller, redirectPath = "/", children }) => {
  if (!isSeller) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

SellerRoute.propTypes = {
  isSeller: PropTypes.number,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
export default SellerRoute;
