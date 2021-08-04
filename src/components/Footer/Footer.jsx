import React from 'react';
import { Heart } from 'react-feather';
import './Footer.css'

const Footer = () => {

  const year = new Date();

  return (
    <div className="footerWrapper">
      <span>© {year.getFullYear()} Made with <Heart size={16} /> by <a href="https://github.com/lipob" target="_blank" rel="noreferrer">Leopoldo Blanco</a></span>
    </div>
  );
}

export default Footer;