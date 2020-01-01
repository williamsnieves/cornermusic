import React from "react";

const SongDetail = ({ thumb, song, artist }) => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3TlGSNIH6xnyj5wV3f_trehnunWBJNINVZyL510Wr0UuWjeegw&s"
        width="50"
        height="50"
        alt=""
      ></img>
      <p>{song}</p>
      <p>{artist}</p>
    </div>
  );
};

export default SongDetail;
