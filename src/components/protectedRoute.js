import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthorizationHeader } from '../utils/Auth'

function ProtectedRoute() {
    const isLoggedIn = getAuthorizationHeader() ? true: false;

    console.log("this", isLoggedIn);

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;