import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'searchResults', component: SearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
