import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ isAuth, redirectPath = "login/", children }) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};

export default ProtectedRoute;
