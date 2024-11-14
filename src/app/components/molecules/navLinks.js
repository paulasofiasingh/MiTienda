import React from 'react';

const NavLinks = () => {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link text-white hover-effect" href="#">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white hover-effect" href="#">
            Productos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white hover-effect" href="#">
            Contacto
          </a>
        </li>
      </ul>
    );
  };

export default NavLinks;