import React from "react";

const Backdrop = ({ onModal }) => {
  return <div className="backdrop" onClick={onModal} />;
};

export default Backdrop;
