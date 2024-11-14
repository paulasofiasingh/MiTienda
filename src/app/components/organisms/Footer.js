import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../molecules/AboutUs';
import SocialLinks from '../molecules/SocialLinks';
import LinksList from '../molecules/LinkList';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <AboutUs />
          </div>
          <div className="col-md-4 mb-3">
            <LinksList />
          </div>
          <div className="col-md-4 mb-3">
            <SocialLinks />
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Nuestra Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;