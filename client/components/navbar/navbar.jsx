import React, { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom'

function Navbar () {
    const [isExpanded, setIsExpanded] = useState(false);
    const expandMenu = useCallback(() => {
        setIsExpanded(s => !s);
      }, [setIsExpanded]);

        return (
        <div className="navbar">
            <ul className="nav__list">
                <li className="nav__item"><a className="nav__link" href="#">STRONA GŁÓWNA</a></li>
                <li className="nav__item"><a className="nav__link" href="#">OBÓZ</a></li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={ expandMenu }>DRUŻYNY</a>
                    {isExpanded && (
                    <ul className="nav__submenu">
                        <li className="nav__item"><a className="nav__link" href="#">ZUCHY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">HARCERZE</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">HARCERZE STARSI</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">WĘDROWNICY</a></li>
                    </ul>
                    )}
                </li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={ expandMenu }>DLA HARCERZY</a>
                    {isExpanded && (
                    <ul className="nav__submenu">    
                        <li className="nav__item"><a className="nav__link" href="#">UMUNDUROWANIE</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">REGULAMINY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">ROZKAZY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">LINKI</a></li>
                    </ul>
                    )}
                </li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={ expandMenu }>DLA RODZICÓW</a>
                    {isExpanded && (
                    <ul className="nav__submenu">
                    <li className="nav__item"><a className="nav__link" href="#">O NAS</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">1% PODATKU</a></li>
                    </ul>
                    )}
                </li>   
                <li className="nav__item"><Link className="nav__link" to="/kontakt">KONTAKT</Link></li>
            </ul>
            <div className="nav__toggler">
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
            </div>
        </div>
    )
}

export default Navbar;
