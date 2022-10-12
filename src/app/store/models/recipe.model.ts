export class Recipe {
  generateId(): number {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  }

  public id: number = this.generateId();
  public isDisabled: boolean = true;

  constructor(
    public name?: string,
    public description?: string,
    public imagePath?: string,
    public ingredients?: Array<string>
  ) {}
}
