import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { renderWithRouter } from '../../utils/testing';
import * as api from '../../api';

import { Recipe } from '../Recipe';

const apiSpy = jest.spyOn(api, 'getMealById');

describe('Recipe', () => {
  it('renders correctly', async () => {
    apiSpy.mockResolvedValueOnce({
      meals: [
        {
          idMeal: '52874',
          strArea: 'British',
          strCategory: 'Beef',
          strIngredient1: 'Beef',
          strInstructions:
            "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
          strMeal: 'Beef and Mustard Pie',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
          strMeasure1: '1kg',
          strYoutube: 'https://www.youtube.com/watch?v=nMyBC9staMU',
        },
      ],
    });

    renderWithRouter(<Recipe match={{ params: { id: '52874' } }} />);

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getByRole('article')).toMatchSnapshot();
  });

  it('should render a recipe without area and youtube', async () => {
    apiSpy.mockResolvedValueOnce({
      meals: [
        {
          idMeal: '52874',
          strCategory: 'Beef',
          strIngredient1: 'Beef',
          strInstructions:
            "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
          strMeal: 'Beef and Mustard Pie',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
          strMeasure1: '1kg',
        },
      ],
    });

    renderWithRouter(<Recipe match={{ params: { id: '52874' } }} />);

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
