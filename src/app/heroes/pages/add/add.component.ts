import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero, Publisher } from '../../Interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  hero: Hero = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:''
  }

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('edit')){
      return;
    }
    this.activatedRoute.params.pipe(
      switchMap (({id}) => this.heroesService.getHeroById (id))
    ).subscribe(hero => this.hero = hero)
  }

  save(){
    if(this.hero.superhero.trim().length === 0){
      return;
    }

    if (this.hero.id){
      this.heroesService.updateHero ( this.hero )
      .subscribe(hero => console.log('Updating', hero))
    }else{
      this.heroesService.addHero( this.hero ).subscribe(hero => {
        this.router.navigate(['/heroes/edit', hero.id])
    })
  }
  
  }

  
  

}


