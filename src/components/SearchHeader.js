import React from "react";

const SearchHeader = ({ headerTitle, onHandleSearch }) => {
  return (
    <React.Fragment>
      <h1>{headerTitle}</h1>
      <input type="text" onChange={onHandleSearch}></input>
    </React.Fragment>
  );
};

export default SearchHeader;
