import React from 'react';

function Post1() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Kurs pierwszej pomocy</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/pierwsza_pomoc.jpg" />
          </div>
          <div className="content__article">
            <p>
              EDIT: z powodu przejścia powiatu do strefy czerwonej, kurs jest
              odwołany, odbędzie się w najbliższym możliwym terminie.
            </p>
          </div>

          <div className="content__article">
            <p>Czuwaj!</p>
          </div>

          <div className="content__article">
            <p>
              W dniach 17/18.10.2020r odbędzie się szkolenie z pierwszej pomocy
              organizowane w Hufcu w Trzebini, które będzie prowadziła była
              instruktorka / pracownik Krakowskiego Pogotowia Ratunkowego pwd.
              Żaneta Król - Michalska.
            </p>
          </div>

          <div className="content__article">
            <p>Uczestnicy: </p>
            <p>- drużynowi</p>
            <p>- przyboczni</p>
            <p>
              - kandydaci na drużynowych / przybocznych (osoby po kursie
              zastępowych i przybocznych)
            </p>
            <p>- chętni instruktorzy hufca</p>
          </div>
          <div className="content__article">
            <p>
              Cel szkolenia: przypomnienie zasad udzielania I pomocy
              przedmedycznej.
            </p>
          </div>
          <div className="content__article">
            <p>
              Zgłoszenia do dnia 08.10.2020r. na adres
              anna.wieclaw-pilarczyk@zhp.net.pl lub iwona.kucharska@zhp.net.pl
            </p>
          </div>
          <div className="content__article">
            <p>
              Początek kursu w sobotę rano, koniec w niedzielę w godzinach
              południowych.
            </p>
          </div>
          <div className="content__article">
            <p>Koszt szkolenia 15 zł. </p>
            <p>ałożenia: nocleg w hufcu ZHP Trzebinia,</p>
            <p>Niezbędne karmiaty i śpiwory, obiad w sobotę zapewniony. </p>
          </div>
          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post1;
