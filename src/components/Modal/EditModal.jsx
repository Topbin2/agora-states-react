import React, { useState } from "react";
import Backdrop from "./Backdrop";

const EditModal = ({ onModal, discussion, editDiscussion }) => {
  const { title: propTitle, author, bodyHTML, id } = discussion;

  const [name, setName] = useState(author);
  const [title, setTitle] = useState(propTitle);
  const [content, setContent] = useState(bodyHTML);

  const handleConfirmClick = () => {
    const changeDiscussion = {
      author: name,
      title,
      bodyHTML: content,
    };

    editDiscussion(changeDiscussion, id);
    onModal();
  };

  return (
    <>
      <div className="edit-modal">
        <h1>Edit Discussion</h1>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form__input--title">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form__textbox">
            <textarea
              id="story"
              name="story"
              cols="100"
              rows="100"
              placeholder="Ask a question, start a conversation, or make an announcement"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button className="edit-modal-btn cancel" onClick={() => onModal()}>
          Cancel
        </button>
        <button className="edit-modal-btn confirm" onClick={handleConfirmClick}>
          Confirm
        </button>
      </div>
      <Backdrop onModal={onModal} />
    </>
  );
};

export default EditModal;
