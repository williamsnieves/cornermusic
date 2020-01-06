/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, { useEffect } from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import SearchPlaceHolder from "../components/SearchPlaceHolder";
import SongListContainer from "../components/SongListContainer";
import { fetchSongs, resetSongs } from "../actions/songs";
import { ClipLoader } from "react-spinners";
import { App, override, itemContainer, spinnerContainer } from "../styles/App";

function Dashboard(props) {
  const onHandleDetail = trackId => {
    props.navigate(`/detail/${trackId}`);
  };

  useEffect(() => {
    props.resetSongs();
    props.fetchSongs(props.debounceSearchTerm);
  }, [props.debounceSearchTerm]);

  return (
    <React.Fragment>
      <div css={App} data-testid="main-list-container">
        {!props.songs && (
          <section css={itemContainer}>
            <SearchPlaceHolder title="Use the search bar to find song" />
          </section>
        )}
        {props.songs.data ? (
          <SongListContainer
            songsData={props.songs.data.data.results}
            artistTerm={props.searchTerm}
            onHandleDetail={onHandleDetail}
          />
        ) : (
          <div css={spinnerContainer}>
            <ClipLoader
              css={override}
              size={150}
              color={"#ff5018"}
              loading={true}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  console.log("state------", state);
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { fetchSongs, resetSongs })(Dashboard);
