//ng generate component Heroes
//ng g c Heroes
//=> src/app/heroes/heroes.component...
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit(): void {
    //this.getHeroes();
    this.heroService.getHeroes().subscribe(result => this.heroes = result);
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        heroes => (this.heroes = heroes),
        error => (this.error = error)
      )
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService.deleteHero(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    }, error => (this.error = error));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}