import React, { useState, useCallback, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import * as responsivenessQueries from '../../queries/responsiveness';
import * as navbarQueries from './queries';

const SUBMENU = ['closed', 'druzyny', 'dlaharcerzy', 'dlarodzicow']



function Navbar () {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    const [isExpanded, setIsExpanded] = useState(false);
    const expandMenu = useCallback(() => {
        setIsExpanded(s => !s);
      }, [setIsExpanded]);
      
      
      const [menu, setMenu] = useState(SUBMENU[0]);

      const menu1 = useCallback((e) => {
        e.preventDefault();
        if (menu != SUBMENU[1]) {
        setMenu(SUBMENU[1])
        console.log(menu)
        }
        else {
            setMenu(SUBMENU[0])
        console.log(menu)
        }
    }, [menu]);

    const menu2 = useCallback((e) => {
        e.preventDefault();
        if (menu !== SUBMENU[2]) {
        setMenu(SUBMENU[2])
        }
        else {
            setMenu(SUBMENU[0])
        }
    }, [menu]);

    const menu3 = useCallback((e) => {
        e.preventDefault();
        if (menu !== SUBMENU[3]) {
        setMenu(SUBMENU[3])
        }
        else {
            setMenu(SUBMENU[0])
        }
    }, [menu]);
       
        useEffect(() => {
            function handleResize() {
                setDimensions({
                    height: window.innerHeight,
                    width: window.innerWidth})
                }
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }, [window.innerWidth]);


        return (
        <div className="navbar">
            {((isExpanded && responsivenessQueries.isMobile()) || responsivenessQueries.isDesktop()) && (
            <ul className="nav__list">
                <li className="nav__item"><Link className="nav__link" to="/" href="#">STRONA GŁÓWNA</Link></li>
                <li className="nav__item"><a className="nav__link" href="#">OBÓZ</a></li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={responsivenessQueries.isMobile() ? menu1 : undefined} >DRUŻYNY</a>                
                {((navbarQueries.isOpened(SUBMENU[1], menu) && responsivenessQueries.isMobile()) || responsivenessQueries.isDesktop()) && (
                    <ul className="nav__submenu">
                        <li className="nav__item"><a className="nav__link" href="#">ZUCHY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">HARCERZE</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">HARCERZE STARSI</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">WĘDROWNICY</a></li>
                    </ul>
                )}
                </li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={responsivenessQueries.isMobile() ? menu2 : undefined}>DLA HARCERZY</a>
                {((navbarQueries.isOpened(SUBMENU[2], menu) && responsivenessQueries.isMobile()) || responsivenessQueries.isDesktop()) && (
                <ul className="nav__submenu">   
                        <li className="nav__item"><a className="nav__link" href="#">UMUNDUROWANIE</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">REGULAMINY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">ROZKAZY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">LINKI</a></li>
                    </ul>
                    )}
                </li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={responsivenessQueries.isMobile() ? menu3 : undefined}>DLA RODZICÓW</a>
                {((navbarQueries.isOpened(SUBMENU[3], menu) && responsivenessQueries.isMobile()) || responsivenessQueries.isDesktop()) && (
                <ul className="nav__submenu">
                    <li className="nav__item"><a className="nav__link" href="#">O NAS</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">1% PODATKU</a></li>
                    </ul>
                    )}
                </li>   
                <li className="nav__item"><Link className="nav__link" to="/kontakt">KONTAKT</Link></li>
            </ul>
            )}
            <div className="nav__toggler" onClick={expandMenu}>
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
            </div>
        </div>
    )
}

export default Navbar;
