import { findSongs } from "../../services/Songs";

const getSongs = async (req, res) => {
  const { term } = req.params;
  const songsData = await findSongs(term);

  res.json({
    data: songsData
  });
};
export default {
  getSongs
};
