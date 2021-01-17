import React from "react";
import { Link } from "react-router-dom";

function Druzyny() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="subnav">
          <h1 className="subnav__header">DRUŻYNY</h1>
          <div className="subnav__content">
            <div className="subnav__article">
              <Link className="subnav__link" to="/zuchy">
                ZUCHY
              </Link>
            </div>
            <div className="subnav__article">
              <Link className="subnav__link" to="/harcerze">
                HARCERZE
              </Link>
            </div>
            <div className="subnav__article">
              <Link className="subnav__link" to="/starsiharcerze">
                HARCERZE STARSI
              </Link>
            </div>
            <div className="subnav__article">
              <Link className="subnav__link" to="#">
                WĘDROWNICY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Druzyny;
