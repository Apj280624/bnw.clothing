import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import "react-toastify/dist/ReactToastify.css";

// my modules

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MyNavbar(props) {
  // console.log(props);
  const btnStyle = {
    backgroundColor: "var(--light-purple)",
    borderRadius: "6px",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontWeight: "600",
  };

  return (
    <div>
      <nav className="navbar-custom navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="custom-brand navbar-brand" to="#">
            <p className="brand-name">B&W clothing</p>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="alignment navbar-nav ms-auto">
              <li className="nav-item active">
                <Link to="#" className="nav-link" style={btnStyle}>
                  See designs
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#" className="nav-link" style={btnStyle}>
                  Try our AI fashion designer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// dont include a toast here parent already has one

export default MyNavbar;
