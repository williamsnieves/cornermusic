import axios from "axios";
import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_SUCCESS,
  RESET_SONGS
} from "../types/songs";

export const fetchSongsRequest = () => {
  return {
    type: FETCH_SONGS_REQUEST
  };
};

export const fetchSongsFailure = error => {
  return {
    type: FETCH_SONGS_FAILURE,
    error
  };
};

export const fetchSongsSuccess = songsData => {
  return {
    type: FETCH_SONGS_SUCCESS,
    songsData
  };
};

export const fetchSongs = term => (dispatch, getState) => {
  /*const data = {
    headers: {
      Authorization: `Bearer ${localStorage.iconJWT}`
    }
  };*/

  const songsURL = `http://localhost:5000/api/songs/${term}`;

  dispatch(fetchSongsRequest());
  return axios
    .get(songsURL)
    .then(songsData => dispatch(fetchSongsSuccess(songsData)))
    .catch(error => {
      dispatch(fetchSongsFailure(error));
    });
};

export const resetSongs = () => {
  return {
    type: RESET_SONGS
  };
};
