import { screen } from '@testing-library/react';

import { CategoryList } from '../CategoryList';
import { renderWithRouter } from '../../utils/testing';

describe('CategoryItem', () => {
  it('should render correctly', () => {
    renderWithRouter(
      <CategoryList
        catalog={[
          {
            strCategory: 'Beef',
            strCategoryThumb:
              'https://www.themealdb.com/images/category/beef.png',
            strCategoryDescription:
              'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of protein and nutrients.',
          },
          {
            strCategory: 'Chicken',
            strCategoryThumb:
              'https://www.themealdb.com/images/category/chicken.png',
            strCategoryDescription:
              'Chicken is the most common type of poultry in the world',
          },
        ]}
      />,
    );

    expect(screen.getByRole('list')).toMatchSnapshot();
  });
  it('shpuld render correctly with no items', () => {
    renderWithRouter(<CategoryList />);
    expect(screen.getByRole('list')).toMatchSnapshot();
  });
});
