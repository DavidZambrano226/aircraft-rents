import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';
import { InMemory } from '../../models/in-memory.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate( email: string, password: string): Observable<UserModel> {
    const path = `http://localhost:3000/users?email=${email}&password=${password}`;
    return this.http.get(path).pipe( 
      map ((user: UserModel) => user[0])
    );
  }

  logout() {
    if (localStorage.getItem('isAuthenticate')) {
      localStorage.removeItem('isAuthenticate');
    }
  }
}
