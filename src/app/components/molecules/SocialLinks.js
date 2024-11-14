import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div>
      <h5 className="font-weight-bold">Seguinos</h5>
      <div className="d-flex">
        <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
        <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
        <a href="#" className="text-white"><FaTwitter size={24} /></a>
      </div>
    </div>
  );
};

export default SocialLinks;