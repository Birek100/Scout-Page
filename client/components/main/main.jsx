import React from "react";

function Content() {
  return (
    <div className="main">
      <div className="main__posts">
        <div className="main__post">
        <div className="main__image-container">
          <img src="./static/images/post_images/fotokonkurs.jpg" className="main__image" />
          </div>
          <h2 className="main__header">Zimowy konkurs fotograficzny</h2>
        </div>
        <div className="main__post">
        <div className="main__image-container">
          <img src="./static/images/post_images/zbiorka_zywnosci.jpg" className="main__image" />
          </div>
          <h2 className="main__header">OBÓZ 2020 ODWOŁANY</h2>
        </div>
        <div className="main__post">
        <div className="main__image-container">
          <img src="./static/images/post_images/mikolajkowy_bieg.png" className="main__image" />
          </div>
          <h2 className="main__header">Rodzinny Mikołajkowy Bieg Terenowy</h2>
        </div>
        <div className="main__post">
        <div className="main__image-container">
          <img src="./static/images/zbiorka_teatralna.png" className="main__image" />
          </div>
          <h2 className="main__header">Zuchowa Zbiórka Teatralna</h2>
        </div>
        <div className="main__post">
        <div className="main__image-container">
          <img src="./static/images/no-image.jpg" className="main__image" />
          </div>
          <h2 className="main__header">POST5</h2>
        </div>
        <div className="main__post">
        <div className="main__image-container">
          <img src="./static/images/no-image.jpg" className="main__image" />
          </div>
          <h2 className="main__header">POST6</h2>
        </div>
      </div>
      <div className="main__more">
        <p>Pokaż więcej</p>
      </div>
    </div>
  );
}

export default Content;
