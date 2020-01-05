import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchPlaceHolder from "../components/SearchPlaceHolder";
import SearchHeader from "../components/SearchHeader";
import SongListContainer from "../components/SongListContainer";
import SongDetailContainer from "../components/SongDetailContainer";
import useDebounce from "../components/hooks/useDebounce";
import { fetchSongs } from "../actions/songs";
import "../App.css";

function Dashboard(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const onHandleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const onHandleDetail = () => {
    console.log("go to detail of songs");
  };

  const debounceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    props.fetchSongs(debounceSearchTerm);
  }, [debounceSearchTerm]);

  console.log("props------", props.songs);
  return (
    <React.Fragment>
      <div className="App">
        <header className="header">
          <SearchHeader
            headerTitle="Corner job Music Player"
            onHandleSearch={onHandleSearch}
          />
        </header>

        {!props.songs && (
          <section className="item-container">
            <SearchPlaceHolder title="Use the search bar to find song" />
          </section>
        )}
        {props.songs.data ? (
          <SongListContainer
            songsData={props.songs.data.data.results}
            artistTerm={searchTerm}
            onHandleDetail={onHandleDetail}
          />
        ) : (
          <p>loading...</p>
        )}
        <SongDetailContainer />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { fetchSongs })(Dashboard);
