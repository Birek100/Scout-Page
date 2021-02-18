import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrue, modalFalse } from '../../actions/action';
import Modal from '../modal/modal.jsx';

function Post1() {
  const dispatch = useDispatch();
  const modalOn = () => dispatch(modalTrue());
  const modalOff = () => dispatch(modalFalse());
  const modalState = useSelector((state) => state.modalState);

  const [imgState, setImgState] = useState(null);

  const openModal = useCallback(
    (e) => {
      setImgState(e.target.src);
      modalOn();
    },
    [imgState, modalState]
  );

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
            <h2>Kurs pierwszej pomocy</h2>
          </div>
          <div className="content__image">
            <img
              src="./static/images/post_images/pierwsza_pomoc.jpg"
              onClick={openModal}
            />
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
