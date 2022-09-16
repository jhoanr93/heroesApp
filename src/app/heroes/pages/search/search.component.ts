import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  heroSelected: Hero | undefined;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroesService.getSuggest(this.term)
    .subscribe(heroes => this.heroes = heroes);
  }

  selectedOption(event: MatAutocompleteSelectedEvent){

     if (!event.option.value){
      this.heroSelected = undefined;
      return;
     }

    const hero : Hero = event.option.value;
    this.term = hero.superhero;
    console.log(hero.superhero);

    this.heroesService.getHeroById( hero.id! ).subscribe(hero => 
      this.heroSelected = hero);
  }

}
