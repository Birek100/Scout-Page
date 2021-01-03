import React from 'react';

function Content () {
    return (
        <div className="content">
            <div className="content__posts">
                <div className="content__post">
                    <img src="./static/images/no-image.jpg" className="content__image" />
                    <h2 className="content__header">WRACAMY NA ZBIÓRKI</h2>
                </div>
                <div className="content__post">
                    <img src="./static/images/no-image.jpg" className="content__image" />
                    <h2 className="content__header">OBÓZ 2020 ODWOŁANY</h2>
                </div>
                <div className="content__post">
                    <img src="./static/images/no-image.jpg" className="content__image" />
                    <h2 className="content__header">POST3</h2>
                </div>
                <div className="content__post">
                    <img src="./static/images/no-image.jpg" className="content__image" />
                    <h2 className="content__header">POST4</h2>
                </div>
                <div className="content__post">
                    <img src="./static/images/no-image.jpg" className="content__image" />
                    <h2 className="content__header">POST5</h2>
                </div>
                <div className="content__post">
                    <img src="./static/images/no-image.jpg" className="content__image" />
                    <h2 className="content__header">POST6</h2>
                </div>
            </div>
            <div className="content__more">
                <p>Pokaż więcej</p>
            </div>
        </div>
    )
};

export default Content