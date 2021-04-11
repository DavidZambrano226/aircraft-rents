import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RentModel } from '../../models/rents.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor( private http: HttpClient ) { }

  getAllRequests(): Observable<RentModel[]> {
    const url = `http://localhost:3000/rents`;
    return this.http.get(url).pipe(
      map((resp: RentModel[]) => resp)
    )
  }

  saveRequest(request: RentModel): Observable<RentModel> {
    const url = `http://localhost:3000/rents`;
    return this.http.post(url, request).pipe(
      map((resp: RentModel) => resp)
    );
  }
}
