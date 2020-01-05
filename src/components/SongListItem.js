import React from "react";
import "../styles/SongListItem.css";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const SongListItem = ({ songsData, onHandleDetail }) => {
  console.log("-----songsData", songsData);
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th className="default-header-column">Song</th>
            <th className="default-header-column">Artist</th>
            <th className="default-header-column">Album</th>
            <th className="sorted-columns">Duration</th>
            <th className="sorted-columns">Gender</th>
            <th className="sorted-columns">Price</th>
          </tr>
        </thead>
        <tbody>
          {songsData.map(song => (
            <tr className="list-item-hover" onClick={onHandleDetail}>
              <td>
                <div className="song-cell">
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
