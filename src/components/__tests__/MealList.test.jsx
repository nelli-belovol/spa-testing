import { screen } from "@testing-library/react";

import { renderWithRouter } from "../../utils/testing";

import { MealList } from "../MealList";

describe('MealList', () => {
	test('should render correctly', () => {
		renderWithRouter(<MealList meals={[
			{ strMeal: "Cheese cake", idMeal: "123", strMealThumb: "meal.jpg" },
			{ strMeal: "Cake", idMeal: "124", strMealThumb: "meal2.jpg" }
		]} />);
		expect(screen.getByRole('list')).toMatchSnapshot();
	})
})