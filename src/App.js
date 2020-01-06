/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import Dashboard from "./components/Dashboard";
import useDebounce from "./components/hooks/useDebounce";
import SearchHeader from "./components/SearchHeader";
import SongDetailContainer from "./components/SongDetailContainer";
import { Router } from "@reach/router";
import { header } from "./styles/App";

function App(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const onHandleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const debounceSearchTerm = useDebounce(searchTerm, 500);
  return (
    <div>
      <header css={header}>
        <SearchHeader
          headerTitle="Corner job Music Player"
          onHandleSearch={onHandleSearch}
        />
      </header>
      <Router>
        <Dashboard
          path="/"
          searchTerm={searchTerm}
          debounceSearchTerm={debounceSearchTerm}
        />
        <SongDetailContainer path="/detail/:term" />
      </Router>
    </div>
  );
}

export default App;
