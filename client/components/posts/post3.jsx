import React from 'react';

function Post3() {
  return (
    <div className="wrapper">
      <div className="wrapper__inside">
        <div className="content">
          <div className="content__article">
            <h2>Zbiórki online</h2>
          </div>
          <div className="content__image">
            <img src="./static/images/post_images/zbiorki_online.png" />
          </div>
          <div className="content__article">
            <p>Zapraszamy na zbiórki drużyn na platformie Zoom.</p>
            <p>
              W razie problemów z logowaniem prosimy o kontakt z drużynowymi.
              Polecamy aby dołączać do spotkań z komputerów bądź laptopów.{' '}
            </p>
          </div>

          <div className="content__article">
            <p>
              Chwilę przed zbiórką wystarczy kliknąć w link i podążać za
              instrukcjami. Polecamy też wcześniej zainstalować aplikację zoom
              na komputerze.
            </p>
          </div>

          <div className="content__article">
            <p>1 DH Bór</p>
            <p>Join Zoom Meeting</p>
            <a href="https://zoom.us/j/95499642585?pwd=OFZFdnM1ZktKKy8rZGNiUXp5VnN1Zz09">
              https://zoom.us/j/95499642585?pwd=OFZFdnM1ZktKKy8rZGNiUXp5VnN1Zz09
            </a>
            <p>Meeting ID: 954 9964 2585</p>
            <p>Passcode: BOR</p>
            <p>JUTRO 17</p>
          </div>

          <div className="content__back">
            <a href="/">POWRÓT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post3;
