import React from "react";
import SeachIcon from "./icons/SearchIcon";

const SearchPlaceHolder = ({ title }) => {
  return (
    <div>
      <SeachIcon />
      <p className="item-container-placeholder">{title}</p>
    </div>
  );
};

export default SearchPlaceHolder;
