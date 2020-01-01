import React from "react";
import SongDetail from "./SongDetail";
import Player from "./Player";

const SongDetailContainer = () => {
  return (
    <div>
      <SongDetail song="Beally jean" artist="Michael jackson" />
      <Player />
    </div>
  );
};

export default SongDetailContainer;
