import { Component, ViewChild, OnInit, Inject, AfterViewChecked } from '@angular/core';
import * as wjCore from "wijmo/wijmo";
import { WjGridModule, WjFlexGrid, } from 'wijmo/wijmo.angular2.grid'


@Component({
  selector: 'bookings',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  comments: wjCore.CollectionView;
  commentArr: wjCore.ObservableArray = new wjCore.ObservableArray;
  constructor() {
    this.commentArr.push({
      date: "test",
      person: "Drew Landgrave",
      notes: "Initial Booking Conversation"
    });

    this.commentArr.push({
      date: "test2",
      person: "Drew Landgrave",
      notes: "Booking Room 701 and Bathroom"
    });

    this.commentArr.push({
      date: "test3",
      person: "Drew Landgrave",
      notes: "Booked other ameneties"
    });

    this.comments = new wjCore.CollectionView(this.commentArr);
  }


  @ViewChild('bookingFlexGrid') bookingGrid: WjFlexGrid;
  @ViewChild('masterBookingGrid') masterBookingGrid: WjFlexGrid;

  refreshGrid() {
    this.bookingGrid && this.bookingGrid.refresh();
    setTimeout(()=>{
     this.masterBookingGrid && this.masterBookingGrid.refresh();
    }, 200  )
  }

  ngOnInit() {
  }

}
