import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';
import { User } from './user.model';
export const recipe_options = [
  { name: 'Options', index: 0 },
  { name: 'Add to shopping list', index: 1 },
  { name: 'Edit', index: 2 },
  { name: 'Delete', index: 3 },
];

export interface Data {
  name: string;
  code: string;
}

export interface sessionData {
  accessToken: string;
  user: User;
}

export let refreshToken: string = '';

export { Recipe, Ingredient, User };
