import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { TierDataService } from './dataservices/tier.dataservices';
import { RoomDataService } from './dataservices/room.dataservice';
import { BookingDataservice } from './dataservices/booking.dataservice';


import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from "wijmo/wijmo.angular2.input";

import { RoomGridComponent } from './components/room-grid/room-grid.component';

import { MasterCalendarComponent } from './components/master-calendar/master-calendar.component';
import { CommonModule } from "@angular/common";
import { KeysPipe } from './keys.pipe';
import { ModalModule } from "ng2-bootstrap";

import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { RoomModalComponent } from './components/room-modal/room-modal.component';
import { CalendarDashboardComponent } from './components/calendar-dashboard/calendar-dashboard.component';
import { FilterRowComponent } from './components/filter-row/filter-row.component';

const appRoutes = [
  {path: "master-calendar", component: MasterCalendarComponent},
  {path: "rooms", component: RoomGridComponent},
  {path: "bookings", component: BookingPageComponent},
  {path: "dashboard", component: CalendarDashboardComponent},
  {path: '', redirectTo: "/master-calendar", pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomGridComponent,
    MasterCalendarComponent,
    KeysPipe,
    BookingComponent,
    BookingPageComponent,
    RoomModalComponent,
    CalendarDashboardComponent,
    FilterRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WjGridModule,
    WjInputModule,
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)


  ],
  providers: [RoomDataService, TierDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
