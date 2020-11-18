import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'

function Navbar () {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    const [isExpanded, setIsExpanded] = useState(false);
    const expandMenu = useCallback(() => {
        setIsExpanded(s => !s);
      }, [setIsExpanded]);
      
      const [isSubmenu1, setIsSubmenu1] = useState(false);
      const expandSubmenu1 = useCallback((e) => {
        e.preventDefault();
        setIsSubmenu2(false);
        setIsSubmenu1(s => !s);
        setIsSubmenu3(false);
        }, [setIsSubmenu1]);

        const [isSubmenu2, setIsSubmenu2] = useState(false);
        const expandSubmenu2 = useCallback((e) => {
          e.preventDefault();
          setIsSubmenu2(s => !s);
          setIsSubmenu1(false);
          setIsSubmenu3(false);
          }, [setIsSubmenu2]);

          const [isSubmenu3, setIsSubmenu3] = useState(false);
          const expandSubmenu3 = useCallback((e) => {
            e.preventDefault();
            setIsSubmenu3(s => !s);
            setIsSubmenu1(false);
            setIsSubmenu2(false);
            }, [setIsSubmenu2]);
       
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
          console.log(window.innerHeight, window.innerWidth);

        return (
        <div className="navbar">
            <ul className={isExpanded && window.innerWidth < 745 ? "nav__list--active"  : "nav__list"}>
                <li className="nav__item"><a className="nav__link" href="#">STRONA GŁÓWNA</a></li>
                <li className="nav__item"><a className="nav__link" href="#">OBÓZ</a></li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={window.innerWidth < 745 ? expandSubmenu1 : undefined} >DRUŻYNY</a>
                    <ul className={isSubmenu1 && window.innerWidth < 745 ? "nav__submenu--active"  : "nav__submenu"}>
                        <li className="nav__item"><a className="nav__link" href="#">ZUCHY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">HARCERZE</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">HARCERZE STARSI</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">WĘDROWNICY</a></li>
                    </ul>
                </li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={window.innerWidth < 745 ? expandSubmenu2 : undefined}>DLA HARCERZY</a>
                    <ul className={isSubmenu2 && window.innerWidth < 745 ? "nav__submenu--active"  : "nav__submenu"}>    
                        <li className="nav__item"><a className="nav__link" href="#">UMUNDUROWANIE</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">REGULAMINY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">ROZKAZY</a></li>
                        <li className="nav__item"><a className="nav__link" href="#">LINKI</a></li>
                    </ul>
                </li>
                <li className="nav__item"><a className="nav__link" href="#" onClick={window.innerWidth < 745 ? expandSubmenu3 : undefined}>DLA RODZICÓW</a>
                    <ul className={isSubmenu3 && window.innerWidth < 745 ? "nav__submenu--active"  : "nav__submenu"}>
                    <li className="nav__item"><a className="nav__link" href="#">O NAS</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">1% PODATKU</a></li>
                    </ul>
                </li>   
                <li className="nav__item"><Link className="nav__link" to="/kontakt">KONTAKT</Link></li>
            </ul>
            <div className="nav__toggler" onClick={expandMenu}>
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
            </div>
        </div>
    )
}

export default Navbar;
