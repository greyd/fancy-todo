import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'hero-list',
  templateUrl: './heroes-list.template'
})
export class HeroListComponent {
  heroes = HEROES;
}
