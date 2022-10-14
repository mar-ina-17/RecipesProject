import * as HelperFunctions from '../helper.functions';

export class Ingredient {
  public id: number = HelperFunctions.generateId(100, 999);
  constructor(public name: string, public amount: number) {}
}
