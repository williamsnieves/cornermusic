import React from "react";
import { render } from "@testing-library/react";
import SearchPlaceHolder from "../components/SearchPlaceHolder";

test("Place holder available in DOM", () => {
  const { getByTestId } = render(<SearchPlaceHolder />);
  const mainContainer = getByTestId("placeholder-container");
  expect(mainContainer).toBeInTheDocument();
});

test("Place holder contains the right title", () => {
  const dummyTitle = "test title";
  const { getByText } = render(<SearchPlaceHolder title={dummyTitle} />);
  const textElement = getByText(dummyTitle);
  expect(textElement).toBeVisible();
});
