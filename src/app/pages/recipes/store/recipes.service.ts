import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/recipes';

  getRecipes() {
    return this.http.get(this.url);
  }

  updateRecipe(recipe) {
    return this.http.put(this.url + '/' + recipe.id + '/', recipe);
  }

  addRecipe(recipe) {
    return this.http.post(this.url, recipe);
  }

  deleteRecipe(id) {
    return this.http.delete(this.url + '/' + id + '/', id);
  }
}
