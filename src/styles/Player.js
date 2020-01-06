import { css } from "@emotion/core";

export const PlayerContainer = css`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: calc(100vw - 3%);
  padding: 1.5em;
  background-color: #2c2e30;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const socialButtons = css`
  align-self: flex-end;
  margin-right: 2em;
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`;

export const playerButtons = css`
  margin-right: calc(100vw - 68%);
`;

export const lm1 = css`
  margin-left: 1em;
`;

export const rm1 = css`
  margin-right: 1em;
`;

export const controlsHover = css`
  cursor: pointer;
`;
