/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import "../styles/SongListItem.css";
import {
  tableContainer,
  defaultHeaderColumn,
  sortedColumn,
  listItemHover,
  songCell
} from "../styles/SongListItem";
import { millisToMinutesAndSeconds } from "../modules/utils";

const SongListItem = ({ songsData, onHandleDetail }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table css={tableContainer}>
        <thead>
          <tr>
            <th css={defaultHeaderColumn}>Song</th>
            <th css={defaultHeaderColumn}>Artist</th>
            <th css={defaultHeaderColumn}>Album</th>
            <th css={sortedColumn}>Duration</th>
            <th css={sortedColumn}>Gender</th>
            <th css={sortedColumn}>Price</th>
          </tr>
        </thead>
        <tbody>
          {songsData.map(song => (
            <tr
              key={song.trackId ? song.trackId : Math.random() * song.artistId}
              css={listItemHover}
              onClick={() => onHandleDetail(song.trackId)}
            >
              <td>
                <div css={songCell}>
                  <img
                    src={song.artworkUrl60}
                    width="50"
                    height="50"
                    alt=""
                  ></img>
                  <p>{song.trackName}</p>
                </div>
              </td>
              <td>{song.artistName}</td>
              <td>{song.collectionName}</td>
              <td>{millisToMinutesAndSeconds(song.trackTimeMillis)}</td>
              <td>{song.primaryGenreName}</td>
              <td>{`${song.trackPrice}${song.currency}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongListItem;
