import React from "react";
import "../styles/SongListItem.css";

const SongListItem = () => {
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
          <tr className="list-item-hover">
            <td>
              <div className="song-cell">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3TlGSNIH6xnyj5wV3f_trehnunWBJNINVZyL510Wr0UuWjeegw&s"
                  width="50"
                  height="50"
                  alt=""
                ></img>
                <p>Beally jean</p>
              </div>
            </td>
            <td>Michael Jackson</td>
            <td>Thriller</td>
            <td>3:06</td>
            <td>Pop</td>
            <td>0,90€</td>
          </tr>
          <tr className="list-item-hover">
            <td>
              <div className="song-cell">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3TlGSNIH6xnyj5wV3f_trehnunWBJNINVZyL510Wr0UuWjeegw&s"
                  width="50"
                  height="50"
                  alt=""
                ></img>
                <p>Beally jean</p>
              </div>
            </td>
            <td>Michael Jackson</td>
            <td>Thriller</td>
            <td>3:06</td>
            <td>Pop</td>
            <td>0,90€</td>
          </tr>
          <tr className="list-item-hover">
            <td>
              <div className="song-cell">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3TlGSNIH6xnyj5wV3f_trehnunWBJNINVZyL510Wr0UuWjeegw&s"
                  width="50"
                  height="50"
                  alt=""
                ></img>
                <p>Beally jean</p>
              </div>
            </td>
            <td>Michael Jackson</td>
            <td>Thriller</td>
            <td>3:06</td>
            <td>Pop</td>
            <td>0,90€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SongListItem;
