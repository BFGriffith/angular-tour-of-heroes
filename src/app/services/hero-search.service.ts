//ng generate service services/hero-search
//ng g s services/hero-search
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from '../hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`app/heroes/?name=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/