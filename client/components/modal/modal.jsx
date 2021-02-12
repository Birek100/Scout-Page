import React from "react";


function Modal(props) {


  return (
    <div>
    {props.isVisible && (
    <div
    id="myModal"
    className="modal--active"

    onClick={props.onOutsideClick}
  >
    <span className="close" onClick={props.onCloseModal}>
      &times;
    </span>
    <img
      id="modalimg"
      className="modal-content"
      src={props.img}
     
    />
  </div>
    )}
    </div>
  )}
    

export default Modal;