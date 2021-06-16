import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    recipeUrl: string;
    constructor(private http: HttpClient){
        this.recipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    }
    getRecipes(){
    return this.http.get(this.recipeUrl);
    }
}
