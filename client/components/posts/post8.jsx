import React from "react";

function Post8() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Zbiórka żywności 14 - 16 grudnia</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/zbiorka_zywnosci.jpg" />
          </div>
          <div className="content__article">
            <p>
              W czasie dyżurów w harcówce dostępni będą do dyspozycji drużynowi
              (można wtedy uregulować składki członkowskie).
            </p>
          </div>
          <div className="content__article">
            <p>Oraz</p>
          </div>
          <div className="content__article">
            <p>Odpalić dla siebie Betlejemskie Światło Pokoju.</p>
          </div>

          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post8;
