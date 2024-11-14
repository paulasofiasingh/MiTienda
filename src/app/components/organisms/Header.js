import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../atoms/logo'
import SearchBar from '../molecules/Searchbar';
import CartIcon from '../atoms/cardIcon';
import Navbar from '../molecules/Navbar';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Logo />

        {/* Barra de búsqueda */}
        <SearchBar />

        {/* Carrito de compras */}
        <CartIcon />
      </div>

      {/* Navbar con los enlaces */}
      <Navbar />
    </header>
  );
};




export default Header;
