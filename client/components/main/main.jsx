import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Main() {
  const [mainIsExpanded, setMainIsExpanded] = useState(false);
  const expandMain = useCallback(() => {
    setMainIsExpanded(true);
  }, [setMainIsExpanded]);

  return (
    <div className="main">
      <div className="main__posts">
        <div className="main__post">
          <Link to="/post9">
            <div className="main__image-container">
              <img
                src="./static/images/post_images/fotokonkurs.jpg"
                className="main__image"
              />
            </div>
            <h2 className="main__header">Zimowy konkurs fotograficzny</h2>
          </Link>
        </div>
        <div className="main__post">
          <Link to="/post8">
            <div className="main__image-container">
              <img
                src="./static/images/post_images/zbiorka_zywnosci.jpg"
                className="main__image"
              />
            </div>
            <h2 className="main__header">Zbiórka żywności 14 - 16 grudnia</h2>
          </Link>
        </div>
        <div className="main__post">
          <Link to="/post7">
            <div className="main__image-container">
              <img
                src="./static/images/post_images/mikolajkowy_bieg.png"
                className="main__image"
              />
            </div>
            <h2 className="main__header">Rodzinny Mikołajkowy Bieg Terenowy</h2>
          </Link>
        </div>
        <div className="main__post">
          <Link to="/post6">
            <div className="main__image-container">
              <img
                src="./static/images/post_images/zbiorka_teatralna.png"
                className="main__image"
              />
            </div>
            <h2 className="main__header">Zuchowa Zbiórka Teatralna</h2>
          </Link>
        </div>
        <div className="main__post">
          <Link to="/post5">
            <div className="main__image-container">
              <img
                src="./static/images/post_images/trzepak.jpg"
                className="main__image"
              />
            </div>
            <h2 className="main__header">Festiwal TRZEPAK on-line</h2>
          </Link>
        </div>
        <div className="main__post">
          <Link to="/post4">
            <div className="main__image-container">
              <img
                src="./static/images/post_images/11grainfo.jpg"
                className="main__image"
              />
            </div>
            <h2 className="main__header">Indywidualna gra 11 listopada</h2>
          </Link>
        </div>
        {mainIsExpanded || (
          <div className="main__more">
            <p onClick={expandMain}>Więcej postów</p>
          </div>
        )}
        {mainIsExpanded && (
          <div className="main-posts">
            <div className="main__post">
              <Link to="/post3">
                <div className="main__image-container">
                  <img
                    src="./static/images/post_images/zbiorki_online.png"
                    className="main__image"
                  />
                </div>
                <h2 className="main__header">Zbiórki online</h2>
              </Link>
            </div>
            <div className="main__post">
              <Link to="/post2">
                <div className="main__image-container">
                  <img
                    src="./static/images/post_images/powrot_zbiorek.jpg"
                    className="main__image"
                  />
                </div>
                <h2 className="main__header">Powrót zdalnych zbiórek</h2>
              </Link>
            </div>
            <div className="main__post">
              <Link to="/post1">
                <div className="main__image-container">
                  <img
                    src="./static/images/post_images/pierwsza_pomoc.jpg"
                    className="main__image"
                  />
                </div>
                <h2 className="main__header">Kurs pierwszej pomocy</h2>
              </Link>
            </div>
            <div className="main__more">
              <p>Przejdź do archiwum</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
