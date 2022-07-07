import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ isAuth, redirectPath = "/", children }) => {
  if (isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

PublicRoute.propTypes = {
  isAuth: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};

export default PublicRoute;
