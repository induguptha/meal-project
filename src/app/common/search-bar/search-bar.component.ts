import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {}

  goToSearchResults(searchInput: string) {
    console.log(searchInput);
    this.sharedService.updateSearchData(searchInput);
    this.router.navigate(['/searchResults']);
  }
}
