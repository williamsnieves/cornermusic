import React, { useEffect } from "react";
import { connect } from "react-redux";
import SongDetail from "./SongDetail";
import Player from "./Player";
import { getSongsFilteredSelector } from "../selectors/songsSelector";

const SongDetailContainer = props => {
  useEffect(() => {
    if (!props.songs) {
      props.navigate("/");
    }
  });

  const songDetail = {
    song: props.filteredSong && props.filteredSong[0].trackName,
    artist: props.filteredSong && props.filteredSong[0].artistName,
    thumb: props.filteredSong && props.filteredSong[0].artworkUrl100
  };

  const playerDetail = {
    track: props.filteredSong && props.filteredSong[0].previewUrl
  };

  return (
    <div>
      <SongDetail {...songDetail} />
      <Player {...playerDetail} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    filteredSong: getSongsFilteredSelector(state, ownProps),
    songs: state.songs.data
  };
};

export default connect(mapStateToProps)(SongDetailContainer);
