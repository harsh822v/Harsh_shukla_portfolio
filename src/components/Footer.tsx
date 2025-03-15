
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Shukla Harsh Pravinbhai. All rights reserved.</p>
        <p className="address">3/9/36, Ram Society, Partynagar-1, Dalmill Road, Surendranagar, Gujarat-363001</p>
        <p className="phone">+91 9601026883</p>
      </div>
    </footer>
  );
};

export default Footer;
