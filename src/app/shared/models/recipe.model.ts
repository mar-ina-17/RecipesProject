import { Ingredient } from './shared.models';
export interface Recipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
