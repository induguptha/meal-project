import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from './../../services/shared.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.sharedService.getSearchData().subscribe((data) => {
      console.log(data);
      if (data.length > 0) {
        this.searchRecipe(data);
      }
    });
  }

  searchRecipe(data: string) {
    this.httpService.searchRecipe(data).pipe(
      map((response) => {
        console.log(response);
      })
    );
  }
}
