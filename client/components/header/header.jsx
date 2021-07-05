import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <img
          src="./static/images/logo.png"
          className="header__logo"
          href="localhost:4000"
        />
      </Link>
      <div className="header__fulltitle">
        <h1 className="header__title">Związek Drużyn Chełmek</h1>
        <h2 className="header__subtitle">im. Bohaterów Westerplatte</h2>
        <h2 className="header__subtitle">Hufiec ZHP Trzebinia</h2>
      </div>
    </div>
  );
}
export default Header;
