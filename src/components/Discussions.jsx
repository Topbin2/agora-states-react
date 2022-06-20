import React from "react";
import Discussion from "./Discussion";

const Discussions = ({ discussions }) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {discussions.map((discussion) => (
          <Discussion key={discussion.id} discussion={discussion} />
        ))}
      </ul>
    </section>
  );
};

export default Discussions;
