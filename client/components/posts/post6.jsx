import React from "react";

function Post6() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Zuchowa Zbiórka Teatralna</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/zbiorka_teatralna.png" />
          </div>
          <div className="content__article">
            <p>Zapraszamy na zuchową zbiórkę teatralną.</p>
          </div>

          <div className="content__article">
            <p>
              Odbędzie się ona w czwartek 26 listopada o godz. 18:00. Spróbujemy
              ją zrobić na Teamsach aby mieć więcej czasu, więc proszę każdego
              rodzica o wysłanie w sms adresu e-mail w celu wysłania
              zaproszenia. (jeśli nam nie wyjdzie przełączymy się szybko na
              Zooma)
            </p>
          </div>

          <div className="content__article">
            <p>
              <span className="bold">Drogie zuchy!</span>
            </p>
            <p>
              Postarajcie się wykonać do zbiórki online chociaż część zadań,
              którymi pochwalicie się na zbiórce przed resztą gromady.
            </p>
          </div>

          <div className="content__article">
            <p>
              <span className="bold">1. Obejrzyjcie te krótkie filmiki:</span>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=P9TaK5h6w0A">Kukiełki</a>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=h1XmohJDSmQ">
                Teatr cieni
              </a>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=mqIe9j9QmJM">
                Magia marionetek
              </a>
            </p>
          </div>

          <div className="content__article">
            <p>
              <span className="bold">
                2. Wydrukujcie kartę sprawności i spróbujcie wykonać kilka zadań
                na zbiórkę online.
              </span>
            </p>
            <p>Karta próby na sprawność LALKARZ</p>
            <p>
              <a href="https://drive.google.com/file/d/1GerA_cmITnBS5eOc9Nm9W7GPyHAtlhcC/view?usp=sharing">
                {" "}
                POBIERZ
              </a>
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

export default Post6;
