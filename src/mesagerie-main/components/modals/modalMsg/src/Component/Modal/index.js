import React from "react";
import PeopleList from "../../../../../chatList/PeopleList";
import "./modal.css";
import {IoIosCloseCircleOutline} from "react-icons/io"

const Modal = (props) => {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <div className="flex flex-row justify-between">
        <h2>New Message</h2>

        <button class="toggle-button mr-2 focus:outline-none" onClick={onClose}>
          <IoIosCloseCircleOutline className="text-3xl text-gray-500 hover:text-red-600 transition duration-500 ease-in-out"/>
        </button>
      </div>

      <div class="actions">
        <input type="text" placeholder="Tapez votre message ... " className="OutlineNone w-96 p-4 mx-3.5 border-none focus:outline-none rounded-full"/>

      </div>
      <div className="p-3 flex flex-col bg-gray-50 h-96">
        <p className="ml-2 mb-3">Suggestions : </p>
        <PeopleList />
      </div>
    </div>
  );
};

export default Modal;
