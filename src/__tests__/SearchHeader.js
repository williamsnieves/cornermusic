import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchHeader from "../components/SearchHeader";

test("render search header", () => {
  const { getByPlaceholderText } = render(<SearchHeader />);
  const inputSearch = getByPlaceholderText("Find songs");
  expect(inputSearch).toBeVisible();
});

test("check text ", () => {
  const { getByPlaceholderText } = render(<SearchHeader />);
  const inputSearch = getByPlaceholderText("Find songs");
  fireEvent.change(inputSearch, { target: { value: "test search" } });
  expect(inputSearch.value).toBe("test search");
});
