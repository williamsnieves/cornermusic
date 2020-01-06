import { createSelector } from "reselect";
export const getSongsFilteredSelector = createSelector(
  [state => state.songs, (state, ownProps) => parseInt(ownProps.term, 10)],
  (songs, term) =>
    songs.data && songs.data.data.results.filter(song => song.trackId === term)
);
