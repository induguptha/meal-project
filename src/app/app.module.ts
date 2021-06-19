import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchResultComponent } from './components/search-result/search-result.component';
//import { sanitizeHtmlPipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RecipesComponent,
    RecipeDetailComponent,
    SearchResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,

      useClass: HttpErrorInterceptor,

      multi: true,
    },
  ],
})
export class AppModule {}
