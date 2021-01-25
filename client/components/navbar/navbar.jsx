import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import * as responsivenessQueries from "../../queries/responsiveness";
import * as navbarQueries from "./queries";

const SUBMENU = ["closed", "druzyny", "dlaharcerzy", "dlarodzicow"];

function Navbar() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const expandMenu = useCallback(() => {
    setIsExpanded(s => !s);
  }, [setIsExpanded]);

  const closeMenu = useCallback(() => {
    setIsExpanded(false);
    setMenu(SUBMENU[0]);
  }, [setIsExpanded]);

  const [menu, setMenu] = useState(SUBMENU[0]);

  const menu1 = useCallback(
    e => {
      e.preventDefault();
      if (menu != SUBMENU[1]) {
        setMenu(SUBMENU[1]);
        console.log(menu);
      } else {
        setMenu(SUBMENU[0]);
        console.log(menu);
      }
    },
    [menu]
  );

  const menu2 = useCallback(
    e => {
      e.preventDefault();
      if (menu !== SUBMENU[2]) {
        setMenu(SUBMENU[2]);
      } else {
        setMenu(SUBMENU[0]);
      }
    },
    [menu]
  );

  const menu3 = useCallback(
    e => {
      e.preventDefault();
      if (menu !== SUBMENU[3]) {
        setMenu(SUBMENU[3]);
      } else {
        setMenu(SUBMENU[0]);
      }
    },
    [menu]
  );

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div className="nav">
      {((isExpanded && responsivenessQueries.isMobile()) ||
        responsivenessQueries.isDesktop()) && (
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/"
              onClick={responsivenessQueries.isMobile() ? closeMenu : null}
            >
              STRONA GŁÓWNA
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/oboz"
              onClick={responsivenessQueries.isMobile() ? closeMenu : null}
            >
              OBÓZ
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/druzyny"
              onClick={responsivenessQueries.isMobile() ? menu1 : null}
            >
              DRUŻYNY
            </Link>
            {((navbarQueries.isOpened(SUBMENU[1], menu) &&
              responsivenessQueries.isMobile()) ||
              responsivenessQueries.isDesktop()) && (
              <ul className="nav__submenu">
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="/zuchy"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    ZUCHY
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="/harcerze"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    HARCERZE
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="/starsiharcerze"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    HARCERZE STARSI
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/wedrownicy">
                    WĘDROWNICY
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="dlaharcerzy"
              onClick={responsivenessQueries.isMobile() ? menu2 : null}
            >
              DLA HARCERZY
            </Link>
            {((navbarQueries.isOpened(SUBMENU[2], menu) &&
              responsivenessQueries.isMobile()) ||
              responsivenessQueries.isDesktop()) && (
              <ul className="nav__submenu">
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="/umundurowanie"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    UMUNDUROWANIE
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="/sprawnosci"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    STOPNIE I SPRAWNOŚCI
                  </Link>
                </li>
                <li className="nav__item">
                  <a
                    className="nav__link"
                    href="https://gkzhp-my.sharepoint.com/:f:/g/personal/aleksandra_szklarczyk_zhp_net_pl/EmbkaBfPErhGvQUwIrLy0cgBIbPFJuYhmbAFl3VNzLtY-w?e=kpTzpi"
                  >
                    ROZKAZY
                  </a>
                </li>
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="/dopobrania"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    DO POBRANIA
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="dlarodzicow"
              onClick={responsivenessQueries.isMobile() ? menu3 : null}
            >
              DLA RODZICÓW
            </Link>
            {((navbarQueries.isOpened(SUBMENU[3], menu) &&
              responsivenessQueries.isMobile()) ||
              responsivenessQueries.isDesktop()) && (
              <ul className="nav__submenu">
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="/onas"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    O NAS
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    className="nav__link"
                    to="podatku"
                    onClick={
                      responsivenessQueries.isMobile() ? closeMenu : null
                    }
                  >
                    1% PODATKU
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/kontakt"
              onClick={responsivenessQueries.isMobile() ? closeMenu : null}
            >
              KONTAKT
            </Link>
          </li>
        </ul>
      )}
      <div className="nav__toggler" onClick={expandMenu}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </div>
  );
}

export default Navbar;
