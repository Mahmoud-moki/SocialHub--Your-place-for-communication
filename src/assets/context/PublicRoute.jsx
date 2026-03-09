import { useContext } from "react";
import { AuthContext } from "./Auth";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }) {
    const { userToken } = useContext(AuthContext);
  
    if (userToken) {
      return <Navigate to="/home" replace />;
    }
  
    return children;
  }