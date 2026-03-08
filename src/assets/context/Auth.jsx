import React, { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userToken, setUserAuthToken] = useState(
    localStorage.getItem("token")
  );

  return (
    <AuthContext.Provider value={{ userToken, setUserAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function ProtectedRoute({ children }) {
  const { userToken } = useContext(AuthContext);
  const location = useLocation();

  if (!userToken) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}