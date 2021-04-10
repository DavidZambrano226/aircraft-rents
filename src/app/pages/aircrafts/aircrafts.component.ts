import { Component, OnInit } from '@angular/core';
import { AircraftsService } from '../../services/aircrafts/aircrafts.service';
import { AircraftModel } from '../../models/aircraft.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircrafts: AircraftModel[];
  aircraftForm: FormGroup;
  enabledUpdate: boolean;
  id: number;

  constructor( private aircraftsService: AircraftsService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getAircrafts();
    this.aircraftForm = this.fb.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      numberOfPassagers: ['', [Validators.required]],
      aditionalInformation: [''],
    })
  }

  getAircrafts() {
    this.aircraftsService.getAllAircrafts()
      .subscribe( resp => this.aircrafts = resp);
  }

  editAircraft(aircraft: AircraftModel) {
    this.enabledUpdate = true;
    this.id = aircraft.id;
    this.aircraftForm.patchValue({
      name: aircraft.name,
      brand: aircraft.brand,
      model: aircraft.model,
      numberOfPassagers: aircraft.numberOfPassagers,
      aditionalInformation: aircraft.aditionalInformation
    })
  }

  saveAircraft() {
    this.aircraftsService.saveAircraft(this.aircraftForm.value)
      .subscribe( () => {
        this.getAircrafts();
      })
  }

  updateAircraft() {
    this.aircraftsService.updateAircraft(this.aircraftForm.value, this.id)
      .subscribe( () => {
        this.enabledUpdate = false;
        this.aircraftForm.reset();        
        this.getAircrafts();
      })
  }

  deleteAircraft( id: number ) {
    this.aircraftsService.deleteAircraft(id)
      .subscribe( () => {
        this.getAircrafts();
      })
  }

}
