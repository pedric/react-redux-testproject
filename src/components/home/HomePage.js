import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='jumbotron'>
      <h1>Home</h1>
      <p>Admin area</p>
      <Link to='about' className='btn btn-primary'>
        About
      </Link>
    </div>
  );
};

export default HomePage;
