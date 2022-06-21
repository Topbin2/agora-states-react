import React, { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import EditModal from "../Modal/EditModal";

const Discussion = ({ discussion, editDiscussion, deleteDiscussion }) => {
  const { createdAt, title, url, author, answer, avatarUrl } = discussion;

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEditModal = () => {
    setEditModal(false);
  };

  const handleDeleteModal = () => {
    setDeleteModal((prevState) => !prevState);
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
              <button className="delete__button" onClick={handleDeleteModal}>
                DELETE
              </button>
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
      {deleteModal && (
        <DeleteModal
          onModal={handleDeleteModal}
          discussion={discussion}
          deleteDiscussion={deleteDiscussion}
        />
      )}
    </>
  );
};

export default Discussion;
