import { css } from "@emotion/core";
import Search from "../assets/magnifying-glass_search-bar.svg";

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const App = css`
  text-align: center;
`;

export const header = css`
  background-color: #ff5018;
  padding: 1.5em;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 1em;

  input {
    margin: 2.5em;
    background: url(${Search});
    background-size: 12px 15px;
    background-position: 9px 5px;
    background-repeat: no-repeat;
    background-color: #d94414;
    border-radius: 25px 25px 25px 25px;
    padding: 0.5em 2.5em;
    color: white;
    border: none;
    outline: none;
  }

  input:focus {
    border: none;
    outline: none;
  }
`;

export const itemContainer = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const itemContainerPlaceholder = css`
  font-size: 2.5em;
  margin: 0.5em 0 0 0;
`;

export const searchIcon = css`
  fill: #454749;
  width: 50px;
  height: 50px;
`;

export const spinnerContainer = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
