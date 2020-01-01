import React, { useState } from "react";
import SearchPlaceHolder from "./components/SearchPlaceHolder";
import SearchHeader from "./components/SearchHeader";
import SongListContainer from "./components/SongListContainer";
import SongDetailContainer from "./components/SongDetailContainer";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const onHandleSearch = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="App">
      <header className="header">
        <SearchHeader
          headerTitle="Corner job Music Player"
          onHandleSearch={onHandleSearch}
        />
      </header>
      {/*<section className="item-container">
        <SearchPlaceHolder title="Use the search bar to find song" />
  </section>*/}
      {/*<SongListContainer songData={[]} artistTerm={searchTerm} />*/}
      <SongDetailContainer />
    </div>
  );
}

export default App;
