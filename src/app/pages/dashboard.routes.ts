import { Routes } from '@angular/router';
import { RentsComponent } from './rents/rents.component';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';


export const DasboardRoutes: Routes = [
    { path: '', component: RentsComponent },
    { path: 'astronauts', component: AstronautsComponent },
    { path: 'aircrafts', component: AircraftsComponent },
]