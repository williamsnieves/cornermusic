"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSongs = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BASE_URL = "https://itunes.apple.com/search";

const findSongs = searchTerm => {
  return _axios.default.get(`${BASE_URL}?term=${searchTerm}`).then(songs => songs.data).catch(error => console.log("Report errors to a logger"));
};

exports.findSongs = findSongs;