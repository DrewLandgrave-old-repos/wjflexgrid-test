import { Component, OnInit, ViewChild } from '@angular/core';
import { Room } from "../../models/room/Room.model";
import { RoomDictionary } from "../../models/room/RoomDictionary.model";
import { PersonDictionary } from "../../models/person/PersonDictionary.model";
import { BookingDictionary } from "../../models/booking/BookingDictionary.model";
import { Booking } from "../../models/booking/Booking.model";
import * as wjCore from "wijmo/wijmo";
import { ModalDirective } from "ng2-bootstrap";
import { WjGridModule, WjFlexGrid, } from 'wijmo/wijmo.angular2.grid'
import { RoomModalComponent } from "../room-modal/room-modal.component";
import { DateDataservice } from "../../dataservices/date.dataservice";



@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  bookings: wjCore.CollectionView;
  dateDs: DateDataservice = new DateDataservice()
  bookingDict: BookingDictionary = new BookingDictionary(new Date(), this.dateDs.getDateAfter(new Date(), 30));
  constructor() {
    
    this.bookings = new wjCore.CollectionView(this.bookingDict.getAllBookingsAsArray());
    this.bookings.pageSize = 10;
  }

  ngOnInit() {
     this.masterBookingGrid.cells.hostElement.addEventListener('click', function (e) {
      var click = this.masterBookingGrid.selection;
      let rc = this.masterBookingGrid.getCellBoundingRect(click.row, click.col);
      let c: any = document.elementFromPoint(rc.left + rc.width / 2, rc.top + rc.height / 2)
      if (c.dataset.roomNumber) {
        this.launchRoomModal(c.dataset.roomNumber);
      }
    }.bind(this));
  }

  launchRoomModal(id){
     let roomDict = new RoomDictionary(),
      room: Room = roomDict.getRoom(id);

    this.roomModal.setData(room);
    this.roomModal.modalShow();

  }

  @ViewChild('roomModal') public roomModal: RoomModalComponent;
  @ViewChild('masterbookingGrid') masterBookingGrid: WjFlexGrid;
}
