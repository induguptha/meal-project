import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  meal: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.getRecipeById(id);
    }
  }

  getRecipeById(data: string) {
    this.httpService.getRecipeById(data).subscribe(
      (response: any) => {
        console.log(response);
        this.meal = response?.meals[0];
      },
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
}
