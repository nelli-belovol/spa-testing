import { screen } from '@testing-library/react';

import { renderWithRouter } from './utils/testing';
import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

jest.mock('./pages/Home', () => ({
  Home: () => <div data-testid="home">Home</div>,
}));

jest.mock('./pages/About', () => ({
  About: () => <div data-testid="about">About</div>,
}));

jest.mock('./pages/Contact', () => ({
  Contact: () => <div data-testid="contact">Contact</div>,
}));

jest.mock('./pages/Category', () => ({
  Category: () => <div data-testid="category">Category</div>,
}));

jest.mock('./pages/Recipe', () => ({
  Recipe: () => <div data-testid="recipe">Recipe</div>,
}));

jest.mock('./pages/NotFound', () => ({
  NotFound: () => <div data-testid="not-found">NotFound</div>,
}));

describe('App', () => {
  it('render App component', () => {
    renderWithRouter(<App />);

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('render App component with About', () => {
    renderWithRouter(<App />, { initialEntries: ['/about'] });

    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  it('render App component with Contact', () => {
    renderWithRouter(<App />, { initialEntries: ['/Contact'] });

    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  it('render App component with Category', () => {
    renderWithRouter(<App />, { initialEntries: ['/category/first'] });

    expect(screen.getByTestId('category')).toBeInTheDocument();
  });

  it('render App component with Recipe', () => {
    renderWithRouter(<App />, { initialEntries: ['/meal/1'] });

    expect(screen.getByTestId('recipe')).toBeInTheDocument();
  });
  it('render App component with NotFound', () => {
    renderWithRouter(<App />, { initialEntries: ['/not-found'] });

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
