import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg scrolled">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Varcas</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["/", "/about", "/sponsor", "/gallery", "/team", "/contact"].map((path, i) => {
              const names = ["Home", "About", "Sponsor", "Gallery", "Team", "Contact"];
              return (
                <li className="nav-item" key={path}>
                  <Link
                    className={`nav-link ${location.pathname === path ? "active-link" : ""}`}
                    to={path}
                  >
                    {names[i]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
