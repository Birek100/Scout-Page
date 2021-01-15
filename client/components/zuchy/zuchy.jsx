import React from "react";

function Zuchy() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <h1 className="content__header">
            1 GZ "Przyjaciele Bajkowej Akademii"
          </h1>
          <div className="content__article">
            <p>
              Gromada zuchowa zrzesza dzieci z klas 0 - 3. Zbiórki odbywają się
              we wtorki o godz. 17:30 - 19:00 w harcówce. Zapraszamy chętnych do
              wstąpienia w szeregi zuchów!
            </p>
          </div>
          <div className="content__article">
            <p>KADRA:</p>
            <p>Drużynowa: pwd. Dorota Szklarczyk</p>
            <p>Przyboczna: phm. Wioletta Suska</p>
          </div>
          <div className="content__article">
            <p>Kontakt</p>
            <p>email: dorota.szklarczyk@zhp.net.pl</p>
          </div>
          <div className="content__article">
            <p>Nasze zuchy mają już Facebooka</p>
          </div>
          <div className="content__facebook">
            <a
              href="https://www.facebook.com/1GZPrzyjacieleBajkowejAkademii"
              target="_blank"
            >
              <img src="./static/images/FB.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zuchy;
