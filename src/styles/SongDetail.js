import { css } from "@emotion/core";
export const songDetailContainer = css`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  margin: 5em 0 0 0;
`;

export const detailContent = css`
  margin: 0;
  &:first-of-type {
    margin: 1em 0 0.5em 0;
  }
`;

export const songThumbnail = css`
  border: 1px solid #fff;
  box-shadow: 7px 6px 17px 1px #000;
`;
