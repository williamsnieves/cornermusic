"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Songs = require("../../services/Songs");

const getSongs = async (req, res) => {
  const {
    term
  } = req.params;
  const songsData = await (0, _Songs.findSongs)(term);
  res.json({
    data: songsData
  });
};

var _default = {
  getSongs
};
exports.default = _default;