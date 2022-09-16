import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../Interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl

  constructor( private http:HttpClient) { }

  getHeroes(){
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById ( id: string ):Observable<Hero>{
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`);
  }

  getSuggest ( term: string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes/?q=${ term }&_limit=6`);
    }

  addHero(hero:Hero): Observable<Hero>{
    return this.http.post<Hero>(`${ this.baseUrl }/heroes`, hero)
  }
}
