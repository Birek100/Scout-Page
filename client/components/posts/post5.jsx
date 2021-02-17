import React, { useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrue, modalFalse } from '../../actions/action';
import Modal from '../modal/modal.jsx';

function Post5() {
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
            <h2>Zbiórki online</h2>
          </div>
          <div className="content__image">
            <img
              src="./static/images/post_images/trzepak.jpg"
              ref={imgRef}
              onClick={openModal}
            />
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
