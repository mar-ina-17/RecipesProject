export class Request {
  constructor(
    public recipeName: string = '',
    public user: string = '',
    public date?: Date,
    public id?: number
  ) {}
}
