import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: DasboardRoutes,
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule] 
})
export class DasboardRoutingModule { }