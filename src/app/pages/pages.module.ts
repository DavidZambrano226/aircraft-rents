import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsComponent } from './rents/rents.component';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { DasboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { AuthService } from '../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RentsComponent,
    AstronautsComponent,
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
  providers: [AuthService]
})
export class PagesModule { }
