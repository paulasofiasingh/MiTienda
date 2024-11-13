import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="font-weight-bold">Sobre Nosotros</h5>
            <p>Ofrecemos una amplia variedad de productos de alta calidad y un servicio excepcional para nuestros clientes.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="font-weight-bold">Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Inicio</a></li>
              <li><a href="#" className="text-white text-decoration-none">Productos</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="font-weight-bold">Seguinos</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-white"><FaTwitter size={24} /></a>
            </div>
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