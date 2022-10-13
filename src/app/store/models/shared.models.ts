import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';

export interface Option {
  name: string;
  index: number;
}
export interface Data {
  name: string;
  code: string;
}
export { Recipe, Ingredient };
