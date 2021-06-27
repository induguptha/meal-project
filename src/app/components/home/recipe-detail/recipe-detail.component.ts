import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../../../models/recipe.model';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  randomRecipeData: Recipe[] = [];
  constructor(private recipeServie: HttpService) {}

  ngOnInit(): void {
    this.recipeServie
      .getRecipes()
      .pipe(
        map((responseData) => {
          this.randomRecipeData = Object.values(responseData)[0];
          console.log(this.randomRecipeData);
        })
      )
      .subscribe();
  }
}
