import { Ingredient } from './shared.models';
export class Recipe {
  private generateId(): number {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  }

  public id: number = this.generateId();

  constructor(
    public name: string = '',
    public description: string = '',
    public imagePath: string = '',
    public ingredients: Array<Ingredient> = []
  ) {}
}
