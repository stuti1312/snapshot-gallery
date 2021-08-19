import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("LoginData");
  };
  return (
    <div>
      <Link to="/login">Login </Link>
      <Link to="/signup">Signup </Link>
      <Link to="/searchimage">Home </Link>
      {localStorage.getItem("LoginData") && (
        <Link to="/logout" onClick={logout}>
          Logout
        </Link>
      )}
    </div>
  );
}
