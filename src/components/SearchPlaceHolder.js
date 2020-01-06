/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import SeachIcon from "./icons/SearchIcon";
import { itemContainerPlaceholder } from "../styles/App";

const SearchPlaceHolder = ({ title }) => {
  return (
    <div>
      <SeachIcon />
      <p css={itemContainerPlaceholder}>{title}</p>
    </div>
  );
};

export default SearchPlaceHolder;
