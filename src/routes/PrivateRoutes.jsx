import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function PrivateRoutes() {
  console.log("this is route");
  const {
    auth: { isAuth },
  } = useAuth();
  const location = useLocation();
  console.log("location is", location);
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoutes };
