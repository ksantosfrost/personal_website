// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'; // So these header styles are in effect

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">KeanuSF.</Link>

      <nav className="navbar">
        {/* Use <Link> for internal navigation */}
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
