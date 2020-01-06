import { css } from "@emotion/core";

export const tableContainer = css`
  border-collapse: collapse;
  border-spacing: 0;
  width: calc(100vw - 5%);
  margin: 0 auto;
`;

export const defaultHeaderColumn = css`
  color: #747b81;
`;

export const sortedColumn = css`
  color: #d4461d;
`;

export const songCell = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5em;

  p {
    padding-left: 0.5em;
  }
`;

export const listItemHover = css`
  &:hover {
    background-color: #202224;
    cursor: pointer;
  }
`;
