/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { controlsHover } from "../../styles/Player";

const PlayIcon = ({ onClick, css }) => {
  return (
    <svg
      css={controlsHover}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="25"
      viewBox="0 0 20 25"
    >
      <image
        id="play"
        width="20"
        height="25"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAMAAADOWS1PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAtFBMVEX/UBj/////UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBgAAACqoeD7AAAAOnRSTlMAAFnVw0cCy/GBEunPTgHlpzHtgAbMT/aiJOttEMZClCbhv0HykhxbA6Bck8BulUPs96NQ7tCCWtbE9Df/EgAAAAFiS0dEOzkO9GwAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUFhAYsQSoAAAAo0lEQVQoz5XTxxKCQBREUcxiDqAoAgbMOWv//4dJsdDN3IW9PVXzpt70WNlcvlC0fsl8Y5Wksl0xUlVJavWGgZpK02ojqdN1iCS3h6S+NyCShv6ISApCJCkaI2niI0nTGZLi+YIoOXW5IpLWTGLycNYGZsVbuuEupG3saRsH2mFwhM2f6L3OF3pl9wrduNnOHz1M23s3ttdNOv8wd/75esNP+QBA8mM1QLKhBAAAAABJRU5ErkJggg=="
      />
    </svg>
  );
};

export default PlayIcon;
