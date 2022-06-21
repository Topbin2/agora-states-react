import React from "react";
import Backdrop from "../UI/Backdrop";

const DeleteModal = ({ onModal, discussion, deleteDiscussion }) => {
  return (
    <div className="delete-modal">
      <div className="edit-modal">
        <p>ARE YOU SURE ?</p>
        <button className="edit-modal-btn cancel" onClick={() => onModal()}>
          CANCEL
        </button>
        <button
          className="edit-modal-btn confirm"
          onClick={() => deleteDiscussion(discussion.id)}
        >
          DELETE
        </button>
      </div>
      <Backdrop />
    </div>
  );
};

export default DeleteModal;
