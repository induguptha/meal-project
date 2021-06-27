import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Constants from './../../constants';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get(Constants.RECIPE_URL);
  }

  searchRecipe(recipe: string) {
    console.log(`${Constants.SEARCH_URL}${recipe}`);
    return this.http.get(`${Constants.SEARCH_URL}${recipe}`);
  }
}
