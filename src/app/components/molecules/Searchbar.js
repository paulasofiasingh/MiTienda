import React from 'react';
import Input from '../atoms/input';
import SearchButton from '../atoms/searchButton';
import '@fortawesome/fontawesome-free/css/all.min.css';


const SearchBar = () => {

  return (
    <div className="search-bar d-flex align-items-center">
      <Input placeholder="Buscar productos..." ariaLabel="Buscar" />
      <SearchButton iconClass="fa fa-search" />
    </div>
  );
};

export default SearchBar;