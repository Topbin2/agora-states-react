import React, { useRef, useState } from "react";

const NewDiscussion = ({ onAddDiscussion }) => {
  const [isValid, setIsValid] = useState(false);

  const nameRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const formValidation = () => {
    if (
      nameRef.current.value &&
      titleRef.current.value &&
      contentRef.current.value
    ) {
      setIsValid(true);
    } else setIsValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDiscussion = {
      id: Date.now(),
      createdAt: new Date(),
      title: titleRef.current.value,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
      author: nameRef.current.value,
      answer: null,
      bodyHTML: contentRef.current.value,
      avatarUrl:
        "https://avatars.githubusercontent.com/u/95295766?s=64&u=85d493e0be0d2ca55965efd9f6c5b268c9dca168&v=4",
    };

    onAddDiscussion(newDiscussion);
    nameRef.current.value = "";
    titleRef.current.value = "";
    contentRef.current.value = "";
    setIsValid(false);
  };

  return (
    <section className="form__container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Start a new discussion</h2>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <input
              ref={nameRef}
              onChange={formValidation}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form__input--title">
            <input
              ref={titleRef}
              onChange={formValidation}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="form__textbox">
            <textarea
              ref={contentRef}
              onChange={formValidation}
              id="story"
              name="story"
              placeholder="Ask a question, start a conversation, or make an announcement"
            ></textarea>
          </div>
        </div>
        <button id="submit__btn" disabled={isValid ? false : true}>
          Start discussion
        </button>
      </form>
    </section>
  );
};

export default NewDiscussion;
