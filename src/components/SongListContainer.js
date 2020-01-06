/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import SongListItem from "./SongListItem";
import { songListSearchResult } from "../styles/SongList";

const SongListContainer = ({ songsData, artistTerm, onHandleDetail }) => {
  return (
    <div>
      <div css={songListSearchResult}>
        <h1>Searching "{artistTerm}"</h1>
      </div>
      <SongListItem
        songsData={songsData}
        onHandleDetail={artistId => onHandleDetail(artistId)}
      />
    </div>
  );
};

export default SongListContainer;
