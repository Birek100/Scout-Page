import React from 'react';

function Harcerze() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <h1 className="content__header">1 DH &quot;Bór&quot;</h1>
          <div className="content__article">
            <p>
              Drużyna harcerska skupia dzieci z klas 4 - 6. Zbiórki odbywają się
              w soboty o godz. 11:00 - 12:30 w harcówce przy ul. Kochanowskiego
              1.
            </p>
          </div>
          <div className="content__article">
            <p>Co mówią o sobie?</p>
          </div>

          <div className="content__article">
            <p>
              &quot;Nazywamy się „Bór” ponieważ interesujemy się tematyką leśną,
              tropieniem zwierząt, wędrówkami, sztuką przetrwania w lesie.
              Uwielbiamy zajęcia terenowe, biegi patrolowe, szyfry, podchody,
              robienie szałasów. Do naszej obrzędowości należą: obrzędowe
              rozpoczęcie i zakończenie zbiórki, okrzyk, piosenka, plakietka
              drużyny.&quot;
            </p>
          </div>

          <div className="content__article">
            <p>KADRA:</p>
            <p>Drużynowa: pwd. Urszula Mitoraj</p>
            <p>Przyboczni: dh. Marcelina Wilczak, dh. Filip Sławiński</p>
          </div>

          <div className="content__article">
            <p>Kontakt</p>
            <p>email: urszula.mitoraj@zhp.net.pl</p>
          </div>
          <div className="content__article">
            <p>wejdźcie na Facebooka tej drużyny</p>
          </div>
          <div className="content__facebook">
            <a
              href="https://www.facebook.com/pages/1-DH-B%C3%B3r/665888993507238?fref=ts"
              target="_blank"
              rel="noreferrer">
              <img src="./static/images/FB.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Harcerze;
