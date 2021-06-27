import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RecipesComponent } from './components/home/recipes.component';
import { RecipeDetailComponent } from './components/home/recipe-detail/recipe-detail.component';

import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
//import { sanitizeHtmlPipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RecipesComponent,
    RecipeDetailComponent,
    SearchResultComponent,
    ItemDetailsComponent,
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
