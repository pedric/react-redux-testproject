import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to='/'>
          Home
        </NavLink>
        {" | "}
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
