import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../Interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  
})
export class HeroCardComponent implements OnInit {

  @Input() hero!: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}
