import React from "react";

const NewDiscussion = () => {
  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <h2>Start a new discussion</h2>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form__input--title">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="form__textbox">
            <textarea
              id="story"
              name="story"
              placeholder="Ask a question, start a conversation, or make an announcement"
              required
            ></textarea>
          </div>
        </div>
        <button id="submit__btn" disabled>
          Start discussion
        </button>
      </form>
    </section>
  );
};

export default NewDiscussion;
