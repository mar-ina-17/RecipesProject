import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/recipes';

  getRecipes() {
    return this.http.get(this.url);
  }
}
