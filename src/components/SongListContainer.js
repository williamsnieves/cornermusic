import React from "react";
import SongListItem from "./SongListItem";
import "../styles/SongList.css";

const SongListContainer = ({ songData, artistTerm }) => {
  return (
    <div>
      <div className="song-list-search-result">
        <h1>Searching "{artistTerm}"</h1>
      </div>
      <SongListItem />
    </div>
  );
};

export default SongListContainer;
