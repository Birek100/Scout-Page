import React from 'react';

function Links () {
    return(
        <div className="links">
            <div className="links-content">
                <div className="link">
                    Hufiec ZHP Trzebinia<br />
                    <img src="./static/images/hufiec-zielony.png" className="hufiec-zielony" />
                </div>
                <div className="link">
                    Chorągiew Krakowska<br />
                    <img src="./static/images/zhp-krakow.png" className="zhp-krakow" />
                </div>
                <div className="link">
                    ZHP<br />
                    <img src="./static/images/zhp-zielony.png" className="zhp-zielony" />
                </div>
                <div className="link">
                    Znajdź nas na facebooku<br />
                    <img src="./static/images/facebook-logo.png" className="facebook-logo" />
                </div>
            </div>
        </div>
    )
};

export default Links;