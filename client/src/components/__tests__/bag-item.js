//import "jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import BagItem from "../bag-item";

afterEach(() => {
  cleanup();
});

it("renders without crashing", () => {
  const product = {
    frontPicture: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
    title: "cat",
    price: 43,
    color: "GREY",
    count: 1,
    size: "L",
  };
  const div = document.createElement("div");
  ReactDOM.render(<BagItem product={product} />, div);
});

it("renders button correctly", () => {
  const product = {
    frontPicture:
      "https://assets.burberry.com/is/image/Burberryltd/EDC85896-F540-490D-B9A4-5ADF6A0EED21.jpg?$BBY_V2_ML_1x1$&wid=2500&hei=2500",
    title: "Coat",
    price: 43,
    color: "GREY",
    count: 1,
    size: "L",
  };
  const { getByTestId } = render(<BagItem product={product} />);
  const newBagItem = getByTestId("bag-item");

  expect(newBagItem).toBeInTheDocument();
  expect(newBagItem).toHaveTextContent("Coat");
  expect(newBagItem).not.toContainHTML("strike");
  expect(newBagItem).toContainHTML("img");
});
it("matches snapshot 1", () => {
  const product = {
    frontPicture:
      "https://assets.burberry.com/is/image/Burberryltd/EDC85896-F540-490D-B9A4-5ADF6A0EED21.jpg?$BBY_V2_ML_1x1$&wid=2500&hei=2500",
    title: "Coat",
    price: 43,
    color: "GREY",
    count: 1,
    size: "L",
  };
  const tree = renderer.create(<BagItem product={product} />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("matches snapshot 2", () => {
  const product = {
    frontPicture:
      "https://www.politix.com.au/dw/image/v2/ABBA_PRD/on/demandware.static/-/Sites-politix-master-catalog/default/dw68075a91/images/hires/Winter%2021/A3/ac07-black-1.jpg?sw=2000&sh=2000&sm=fit",
    title: "Coat",
    price: 43,
    color: "Blue",
    count: 1,
    size: "M",
  };
  const tree = renderer.create(<BagItem product={product} />).toJSON();
  expect(tree).toMatchSnapshot();
});
