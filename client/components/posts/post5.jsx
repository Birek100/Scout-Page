import React from 'react';

function Post5() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Zbiórki online</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/trzepak.jpg" />
          </div>
          <div className="content__article">
            <p>Czy w czasie pandemii można zorganizować festiwal piosenki? </p>
            <p>Jasne!</p>
          </div>

          <div className="content__article">
            <p>
              Zapraszamy serdecznie do udziału w festiwalu piosenki
              &quot;Trzepak&quot; organizowanym przez Związek Drużyn Chełmek im.
              &quot;Bohaterów Westerplatte&quot; oraz komendę naszego hufca.
            </p>
          </div>

          <div className="content__article">
            <p>
              Wszystkie informacje znajdziecie w regulaminie:
              <a href="https://linkd.pl/ef49">https://linkd.pl/ef49</a>
            </p>
          </div>

          <div className="content__article">
            <p>Na Wasze wykonania czekamy do 6 grudnia!</p>
          </div>

          <div className="content__article">
            <p>
              Wszystkich chętnych do wzięcia udziału prosimy o kontakt z
              drużynowymi.
            </p>
          </div>

          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post5;
