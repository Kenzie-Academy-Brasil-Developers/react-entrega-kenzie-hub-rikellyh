import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { user, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const pathname = window.location.pathname;
      if (pathname !== "/") {
        setLoading(true);
      }
      navigate("/");
    }
  });

  return <>{user && <Outlet />}</>;
};

export default ProtectedRoutes;
