import { useCallback, useEffect, useState } from "react";

import "./App.css";
import Discussions from "./components/Discussions";
import NewDiscussion from "./components/NewDiscussion";

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = useCallback(async () => {
    setPage((prevPage) => prevPage + 1);
    const response = await fetch(`http://localhost:3001/discussions?page=${page}`);
    const result = await response.json();
    setDiscussions(result);
  }, [page]);

  const prevPage = useCallback(async () => {
    if(page === 1) return;
    setPage((prevPage) => prevPage - 1);
    const response = await fetch(`http://localhost:3001/discussions?page=${page}`);
    const result = await response.json();
    setDiscussions(result);
  }, [page]);

  useEffect(() => {
    fetch("http://localhost:3001/discussions?page=1") //
      .then((res) => res.json())
      .then((res) => setDiscussions(res));
  }, []);

  useEffect(() => {
    nextPage();
  }, [nextPage])

  useEffect(() => {
    prevPage();
  }, [prevPage])

  return (
    <main>
      <h1>MY AGORA STATES</h1>
      <button id="new__discussion">New discussion</button>
      <NewDiscussion />
      <Discussions discussions={discussions} />
      <section id="paging__btn__container">
        <button id="prev__page" onClick={prevPage}>PREV</button>
        <button id="next__page" onClick={nextPage}>NEXT</button>
      </section>
    </main>
  );
}

export default App;
