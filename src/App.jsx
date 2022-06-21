import { useCallback, useEffect, useState } from "react";

import "./App.css";
import Discussions from "./components/Discussion/Discussions";
import NewDiscussion from "./components/Discussion/NewDiscussion";
import SearchDiscussion from "./components/Discussion/SearchDiscussion";
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
    setIsLoading(true);
    fetch(`http://localhost:3001/discussions?page=${page}`) //
      .then((res) => res.json())
      .then((resData) => {
        setIsLoading(false);
        setDiscussions(resData);
      })
      .catch((e) => console.log(`에러 캐치 ${e}`));
  }, [page]);

  useEffect(() => {
    getDiscussions();
  }, [page, getDiscussions]);

  const addDiscussion = (newDiscussion) => {
    setIsLoading(true);
    fetch("http://localhost:3001/discussions", {
      method: "POST",
      body: JSON.stringify(newDiscussion),
      headers: {
        "Content-Type": "application/json",
      },
    }) //
      .then(() => getDiscussions())
      .catch((e) => console.log(`에러 캐치 ${e}`));
  };

  const editDiscussion = (newDiscussion, id) => {
    setIsLoading(true);
    fetch(`http://localhost:3001/discussions/${id}`, {
      method: "PUT",
      body: JSON.stringify(newDiscussion),
      headers: {
        "Content-Type": "application/json",
      },
    }) //
      .then(() => getDiscussions())
      .catch((e) => console.log(`에러 캐치 ${e}`));
  };

  const deleteDiscussion = (id) => {
    setIsLoading(true);
    fetch(`http://localhost:3001/discussions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }) //
      .then(() => getDiscussions())
      .catch((e) => console.log(`에러 캐치 ${e}`));
  };

  const searchDiscussion = (value) => {
    if (value.trim().length === 0) getDiscussions();
    else {
      fetch(`http://localhost:3001/discussions?text=${value}`) //
        .then((res) => res.json())
        .then((resData) => {
          setDiscussions(resData);
        })
        .catch((e) => console.log(`에러 캐치 ! ${e}`));
    }
  };

  return (
    <main>
      <h1>MY AGORA STATES</h1>
      <button id="new__discussion">New discussion</button>
      <NewDiscussion onAddDiscussion={addDiscussion} />
      <SearchDiscussion onSearch={searchDiscussion} />
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
