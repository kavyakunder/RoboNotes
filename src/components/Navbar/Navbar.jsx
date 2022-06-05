import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./navbar.css";
function Navbar() {
  const { auth, setAuth } = useAuth();
  const redirect = useNavigate();

  const signoutAuth = (setAuth) => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("username");
    setAuth(() => ({
      isAuth: false,
      token: null,
      user: "",
    }));
    redirect("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-options">
        <Link className="navbar-links" to="/">
          Home
        </Link>
        {auth.isAuth === true ? (
          <>
            <Link className="navbar-links" to="/notes">
              Notes
            </Link>
            <button onClick={() => signoutAuth(setAuth)}>Logout</button>
          </>
        ) : (
          <Link className="navbar-links" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
