import React from 'react';

function Links() {
  return (
    <div className="links">
      <div className="links__content">
        <div className="links__article">
          <p>Hufiec ZHP Trzebinia</p>

          <a href="http://trzebinia.zhp.pl/">
            <img
              src="./static/images/hufiec-zielony.png"
              className="hufiec-zielony"
            />
          </a>
        </div>
        <div className="links__article">
          <p>Chorągiew Krakowska</p>
          <a href="https://krakowska.zhp.pl/">
            <img src="./static/images/zhp-krakow.png" className="zhp-krakow" />
          </a>
        </div>
        <div className="links__article">
          <p>ZHP</p>
          <a href="https://zhp.pl/">
            <img
              src="./static/images/zhp-zielony.png"
              className="zhp-zielony"
            />
          </a>
        </div>
        <div className="links__article">
          <p>Znajdź nas na facebooku</p>
          <a href="https://www.facebook.com/1DWZubry">
            <img
              src="./static/images/facebook-logo.png"
              className="facebook-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
