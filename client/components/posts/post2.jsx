import React from "react";

function Post2() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Powrót zdalnych zbiórek</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/powrot_zbiorek.jpg" />
          </div>
          <div className="content__article">
            <p>Czuwaj</p>
          </div>

          <div className="content__article">
            <p>
              Zgodnie z zaleceniami GK ZHP nasza działalność harcerska ponownie
              przenosi się do internetu. Tak długo jak powiat oświęcimski
              pozostanie w czerwonej strefie zbiórki będą odbywać się zdalnie.
            </p>
          </div>

          <div className="content__article">
            <p>
              Wszystkie informacje i wytyczne są wciąż dostępne na oficjalnej
              stronie{" "}
              <a href="https://strony.zhp.pl/wracamy/">
                https://zhp.pl/wracamy/
              </a>
            </p>
          </div>

          <div className="content__article">
            <p>Mamy nadzieję, że juz wkrótce spotkamy się znowu w harcówce.</p>
          </div>
          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post2;
