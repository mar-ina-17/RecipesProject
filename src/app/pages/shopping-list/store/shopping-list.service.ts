import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  url = 'http://localhost:3000/ingredients';

  constructor(private http: HttpClient) {}

  getShoppingList() {
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
}
