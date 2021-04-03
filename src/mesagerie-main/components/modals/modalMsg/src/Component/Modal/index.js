import React from "react";
import "./modal.css";

const Modal=(props)=>{
  const onClose = e => {
    props.onClose && props.onClose(e);
  };
  
    if (!props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Modal Window</h2>
        <div class="content">{props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={onClose}>
            close
          </button>
        </div>
      </div>
    );
  
}

export default Modal