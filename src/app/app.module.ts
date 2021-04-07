import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RentsComponent } from './pages/rents/rents.component';
import { AstronautsComponent } from './pages/astronauts/astronauts.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    LoginComponent,
    RegisterComponent,
    RentsComponent,
    AstronautsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
