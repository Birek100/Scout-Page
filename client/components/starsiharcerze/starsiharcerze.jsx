import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrue, modalFalse } from '../../actions/action';
import Modal from '../modal/modal.jsx';

function StarsiHarcerze() {
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
          <h1 className="content__header">4 DSH &quot;Ogniste płomyki&quot;</h1>
          <div className="content__image">
            <img src="./static/images/ogniste.jpg" onClick={openModal} />
          </div>
          <div className="content__article">
            <h2>Składki członkowskie - zmiany</h2>
            <p>
              Od nowego roku zmienia się sposób naliczania składek
              członkowskich. Składki należy wpłacać do 20 dnia pierwszego
              miesiąca każdego kwartału, czyli za I kwartał 2021 wpłacamy do 20
              stycznia na zbiórkach
            </p>
          </div>
          <div className="content__article">
            <h2>Terminy zbiórek w styczniu</h2>
            <p>
              Czwartek 14.01 o godz. 16:30 zastępy męskie w harcówce - trzeba
              przynieść banana lub ziemniaka
            </p>
            <p>
              Sobota 16.01 o godz. 9:15 zastępy żeńskie w terenie - zbiórka na
              aleji parkowej koło paczkomatu/kebaba - proszę ubrać porządne buty
              i wziąć coś do pisania
            </p>
            <p>
              Czas trwania zbiórek 2h. Z powodu ograniczeń osobowych chwilowo
              dzielimy się na połowę.
            </p>
            <p>
              Przypominam o konieczności opłacenia składek członkowskich. Można
              to zrobić na tych zbiórkach.
            </p>
            <p>W przyszłym tyg zamiana, dziewczyny teren, chłopaki harcówka.</p>
          </div>
          <div className="content__article">
            <h2>KOSZULKI</h2>
            <p>
              Koszulki drużyny - koszt koszulki 30 zł płatne u drużynowej
              (chętni na koszulki mogą wpłacać również pieniądze na konto -
              zainteresowanych proszę o napisanie SMS z prośbą o udostępnienie
              numeru konta, tel. 723 672 339)
            </p>
            <p>W razie pytań, kontakt do drużynowej:</p>
            <p>phm. Aleksandra Szklarczyk tel. 723 672 339</p>
          </div>
          <div className="content__article">
            <h2>Realizcaja prób</h2>
            <p>
              <a
                href="https://drive.google.com/file/d/1grl4C1_cOt2RZfedJYAtTWtksYq-tWbB/view?usp=sharing"
                target="_blank"
                rel="noreferrer">
                Karta próby pionierka/odkrywca pdf
              </a>
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/1f8NM1XMk0-RdwK0gb-CPmEjydR9GQrJO/view?usp=sharing"
                target="_blank"
                rel="noreferrer">
                Karta próby pionierka/odkrywca doc
              </a>
            </p>
          </div>
          <div className="content__article">
            <p>
              Jest to drużyna składająca się z uczniów klas 7,8 i liceum.
              Zbiórki odbywają się w czwartki o 19:00 w harcówce..
            </p>
          </div>
          <div className="content__article">
            <h2>KADRA:</h2>
            <p>Drużynowa: phm. Aleksandra Szklarczyk</p>
            <p>Przyboczna: dh. Martyna Oleś, dh. Julia Dworniczek</p>
          </div>
          <div className="content__article">
            <h2>KONTAKT:</h2>
            <p>email: aleksandra.szklarczyk@zhp.net.pl</p>
          </div>
          <div className="content__article">
            <p>wejdźcie na ich Facebooka</p>
          </div>
          <div className="content__facebook">
            <a
              href="https://www.facebook.com/4-DSH-Ogniste-p%C5%82omyki-403828976451820/timeline/"
              target="_blank"
              rel="noreferrer">
              <img src="./static/images/FB.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarsiHarcerze;
