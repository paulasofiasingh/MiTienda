import React from 'react';

const NavLinks = ({linksData}) => {
  return (
    <ul className="navbar-nav ml-auto px-3">
      {linksData.map((link, index) => (
        <li key={index} className="nav-item">
          <a className="nav-link text-white hover-effect" href={link.href}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
