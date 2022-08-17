import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Hero } from '../../Interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  hero!: Hero;
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    )
    .subscribe( hero => this.hero = hero );
  }

}
