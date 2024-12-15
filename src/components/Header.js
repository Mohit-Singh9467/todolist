import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio Site</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  </header>
);

export default Header;
