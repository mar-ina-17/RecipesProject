import { Ingredient } from './shared.models';
export class Recipe {
  constructor(
    public name: string = '',
    public description: string = '',
    public imagePath: string = '',
    public ingredients: Ingredient[] = [],
    public id?: number
  ) {}
}
