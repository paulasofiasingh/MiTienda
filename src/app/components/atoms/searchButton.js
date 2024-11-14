import React from 'react';

const SearchButton = ({ onClick, iconClass }) => {
    return (
      <button className="btn btn-primary ml-2" onClick={onClick}>
        <i className={iconClass}></i>
      </button>
    );
  };
  
  export default SearchButton;
  