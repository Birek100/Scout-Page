import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  /* eslint-disable object-curly-newline */
  const { isVisible, onOutsideClick, onCloseModal, img } = props;
  /* eslint-enable object-curly-newline */
  return (
    <div>
      {isVisible && (
        <div className="modal" onClick={onOutsideClick}>
          <img className="modal__content" src={img} />
          <span className="modal__close" onClick={onCloseModal}>
            &times;
          </span>
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
