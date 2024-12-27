import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing';
import * as api from '../../api';

import { Category } from '../Category';

const apiSpy = jest.spyOn(api, 'getFilteredCategory');

describe('Category', () => {
  it('renders correctly with recieved meals', async () => {
    apiSpy.mockResolvedValueOnce({
      meals: [
        {
          idMeal: '1',
          strMeal: 'First',
          strMealThumb: 'Thumb',
        },
        {
          idMeal: '2',
          strMeal: 'Second',
          strMealThumb: 'Thumb',
        },
      ],
    });

    renderWithRouter(<Category />);
    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('should render correctly and show preloader when no meals', async () => {
    apiSpy.mockResolvedValueOnce({
      meals: [],
    });

    renderWithRouter(<Category />);
    const preloader = await screen.findByRole('progressbar');
    const button = await screen.findByRole('button', { name: /go back/i });

    expect(button).toBeInTheDocument();

    expect(preloader).toBeInTheDocument();
  });
});
