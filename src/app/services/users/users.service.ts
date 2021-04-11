import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  getAllUsers(): Observable<UserModel[]> {
    const url = `http://localhost:3000/users`
    return this.http.get(url).pipe(
      map( (resp: UserModel[]) => resp )
    )
  }

  getRoles() {
    const url = `http://localhost:3000/roles`;
    return this.http.get(url);
  }

  saveUser( user: UserModel ): Observable<UserModel> {
    const url = `http://localhost:3000/users`;
    user.password = btoa(user.password);
    return this.http.post(url, user).pipe(
      map( (resp: UserModel) => resp)
    )
  }

  updateUser( user: UserModel, id: number ): Observable<UserModel> {
    const url = `http://localhost:3000/users/${id}`;
    return this.http.put(url, user).pipe(
      map( (resp: UserModel) => resp)
    )
  }
}
