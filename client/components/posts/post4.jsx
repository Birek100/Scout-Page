import React from "react";

function Post4() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Indywidualna gra 11 listopada</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/11grainfo.jpg" />
          </div>
          <div className="content__article">
            <p>
              Zapraszamy na w pełni indywidualną grę terenową, którą można
              zaliczyć samemu, z rodzicami, a nawet z rodzeństwem.
            </p>
            <p>Zapraszamy do gry wszystkich, zuchy, harcerzy i instruktorów!</p>
          </div>

          <div className="content__article">
            <p>
              <span className="bold"> Wymagania:</span>
            </p>
            <p>- telefon z dostępem do Internetu</p>
            <p>
              - aplikację do skanowania kodów QR (większość modeli telefonów ma
              ją wbudowaną w aparacie)
            </p>
          </div>

          <div className="content__article">
            <p>
              <span className="bold">Informacje techniczne:</span>
            </p>
            <p>
              Proponujemy aby zaliczać punkty po kolei, jednak nie jest to
              wymagane. Ważne, aby punkt 7, czyli ostatni, zaliczyć na samym
              końcu.
            </p>

            <p>
              Podczas wykonywania interaktywnych gier i quizów, które
              znajdziecie w trakcie gry prosimy o wpisanie prawdziwego imienia i
              chociaż pierwszą literę nazwiska - będzie nam łatwiej rozpoznać
              najlepszych graczy.
            </p>
            <p>
              Na najlepszych uczestników będą czekać niespodzianki i dyplomy
              (będą do odbioru w harcówce jeśli tylko sytuacja epidemiologiczna
              pozwoli nam się stacjonarnie spotkać)
            </p>
            <p>Gra będzie dostępna od 11 listopada do 16 listopada. </p>
          </div>

          <div className="content__article">
            <p>
              <span className="bold">Mapa gry:</span>
            </p>
            <a href="https://drive.google.com/file/d/1wATPuo_WUMScYYKXdKvGUN3fiWxzISiK/view?usp=sharing">
              Do pobrania MAPA GRY
            </a>
          </div>

          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post4;
