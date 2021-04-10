import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsComponent } from './rents/rents.component';
import { UsersComponent } from './users/users.component';
import { DasboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { AuthService } from '../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AircraftsService } from '../services/aircrafts/aircrafts.service';
import { UsersService } from '../services/users/users.service';
import { RequestsService } from '../services/requests/requests.service';


@NgModule({
  declarations: [
    RentsComponent,
    UsersComponent,
    DashboardComponent,
    AircraftsComponent
  ],
  imports: [
    CommonModule,
    DasboardRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AircraftsService,
    UsersService,
    RequestsService
  ]
})
export class PagesModule { }
