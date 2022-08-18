import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Interfaces/hero.interface';


import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Hero[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroesService.getSuggest(this.term)
    .subscribe(heroes => this.heroes = heroes);
  }

}
