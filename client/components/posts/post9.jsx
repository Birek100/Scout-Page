import React from "react";

function Post9() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Zbiórka żywności 14 - 16 grudnia</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/fotokonkurs.jpg" />
          </div>
          <div className="content__article">
            <p>
              <span classNAme="bold">
                Zapraszamy do udziału w konkursie fotograficznym Harcerska Zima
              </span>
            </p>
          </div>
          <div className="content__article">
            <p>Czas trwania konkursu: od 06.01.2021 do 28.02.2021</p>
          </div>
          <div className="content__article">
            <p>Wszystkie szczegóły dostępne w regulaminie w linku poniżej.</p>
          </div>
          <div className="content__article">
            <a href="https://drive.google.com/file/d/15FampBpu2xwEN2alpTHaIRyllJomcLPM/view?usp=sharing">
              REGULAMIN
            </a>
          </div>
          <div className="content__article">
            <p>
              Decyzją organizatora w konkursie mogą brać udział również dzieci
              ze świetlic działających pod patronatem ZHP.{" "}
            </p>
          </div>
          <div className="content__article">
            <p>Czuwaj!</p>
          </div>

          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post9;
