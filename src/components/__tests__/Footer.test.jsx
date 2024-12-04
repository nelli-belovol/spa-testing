import { screen, render } from "@testing-library/react";

import { Footer } from "../Footer";

describe('Footer', () => {
	test('should render Footer component', () => {
		render(<Footer />)

		expect(screen.getByText(/Copyright Text/i)).toBeInTheDocument();

		expect(screen.getByRole('link')).toBeInTheDocument();
	})
})