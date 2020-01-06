import React from "react";
import { render } from "@testing-library/react";
import SongListContainer from "../components/SongListContainer";

test("Song List search title available", () => {
  const { getByText } = render(
    <SongListContainer songsData={[]} artistTerm="Michael Jackson" />
  );
  const songListElement = getByText(/Searching "Michael jackson"/i);
  expect(songListElement).toBeVisible();
});
