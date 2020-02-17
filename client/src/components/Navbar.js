import React, { useState } from "react";
import {Link} from "react-router-dom";


export default () => {
  let [navbarState, setNavbarState] = useState("collapse navbar-collapse");

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">ReactJS Validation</Link>  

      <button className="navbar-toggler" type="button" onClick={() => toggleNav(navbarState, setNavbarState)}>
        <span className="navbar-toggler-icon"></span>
      </button>  

      <div className={navbarState} id="navbar-content">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/form" className="nav-link">Form</Link>
          </li>
          <li className="nav-item">
            <Link to="/data" className="nav-link">Database</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const toggleNav = (navbarState, setNavbarState) => {
  if (navbarState === "collapse navbar-collapse") {
    setNavbarState("navbar-collapse");
  } else {
    setNavbarState("collapse navbar-collapse");
  }
}