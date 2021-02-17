import React from 'react';

function Header() {
  return (
    <div className="header">
      <img src="./static/images/logo.png" className="header__logo" />
      <div className="header__fulltitle">
        <h1 className="header__title">Związek Drużyn Chełmek</h1>
        <h2 className="header__subtitle">im. Bohaterów Westerplatte</h2>
        <h2 className="header__subtitle">Hufiec ZHP Trzebinia</h2>
      </div>
    </div>
  );
}
export default Header;
