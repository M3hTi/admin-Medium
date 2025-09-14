import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticate } = useUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticate) {
      navigate("/", { replace: true });
    }
  }, [isLoading, isAuthenticate, navigate]);

  if (isLoading) {
    return <div>Loding data..</div>;
  }

  return children;
}

export default ProtectRoute;
