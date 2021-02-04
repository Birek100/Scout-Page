import React, { useState, useCallback, useRef, useEffect } from "react";

function Post9() {
  const imgRef = useRef(null);
  const modalRef = useRef(null);
  const modalImgRef = useRef(null);

  const [modalState, setModalState] = useState(false);
  const [imgState, setImgState] = useState(null);
  const openModal = () => {
    console.log(imgRef.current.currentSrc);
    setModalState(true);
    setImgState(imgRef.current.currentSrc);
  };
  const closeModal = () => {
    setModalState(false);
    setImgState(null);
  };

  const outsideClick = e => {
    if (e.target.className === "modal--active") {
      closeModal();
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div
          id="myModal"
          className={modalState ? "modal--active" : "modal"}
          ref={modalRef}
          onClick={e => outsideClick(e)}
        >
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            id="modalimg"
            className="modal-content"
            src={imgState}
            ref={modalImgRef}
          />
        </div>

        <div className="content">
          <div className="content__article">
            <h2>Zbiórka żywności 14 - 16 grudnia</h2>
          </div>
          <div className="content__image">
            <img
              src="./static/images/post_images/fotokonkurs.jpg"
              id="myimg"
              ref={imgRef}
              onClick={openModal}
            />
          </div>
          <div className="content__article">
            <p>
              <span className="bold">
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
