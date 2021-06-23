import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalenderComponent } from './pages/calender/calender.component';
 import { FullCalendarModule } from '@fullcalendar/angular';
// import { Calendar } from '@fullcalendar/core';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
