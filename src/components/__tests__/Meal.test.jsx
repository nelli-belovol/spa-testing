import { screen } from "@testing-library/react";

import { renderWithRouter } from "../../utils/testing";

import { Meal } from "../Meal";

describe("Meal", () => {
  test("should render correctly", () => {
    renderWithRouter(
      <Meal strMeal="Cheese cake" idMeal="123" strMealThumb="meal.jpg" />,
    );
    expect(screen.getByRole("article")).toMatchSnapshot();
  });
});
