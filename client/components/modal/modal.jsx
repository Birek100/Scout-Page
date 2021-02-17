import React from 'react';
import PropTypes from 'prop-types';

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
Modal.propTypes = {
  isVisible: PropTypes.bool,
  onOutsideClick: PropTypes.func,
  onCloseModal: PropTypes.func,
  img: PropTypes.string
};

export default Modal;
