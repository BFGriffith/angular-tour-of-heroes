//ng generate service services/InMemoryData
//ng g s services/InMemoryData
//=> src/app/services/in-memory-data.service.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'PPMD' },
      { id: 12, name: 'Principal Partner' },
      { id: 13, name: 'Consulting Managing Director' },
      { id: 14, name: 'Senior Solution Manager' },
      { id: 15, name: 'Solution Manager' },
      { id: 16, name: 'Solution Architect' },
      { id: 17, name: 'Senior Solution Specialist' },
      { id: 18, name: 'Solution Specialist' },
      { id: 19, name: 'Solution Engineer' },
      { id: 20, name: 'Solution Analist' }
    ];
    return { heroes };
  }
  // overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/