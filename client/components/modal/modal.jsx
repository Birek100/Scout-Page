import React from "react";

function Modal(props) {
  return (
    <div>
      {props.isVisible && (
        <div className="modal" onClick={props.onOutsideClick}>
          <span className="modal__close" onClick={props.onCloseModal}>
            &times;
          </span>
          <img className="modal__content" src={props.img} />
        </div>
      )}
    </div>
  );
}

export default Modal;
