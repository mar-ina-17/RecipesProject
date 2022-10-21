import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  url = 'http://localhost:3000/ingredients/';

  constructor(private http: HttpClient) {}

  getShoppingList() {
    return this.http.get(this.url);
  }
  updateIngredient(ingredient) {
    return this.http.put(this.url + ingredient.id + '/', ingredient);
  }

  addIngredient(ingredient) {
    return this.http.post(this.url, ingredient);
  }

  deleteIngredient(id) {
    return this.http.delete(this.url + id + '/', id);
  }
}
