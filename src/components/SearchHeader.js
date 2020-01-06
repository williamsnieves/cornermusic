import React from "react";

const SearchHeader = ({ headerTitle, onHandleSearch }) => {
  return (
    <React.Fragment>
      <h1>{headerTitle}</h1>
      <input
        type="text"
        onChange={onHandleSearch}
        placeholder="Find songs"
      ></input>
    </React.Fragment>
  );
};

export default SearchHeader;
