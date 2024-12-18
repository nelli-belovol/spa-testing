import { screen } from "@testing-library/react";

import { renderWithRouter } from "../../utils/testing";

import { CategoryItem } from "../CategoryItem";

describe("CategoryItem", () => {
  it("should render correctly", () => {
    renderWithRouter(
      <CategoryItem
        strCategory="Cake"
        strCategoryThumb="Cake.png"
        strCategoryDescription="Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both."
      />,
    );
    expect(screen.getByRole("article")).toMatchSnapshot();
  });
});
