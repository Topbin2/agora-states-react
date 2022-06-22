import React, { useRef } from "react";

const SearchDiscussion = ({ onSearch }) => {

  const inputRef = useRef();

  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };

  return (
    <input
      className="search__input"
      ref={inputRef}
      type="text"
      placeholder="Search Title or Username"
      onChange={handleSearch}
    />
  );
};

export default SearchDiscussion;
