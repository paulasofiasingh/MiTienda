import React from 'react';
import NavLinks from './navLinks';
import linksData from '@/app/data/linksData';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
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
          <NavLinks linksData = {linksData}/>
        </div>
      </nav>
    );
  };

export default Navbar;