import "./App.css";

function App() {
  return (
    <main>
      <h1>MY AGORA STATES</h1>
      <button id="new__discussion">New discussion</button>
      <section className="form__container hide">
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
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
              <img
                className="discussion__avatar--image"
                src="https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
                alt="avatar of kimploo"
              />
            </div>
            <div className="discussion__content">
              <h2 className="discussion__title">
                <a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">
                  [notice] 좋은 질문하는 법
                </a>
              </h2>
              <div className="discussion__information">
                kimploo / 2022. 4. 22. 오후 2:08:33
              </div>
            </div>
            <div className="discussion__answered">
              <p>☑</p>
            </div>
          </li>
        </ul>
      </section>
      <section id="paging__btn__container">
        <button id="prev__page">PREV</button>
        <button id="next__page">NEXT</button>
      </section>
    </main>
  );
}

export default App;
