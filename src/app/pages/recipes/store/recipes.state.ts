import { Recipe } from './../../../shared/models/recipe.model';

export const RECIPE_FEATURE_NAME = 'recipes';

export interface RecipesState {
  recipes: Recipe[];
  isReady: boolean;
}

export const initialState: RecipesState = {
  recipes: [
    {
      id: 1,
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      name: 'Recipe 1',
      ingredients: [{ id: 1, name: 'Tomatoes', amount: 3 }],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. ',
    },
    {
      id: 1,
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/e/ed/Food_basket.jpg',
      name: 'Recipe 1',
      ingredients: [{ id: 1, name: 'Tomatoes', amount: 3 }],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque. Congue mauris rhoncus aenean vel elit. Bibendum ut tristique et egestas quis ipsum. Dictum varius duis at consectetur lorem donec massa sapien. Tellus mauris a diam maecenas sed enim ut sem viverra. ',
    },
  ],
  isReady: false,
};
