import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className='jumbotron'>
      <h1>About</h1>
      <p>About page</p>
      <Link to='/' className='btn btn-primary'>
        Home
      </Link>
    </div>
  );
};

export default AboutPage;
