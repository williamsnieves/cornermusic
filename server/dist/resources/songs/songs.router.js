"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _songs = _interopRequireDefault(require("./songs.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // /api/list

router.route("/").get(_songs.default.getSongs);
router.route("/:term").get(_songs.default.getSongs);
var _default = router;
exports.default = _default;