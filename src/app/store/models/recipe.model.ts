import * as HelperFunctions from '../services/helper.functions';
import { Ingredient } from './shared.models';
export class Recipe {
  public id: number = HelperFunctions.generateId(1000, 9999);

  constructor(
    public name: string = '',
    public description: string = '',
    public imagePath: string = '',
    public ingredients: Ingredient[] = []
  ) {}
}
