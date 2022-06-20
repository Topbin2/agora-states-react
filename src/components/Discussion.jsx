import React from "react";

const Discussion = ({ discussion }) => {
  const { createdAt, title, url, author, answer, avatarUrl } = discussion;

  return (
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
  );
};

export default Discussion;
