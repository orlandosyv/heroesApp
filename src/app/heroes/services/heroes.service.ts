import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
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
}
