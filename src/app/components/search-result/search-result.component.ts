import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from './../../services/shared.service';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  meals: any = [];
  constructor(
    private sharedService: SharedService,
    private httpService: HttpService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe((params) => {
      this.searchRecipe(params.input);
    });

    this.sharedService.getSearchData().subscribe((data) => {
      console.log(data);
      if (data.length > 0) {
        this.searchRecipe(data);
      }
    });
  }

  searchRecipe(data: string) {
    this.httpService.searchRecipe(data).subscribe(
      (response: any) => {
        console.log(response);
        this.meals = response?.meals;
      },
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  gotoDetails(id: Number) {
    this.router.navigate(['/searchResults', id]);
  }
}
