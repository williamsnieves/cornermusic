/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import {
  songDetailContainer,
  songThumbnail,
  detailContent
} from "../styles/SongDetail";

const SongDetail = ({ thumb, song, artist }) => {
  return (
    <div css={songDetailContainer}>
      <img
        src={thumb}
        width="300"
        height="300"
        alt=""
        css={songThumbnail}
      ></img>
      <p css={detailContent}>{song}</p>
      <p css={detailContent}>{artist}</p>
    </div>
  );
};

export default SongDetail;
