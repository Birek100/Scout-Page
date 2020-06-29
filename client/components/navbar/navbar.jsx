import React, { useState } from 'react';

function Navbar () {
    const [drop, setDrop] = useState(true);
    console.log(drop);
    function dropMenu() {
        setDrop(!drop);
        console.log(drop);
    };
    let dropClass = drop ? "submenu-d" : "submenu";
        return (
        <div className="navbar">
            <ul className="nav-list">
                <li><a href="#" className="nav-item">STRONA GŁÓWNA</a></li>
                <li><a href="#" className="nav-item">OBÓZ</a></li>
                <li><a href className="nav-item dropdown" onClick={ dropMenu }>DRUŻYNY</a></li>
                    <ul className="submenu-d">
                        <li><a href="#">ZUCHY</a></li>
                        <li><a href="#">HARCERZE</a></li>
                        <li><a href="#">HARCERZE STARSI</a></li>
                        <li><a href="#">WĘDROWNICY</a></li>
                    </ul>
                <li><a href className="nav-item dropdown" onClick={ dropMenu }>DLA HARCERZY</a></li>
                    <ul className="submenu-d">    
                        <li><a href="#">UMUNDUROWANIE</a></li>
                        <li><a href="#">REGULAMINY</a></li>
                        <li><a href="#">ROZKAZY</a></li>
                        <li><a href="#">LINKI</a></li>
                    </ul>
                <li><a href className="nav-item dropdown" onClick={ dropMenu }>DLA RODZICÓW</a></li>
                        
                        <ul className={ dropClass }>
                        <li><a href="#">O NAS</a></li>
                        <li><a href="#">1% PODATKU</a></li>
                        </ul>
                    
                <li><a href="#" className="nav-item">KONTAKT</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
