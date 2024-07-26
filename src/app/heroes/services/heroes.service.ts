import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseURL}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes?q=${query}&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseURL}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Not HERO ID ');
    return this.http.patch<Hero>(`${this.baseURL}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<Boolean> {
    return this.http.delete<Hero>(`${this.baseURL}/heroes/${id}`).
      pipe(
        catchError(error => of(false)),
        map(resp => true) //if it reachs this point, it was successful then true
      )
      }
}
