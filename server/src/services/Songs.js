import axios from "axios";
const BASE_URL = "https://itunes.apple.com/search";
export const findSongs = searchTerm => {
  return axios
    .get(`${BASE_URL}?term=${searchTerm}`)
    .then(songs => songs.data)
    .catch(error => console.log("Report errors to a logger"));
};
