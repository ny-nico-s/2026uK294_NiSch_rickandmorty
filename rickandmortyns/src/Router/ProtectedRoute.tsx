import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../Services/AuthService";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
