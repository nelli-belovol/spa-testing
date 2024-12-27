// Страица грузится с данными получаемыми с сервера сначала прелоадер

// проверить если пользователь сразу зашел вс конктретным поиском нужно фильтровать

// и ситуация когда пользователь зашел и сам что-то ввел

import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../utils/testing';
import * as api from '../../api';

import { Home } from '../Home';

const categories = [
  {
    strCategory: 'First',
    idCategory: '1',
    strCategoryThumb: 'Thumb',
    strCategoryDescription: 'Description',
  },
  {
    strCategory: 'Second',
    idCategory: '2',
    strCategoryThumb: 'Thumb',
    strCategoryDescription: 'Description',
  },
  {
    strCategory: 'Third',
    idCategory: '3',
    strCategoryThumb: 'Thumb',
    strCategoryDescription: 'Description',
  },
];

const apiSpy = jest.spyOn(api, 'getAllCategories');

describe('Home', () => {
  it('render Home component', async () => {
    apiSpy.mockResolvedValueOnce({ categories });

    renderWithRouter(<Home />);

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it('should render with search', async () => {
    apiSpy.mockResolvedValueOnce({ categories });

    renderWithRouter(<Home />, {
      initialEntries: ['/?search=first'],
    });

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getAllByRole('article')).toHaveLength(1);
  });

  it('should render Home with search user interaction', async () => {
    apiSpy.mockResolvedValue({ categories });

    renderWithRouter(<Home />);

    const preloader = screen.getByRole('progressbar');
    const input = screen.getByRole('searchbox');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getAllByRole('article')).toHaveLength(3);

    await userEvent.type(input, 'first');
    await userEvent.click(screen.getByRole('button'));

    expect(screen.getAllByRole('article')).toHaveLength(1);
  });
});
