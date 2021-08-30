//import "jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ContainedButton from "../contained-button";

afterEach(() => {
  cleanup();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ContainedButton></ContainedButton>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<ContainedButton button_text="hi world" />);
  const newButton = getByTestId("contained-button");

  expect(newButton).toBeInTheDocument();
  expect(newButton).toHaveTextContent("hi world");
  expect(newButton).not.toContainHTML("strike");
});
it("matches snapshot 1", () => {
  const tree = renderer.create(<ContainedButton button_text="save" />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("matches snapshot 2", () => {
  const tree = renderer
    .create(<ContainedButton button_text="click me" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
