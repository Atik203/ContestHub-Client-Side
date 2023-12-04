import React from "react";
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const CreatorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  if (user && isAdmin === "creator") return children;

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default CreatorRoute;
