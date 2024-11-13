import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-sm">
      <div className="container">
        <h1 className="display-4 font-weight-bold mb-3">Bienvenido a nuestra tienda</h1>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};



export default Header;
