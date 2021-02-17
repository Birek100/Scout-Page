import React, { useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrue, modalFalse } from '../../actions/action';
import Modal from '../modal/modal.jsx';

function Post8() {
  const dispatch = useDispatch();
  const modalOn = () => dispatch(modalTrue());
  const modalOff = () => dispatch(modalFalse());
  const modalState = useSelector((state) => state.modalState);

  const imgRef = useRef(null);
  const [imgState, setImgState] = useState(null);

  const openModal = useCallback(() => {
    setImgState(imgRef.current.currentSrc);
    modalOn();
  }, [imgState, modalState]);

  const closeModal = useCallback(() => {
    setImgState(null);
    modalOff();
  }, [imgState, modalState]);

  const outsideClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <Modal
          img={imgState}
          onOutsideClick={outsideClick}
          onCloseModal={closeModal}
          isVisible={modalState}
        />
        <div className="content">
          <div className="content__article">
            <h2>Zbiórka żywności 14 - 16 grudnia</h2>
          </div>
          <div className="content__image">
            <img
              src="./static/images/post_images/zbiorka_zywnosci.jpg"
              ref={imgRef}
              onClick={openModal}
            />
          </div>
          <div className="content__article">
            <p>
              W czasie dyżurów w harcówce dostępni będą do dyspozycji drużynowi
              (można wtedy uregulować składki członkowskie).
            </p>
          </div>
          <div className="content__article">
            <p>Oraz</p>
          </div>
          <div className="content__article">
            <p>Odpalić dla siebie Betlejemskie Światło Pokoju.</p>
          </div>

          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post8;
