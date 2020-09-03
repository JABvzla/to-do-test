import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("should render correctly", () => {
  const { queryByText, queryByTestId, asFragment } = render(<App />);
  const emptyList = queryByText(/No hay nada por hacer/i);
  const inputAdd = queryByTestId("input-add");
  const buttonAdd = queryByTestId("button-add");

  expect(inputAdd).toBeInTheDocument();
  expect(buttonAdd).toBeInTheDocument();
  expect(emptyList).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test("should add an item", () => {
  const { queryByText, queryByTestId } = render(<App />);
  const emptyList = queryByText(/No hay nada por hacer/i);
  const inputAdd = queryByTestId("input-add");
  const buttonAdd = queryByTestId("button-add");

  fireEvent.change(inputAdd, { target: { value: "item nuevo 2" } });
  fireEvent.click(buttonAdd);

  const newItem = queryByText(/item nuevo/i);

  expect(inputAdd.value).toBe("");
  expect(newItem).toBeInTheDocument();
  expect(inputAdd).toBeInTheDocument();
  expect(buttonAdd).toBeInTheDocument();
  expect(emptyList).not.toBeInTheDocument();
});

test("dont should add empty an item", () => {
  const { queryByText, queryByTestId, asFragment } = render(<App />);
  const emptyList = queryByText(/No hay nada por hacer/i);
  const inputAdd = queryByTestId("input-add");
  const buttonAdd = queryByTestId("button-add");

  fireEvent.change(inputAdd, { target: { value: "" } });
  fireEvent.click(buttonAdd);

  expect(inputAdd).toBeInTheDocument();
  expect(buttonAdd).toBeInTheDocument();
  expect(emptyList).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
