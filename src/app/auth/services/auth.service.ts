import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environment.baseURL;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone (this.user); //structured Clone, is a prop of JS 17
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/1`).pipe(
        tap( user => this.user = user),
        tap( user => localStorage.setItem('token', "wertwert234123asdf") )
    )

  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }


}
