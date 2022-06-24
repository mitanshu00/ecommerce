import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ isAuth, redirectPath = "/", children }) => {
  if (isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
