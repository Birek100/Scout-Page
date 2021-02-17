import React from 'react';
import { Link } from 'react-router-dom';

function DlaHarcerzy() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="subnav">
          <h1 className="subnav__header">DLA HARCERZY</h1>
          <div className="subnav__content">
            <div className="subnav__article">
              <Link className="subnav__link" to="/umundurowanie">
                UMUNDUROWANIE
              </Link>
            </div>
            <div className="subnav__article">
              <Link className="subnav__link" to="/sprawnosci">
                STOPNIE I SPRAWNOŚCI
              </Link>
            </div>
            <div className="subnav__article">
              <a
                className="subnav__link"
                href="https://gkzhp-my.sharepoint.com/:f:/g/personal/aleksandra_szklarczyk_zhp_net_pl/EmbkaBfPErhGvQUwIrLy0cgBIbPFJuYhmbAFl3VNzLtY-w?e=kpTzpi">
                ROZKAZY
              </a>
            </div>
            <div className="subnav__article">
              <Link className="subnav__link" to="/dopobrania">
                DO POBRANIA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DlaHarcerzy;
