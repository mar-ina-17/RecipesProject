export class User {
  constructor(
    public email: string = '',
    private password: string = '',
    public name: string = '',
    public role: string = 'guest',
    private id?: number
  ) {}
}
