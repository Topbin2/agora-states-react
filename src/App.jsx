import { useEffect, useState } from "react";

import "./App.css";
import Discussions from "./components/Discussions";
import NewDiscussion from "./components/NewDiscussion";

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [page, setPage] = useState(1);

  const pagination = (e) => {
    const target = e.target.id;
    if (target === "next__page") setPage((prevPage) => prevPage + 1);
    if (target === "prev__page") {
      if (page === 1) return;
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/discussions?page=${page}`) //
      .then((res) => res.json())
      .then((res) => setDiscussions(res));
  }, [page, discussions]);

  return (
    <main>
      <h1>MY AGORA STATES</h1>
      <button id="new__discussion">New discussion</button>
      <NewDiscussion />
      <Discussions discussions={discussions} />
      <section id="paging__btn__container">
        <button id="prev__page" onClick={pagination}>
          PREV
        </button>
        <button id="next__page" onClick={pagination}>
          NEXT
        </button>
      </section>
    </main>
  );
}

export default App;
