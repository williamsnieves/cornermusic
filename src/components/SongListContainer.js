import React from "react";
import SongListItem from "./SongListItem";
import "../styles/SongList.css";

const SongListContainer = ({ songsData, artistTerm, onHandleDetail }) => {
  return (
    <div>
      <div className="song-list-search-result">
        <h1>Searching "{artistTerm}"</h1>
      </div>
      <SongListItem songsData={songsData} onHandleDetail={onHandleDetail} />
    </div>
  );
};

export default SongListContainer;
