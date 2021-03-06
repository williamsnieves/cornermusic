import { combineReducers } from "redux";
import SongsReducer from "./SongsReducer";

const rootReducer = combineReducers({
  songs: SongsReducer
});

export default rootReducer;
