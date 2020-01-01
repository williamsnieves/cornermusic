import React from "react";
import "../styles/SongDetail.css";

const SongDetail = ({ thumb, song, artist }) => {
  return (
    <div className="song-detail-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3TlGSNIH6xnyj5wV3f_trehnunWBJNINVZyL510Wr0UuWjeegw&s"
        width="300"
        height="300"
        alt=""
        className="song-thumbnail"
      ></img>
      <p className="detail-content">{song}</p>
      <p className="detail-content">{artist}</p>
    </div>
  );
};

export default SongDetail;
