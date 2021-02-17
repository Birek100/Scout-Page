import React, { useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrue, modalFalse } from '../../actions/action';
import Modal from '../modal/modal.jsx';

function Post7() {
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
            <h2>Rodzinny Mikołajkowy Bieg Terenowy</h2>
          </div>
          <div className="content__image">
            <img
              src="./static/images/post_images/mikolajkowy_bieg.png"
              ref={imgRef}
              onClick={openModal}
            />
          </div>
          <div className="content__article">
            <h2>
              Święty Mikołaj potrzebuje pomocy! Pomóż mu znaleźć wszystkie
              renifery.
            </h2>
            <p>
              <span className="bold">Czas na realizację gry:</span> od 5 grudnia
              do 6 grudnia do godz. 16:00.
            </p>
            <p>
              <span className="bold">Ogłoszenie wyników: </span> 6 grudnia o
              16:15 w tym poście oraz na Facebooku.
            </p>
            <p>
              (Po nagrody za zwycięstwo w grze można się zgłosić 6 grudnia o
              18:00 do harcówki.)
            </p>
            <p>
              <span className="bold">
                6 grudnia o godz. 18:00 w okolicy harcówki specjalny punkt gry
                tylko dla zuchów:
              </span>{' '}
              zuchy przychodzą z rodzicami na ostatnią przygodę tego dnia.
            </p>
          </div>

          <div className="content__article">
            <h2>Wymagania techniczne:</h2>
            <p>- telefon z dostępem do Internetu</p>
            <p>- włączona usługa lokalizacji / GPS</p>
            <p>- zainstalowana aplikacja Actionbound</p>
            <p>
              Aplikację Actionbound można za darmo pobrać ze Sklepu Play i App
              Store. Działa zarówno na Androidzie jak i na iOS.{' '}
            </p>
            <p>
              Uwaga: gra pojawi się w aplikacji w sobotę rano. Poniżej pojawi
              się też kod QR do zeskanowania w aplikacji w celu uruchomienia.
              Aby rozpocząć grę, można też kliknąć opcję &quot;Bound
              niedaleko&quot; i wybrać grę, która na mapie pojawi się w Chełmku.
            </p>
          </div>

          <div className="content__article">
            <p>
              <span className="bold">
                Poniżej instrukcja pobrania i włączenia gry:
              </span>
            </p>
          </div>
          <div className="content__image">
            <img src="./static/images/posts/post7/graminstr.jpg" />
          </div>

          <div className="content__article">
            <h2>ROZPOCZNIJ GRĘ!</h2>
            <p>
              Zeskanują w aplikacji poniższy kod lub znajdź grę na mapie
              klikając &quot;Bound niedaleko&quot;.
            </p>
          </div>
          <div className="content__image">
            <img src="./static/images/posts/post7/gramik.png" />
          </div>

          <div className="content__article">
            <p>
              <span className="bold">Potencjalne problemy i rozwiązania:</span>
            </p>
            <p>
              Jeśli pojawi się problem z GPS w telefonie, można podążać do
              punktu wg. mapy, która się wyświetla, a następnie kliknąć pomiń
              punkt. Może również pomóc restart aplikacji.
            </p>
          </div>
          <div className="content__image">
            <img src="./static/images/posts/post7/graminstr1.jpg" />
          </div>

          <div className="content__article">
            <p>
              <span className="bold">Teren gry:</span>
            </p>
          </div>
          <div className="content__image">
            <img src="./static/images/posts/post7/gra_mikolajkowa.jpg" />
          </div>

          <div className="content__article">
            <p>W razie pytań i problemów prosimy o informację!</p>
            <p>Powodzenia.</p>
          </div>

          <div className="content__article">
            <p>Ogłoszenie zwycięzców:</p>
          </div>
          <div className="content__image">
            <img src="./static/images/posts/post7/zwyc.jpg" />
          </div>

          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post7;
