import React from "react";
import { render } from "@testing-library/react";
import SongListItem from "../components/SongListItem";

test("Song List search title available", () => {
  const { getByTestId } = render(<SongListItem songsData={[]} />);
  const songListItemElement = getByTestId("song-list-item-container");
  expect(songListItemElement).toBeVisible();
});

test("Check that list of items is not empty", () => {
  const dummySongsData = [
    {
      trackId: 1,
      artworkUrl60: "test",
      trackName: "test track name",
      artistName: "test artist name",
      collectionName: "test collection name",
      trackTimeMillis: 32334,
      primaryGenreName: "rock",
      currency: "usd"
    },
    {
      trackId: 2,
      artworkUrl60: "test2",
      trackName: "test track name 2",
      artistName: "test artist name 2",
      collectionName: "test collection name 2",
      trackTimeMillis: 32335,
      primaryGenreName: "rock",
      currency: "usd"
    }
  ];
  const { getAllByTestId } = render(
    <SongListItem songsData={dummySongsData} />
  );
  const songListItemElement = getAllByTestId("list-items");
  expect(songListItemElement).toHaveLength(dummySongsData.length);
});
