import { useCallback, useEffect, useState } from "react";

import "./App.css";
import Discussions from "./components/Discussion/Discussions";
import NewDiscussion from "./components/Discussion/NewDiscussion";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const pagination = (e) => {
    const target = e.target.id;
    if (target === "next__page") {
      if (discussions.length < 10) return;
      setPage((prevPage) => prevPage + 1);
    }
    if (target === "prev__page") {
      if (page === 1) return;
      setPage((prevPage) => prevPage - 1);
    }
  };

  const getDiscussions = useCallback(() => {
    fetch(`http://localhost:3001/discussions?page=${page}`) //
      .then((res) => res.json())
      .then((resData) => setDiscussions(resData));
  }, [page]);

  useEffect(() => {
    getDiscussions();
  }, [page, getDiscussions]);

  const addDiscussion = (newDiscussion) => {
    fetch("http://localhost:3001/discussions", {
      method: "POST",
      body: JSON.stringify(newDiscussion),
      headers: {
        "Content-Type": "application/json",
      },
    }) //
      .then(() => getDiscussions());
  };

  const editDiscussion = (newDiscussion, id) => {
    fetch(`http://localhost:3001/discussions/${id}`, {
      method: "PUT",
      body: JSON.stringify(newDiscussion),
      headers: {
        "Content-Type": "application/json",
      },
    }) //
      .then(() => getDiscussions());
  };

  const deleteDiscussion = (id) => {
    fetch(`http://localhost:3001/discussions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }) //
      .then((res) => res.json())
      .then((index) => {
        setDiscussions((prevDiscussions) => {
          const copyDiscussion = [...prevDiscussions];
          copyDiscussion.splice(index, 1);
          return copyDiscussion;
        });
      })
      .then(() => getDiscussions());
  };

  return (
    <main>
      <h1>MY AGORA STATES</h1>
      <button id="new__discussion">New discussion</button>
      <NewDiscussion onAddDiscussion={addDiscussion} />
      <section id="main__section">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Discussions
            discussions={discussions}
            editDiscussion={editDiscussion}
            deleteDiscussion={deleteDiscussion}
          />
        )}
      </section>
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
