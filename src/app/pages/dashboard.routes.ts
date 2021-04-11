import { Routes } from '@angular/router';
import { RentsComponent } from './rents/rents.component';
import { UsersComponent } from './users/users.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { RequestComponent } from './request/request.component';


export const DasboardRoutes: Routes = [
    { path: '', component: RequestComponent },
    { path: 'rents', component: RentsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'aircrafts', component: AircraftsComponent },
]