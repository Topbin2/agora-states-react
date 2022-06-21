import React, { useState } from "react";
import EditModal from "./Modal/EditModal";

const Discussion = ({ discussion, editDiscussion, deleteDiscussion }) => {
  const { createdAt, title, url, author, answer, avatarUrl, id } = discussion;

  const [editModal, setEditModal] = useState(false);

  const handleEditModal = () => {
    setEditModal(false);
  };

  return (
    <>
      <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src={avatarUrl}
            alt={`avatar of ${author}`}
          />
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title">
            <a href={url}>{title}</a>
          </h2>
          <div className="discussion__information">
            <div className="discussion__util__button">
              <button onClick={() => setEditModal(true)}>EDIT</button>
              <button onClick={() => deleteDiscussion(id)}>DELETE</button>
            </div>
            {`${author} / ${new Date(createdAt).toLocaleString("Ko-KR")}`}
          </div>
        </div>
        <div className="discussion__answered">
          {answer ? (
            <p style={{ color: "rgb(27, 196, 27)" }}>☑</p>
          ) : (
            <p style={{ color: "red" }}>☒</p>
          )}
        </div>
      </li>
      {editModal && (
        <EditModal
          onModal={handleEditModal}
          discussion={discussion}
          editDiscussion={editDiscussion}
        />
      )}
    </>
  );
};

export default Discussion;
