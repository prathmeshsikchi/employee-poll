import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
  const isLogIn = useSelector((state) => state.isLogged);
  const location = useLocation();
  // console.log("redirected From Here");

  if (!isLogIn) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
