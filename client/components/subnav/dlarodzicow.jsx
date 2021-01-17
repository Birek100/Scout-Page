import React from "react";
import { Link } from "react-router-dom";

function DlaRodzicow() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="subnav">
          <h1 className="subnav__header">DLA RODZICÓW</h1>
          <div className="subnav__content">
            <div className="subnav__article">
              <Link className="subnav__link" to="/onas">
                O NAS
              </Link>
            </div>
            <div className="subnav__article">
              <Link className="subnav__link" to="/#">
                1% PODATKU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DlaRodzicow;
