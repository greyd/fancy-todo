import { Component, OnInit } from '@angular/core';
import { HeroService } from './heroes/hero.service';
import { Hero } from './heroes/hero';

@Component({
  selector: 'my-app',
  providers: [HeroService],
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.css']
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void{
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
