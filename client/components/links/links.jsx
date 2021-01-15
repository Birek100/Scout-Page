import React from "react";

function Links() {
  return (
    <div className="links">
      <div className="links__content">
        <div className="links__article">
          <p>Hufiec ZHP Trzebinia</p>
          <img
            src="./static/images/hufiec-zielony.png"
            className="hufiec-zielony"
          />
        </div>
        <div className="links__article">
          <p>Chorągiew Krakowska</p>
          <img src="./static/images/zhp-krakow.png" className="zhp-krakow" />
        </div>
        <div className="links__article">
          <p>ZHP</p>
          <img src="./static/images/zhp-zielony.png" className="zhp-zielony" />
        </div>
        <div className="links__article">
          <p>Znajdź nas na facebooku</p>
          <img
            src="./static/images/facebook-logo.png"
            className="facebook-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Links;
