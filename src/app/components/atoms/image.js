import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageAtom = ({ src, alt }) => {
  return <img src={src} alt={alt} className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />;
};


export default ImageAtom;
