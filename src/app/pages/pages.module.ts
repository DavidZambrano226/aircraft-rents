import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsComponent } from './rents/rents.component';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { DasboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AircraftsComponent } from './aircrafts/aircrafts.component';



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
    RouterModule
  ]
})
export class PagesModule { }
