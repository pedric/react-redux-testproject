import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "tomato" };

  return (
    <header>
      <nav>
        <NavLink activeStyle={activeStyle} exact to='/'>
          Home
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to='/about'>
          About
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to='/courses'>
          Courses
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
