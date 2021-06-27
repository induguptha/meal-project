import { environment } from './environments/environment';

export default class Constants {
  static BASE_URL: string = environment.BASE_URL;
  static RECIPE_URL: string = Constants.BASE_URL + '/json/v1/1/random.php';
  static SEARCH_URL: string = Constants.BASE_URL + '/json/v1/1/search.php?s=';
}
