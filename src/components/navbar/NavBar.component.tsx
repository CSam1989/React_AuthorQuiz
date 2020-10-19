import React from "react";
import { NavLink } from "react-router-dom";
import colors from "../../theme/_colors.scss";

import "./NavBar.styles.scss";

const Navbar = () => {
  const activeStyle = { borderBottom: `2px solid ${colors.border}` };
  return (
    <nav className="nav-bar">
      <NavLink to="/" exact activeStyle={activeStyle}>
        Quiz
      </NavLink>
      {" | "}
      <NavLink to="/create" activeStyle={activeStyle}>
        Add Author
      </NavLink>
    </nav>
  );
};

export default Navbar;
