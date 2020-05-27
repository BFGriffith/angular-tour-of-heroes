//ng generate component HeroDetail
//ng g c Hero-Detail
//=> src/app/hero-detail/hero-detail.component...
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
      } else {
        this.navigated = false;
        this.heroService.addHero(this.hero);
      }
    });
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(hero => {
      this.hero = hero; // saved hero, w/ id if new
      this.goBack(hero);
    }, error => (this.error = error)); // TODO: Display error message
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    if (this.navigated) {
      window.history.back();
    }
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/