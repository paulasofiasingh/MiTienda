import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary w-100">
      {text}
    </button>
  );
};


export default Button;
