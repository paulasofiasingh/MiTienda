import React from 'react';

const Input = ({ placeholder, ariaLabel }) => {
    return (
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    );
  };
  
  export default Input;
  