import React from "react";
import { render } from "@testing-library/react";
import SongDetail from "../components/SongDetail";

test("Place holder available in DOM", () => {
  const { getByTestId } = render(<SongDetail />);
  const mainContainer = getByTestId("song-detail-content");
  expect(mainContainer).toBeInTheDocument();
});

test("Place holder available in DOM", () => {
  const dummyProps = {
    thumb: "test",
    song: "test song",
    artist: "test artist"
  };
  const { getByText } = render(<SongDetail {...dummyProps} />);
  const songDetailElement = getByText("test song");
  const artistDetailElement = getByText("test artist");
  expect(songDetailElement).toBeVisible();
  expect(artistDetailElement).toBeVisible();
});
