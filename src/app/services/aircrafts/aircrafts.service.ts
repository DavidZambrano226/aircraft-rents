import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AircraftModel } from '../../models/aircraft.model';

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {

  constructor(private http: HttpClient) { }

  getAllAircrafts(): Observable<AircraftModel[]> {
    const url = `http://localhost:3000/aircrafts`;
    return this.http.get(url).pipe(
      map((resp: AircraftModel[]) => resp)
    )
  }

  saveAircraft(aircraft: AircraftModel): Observable<AircraftModel> {
    const url = `http://localhost:3000/aircrafts`;
    return this.http.post(url, aircraft).pipe(
      map( (resp: AircraftModel) => resp)
    )
  }

  updateAircraft(aircraft: AircraftModel, id: number): Observable<AircraftModel> {
    const url = `http://localhost:3000/aircrafts/${id}`;
    return this.http.put(url, aircraft).pipe(
      map( (resp: AircraftModel) => resp )
    )
  }

  deleteAircraft( id: number ): Observable<AircraftModel> {
    const url = `http://localhost:3000/aircrafts/${id}`;
    return this.http.delete(url).pipe(
      map( (resp: AircraftModel) => resp)
    )
  }
}
