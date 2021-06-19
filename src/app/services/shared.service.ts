import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private searchData = new Subject<string>();

  /*
   * @return {Observable<string>}
   */
  public getSearchData(): Observable<string> {
    return this.searchData.asObservable();
  }
  /*
   * @param {string} message
   */
  public updateSearchData(message: string): void {
    this.searchData.next(message);
  }
}
