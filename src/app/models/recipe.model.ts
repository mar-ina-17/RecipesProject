export class Recipe {
  constructor(
    public id?: number,
    public name?: string,
    public imagePath?: string,
    public ingredients?: Array<string>,
    public description?: string,
    public isDisabled?: boolean
  ) {}
}
