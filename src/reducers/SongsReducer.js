import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_SUCCESS,
  RESET_SONGS
} from "../types/songs";

const initialState = {
  data: null,
  isLoading: false,
  error: null
};

const SongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        data: action.songsData.data,
        isLoading: false,
        error: null
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case RESET_SONGS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default SongsReducer;
