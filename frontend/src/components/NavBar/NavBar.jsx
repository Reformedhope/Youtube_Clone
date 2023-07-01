import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <b>Cat-tube</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
      
      <ul className="nav flex-column">
  <li className="nav-item">
  <a href="/videopage" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"aria-current="page">Video Page</a>
    
  </li>
</ul>
    </div>
  );
};

export default Navbar;
