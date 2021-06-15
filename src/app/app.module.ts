import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/urlSafePipe';
//import { sanitizeHtmlPipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
