import { Component, ViewChild, OnInit, Inject, AfterViewChecked } from '@angular/core';
import { WjGridModule, WjFlexGrid, } from 'wijmo/wijmo.angular2.grid'
import { ModalDirective } from "ng2-bootstrap";
import { BookingComponent } from "../booking/booking.component";
import { RoomModalComponent } from "../room-modal/room-modal.component";
import * as wjCore from 'wijmo/wijmo';
import * as wjGrid from 'wijmo/wijmo.grid';
import * as wjInput from 'wijmo/wijmo.input';

import { Room } from '../../models/room/Room.model';
import { Tier } from '../../models/room/Tier.model';
import { Booking } from "../../models/booking/Booking.model";

import { RoomDictionary } from '../../models/room/RoomDictionary.model';
import { RoomDataService } from "../../dataservices/room.dataservice";

import { BookingGrid } from "../../models/booking/BookingGrid.model";
import { BookingEntry } from "../../models/booking/BookingEntry.model";

import { BookingDataservice } from "../../dataservices/booking.dataservice";
import { DateDataservice } from "../../dataservices/date.dataservice";

import { ColorDict } from "../../models/colors/ColorDict.model";



@Component({
  moduleId: module.id,
  selector: 'master-calendar',
  templateUrl: './master-calendar.component.html',
  styleUrls: ['./master-calendar.component.css']
})
export class MasterCalendarComponent implements OnInit, AfterViewChecked {
  data: wjCore.CollectionView;
  selectionMode = 'Cell';
  bookingDs: BookingDataservice;
  dates: string[];
  grid: wjGrid.FlexGrid;
  paint: boolean = true;
  colorDict: ColorDict;
  startDate: Date;
  endDate: Date;
  bookings: BookingGrid;
  dateDs: DateDataservice;
  dateColumnWidth: number = 60;
  roomDict: RoomDictionary;
  roomDs: RoomDataService;
  prevBookingString: string;

  constructor() {

    this.startDate = new Date();
    this.endDate = new Date(new Date().setDate(new Date().getDate() + 29));
    this.bookingDs = new BookingDataservice(this.startDate, this.endDate);
    this.bookings = this.bookingDs.getBookings();
    this.dates = this.bookings.getDates();
    this.data = new wjCore.CollectionView(this.bookings.getEntries());
    this.colorDict = new ColorDict();
    this.dateDs = new DateDataservice();
    this.roomDict = new RoomDictionary();
    this.roomDs = new RoomDataService();

  }

  @ViewChild(WjFlexGrid) flex: WjFlexGrid;
  @ViewChild('startDateControl') startDateControl: wjInput.InputDate;
  @ViewChild('endDateControl') endDateControl: wjInput.InputDate;
  @ViewChild('roomModal') public roomModal: RoomModalComponent;
  @ViewChild('bookingModal') public bookingModal: ModalDirective;
  @ViewChild('bookingGrid') public bookingGrid: BookingComponent;

  ngOnInit() {
    this.flex.cells.hostElement.addEventListener('click', function (e) {
      var click = this.flex.selection;
      let rc = this.flex.getCellBoundingRect(click.row, click.col);
      let c: any = document.elementFromPoint(rc.left + rc.width / 2, rc.top + rc.height / 2)
      if (c.dataset.bookingId) {
        this.launchBookingInfo()
      } else if (c.dataset.roomNumber) {
        this.launchRoomInfo(c.dataset.roomNumber);
      }
    }.bind(this));

    this.startDateControl.addEventListener(this.startDateControl.hostElement.querySelector('input'), 'change', (e) => {
      console.log('Start Date Chage:' + e);
    });
    this.endDateControl.hostElement.addEventListener('change', (e) => {
      console.log('End Date Chage:' + e);
    });
  }

  /**
   * Fixing the second column text
   */
  ngAfterViewChecked() {
    let columnData = this.getDayColumnData(), i = 0;


    //add some data to the column headers
    for (var r = 0; r < this.flex.columnHeaders.rows.length; r++) {
      for (var c = 0; c < this.flex.columns.length; c++) {
        if (r == 1 && c > 0) {
          let el = this.flex.columnHeaders.getCellElement(r, c);
          el && (el.textContent = columnData[i]);
          i++;
        }
      }
    }
  }


  /**
   * Initting the flexgrid
   */
  init(s: wjGrid.FlexGrid, e: wjCore.EventArgs) {
    let mm = new wjGrid.MergeManager(s),
      oldGetMergedRange = this.flex.mergeManager.getMergedRange.bind(this.flex.mergeManager),
      rngArr = [],
      secondRngArr = [];

    for (let i = 1; i < s.columns.length;) {
      rngArr.push(new wjGrid.CellRange(0, i, 0, i + 2));
      rngArr.push(new wjGrid.CellRange(1, i, 1, i + 2));
      i = i + 3;
    }

    let t = new wjGrid.Row();
    this.flex.columnHeaders.rows.push(t);

    mm.getMergedRange = function (panel: wjGrid.GridPanel, r: number, c: number) {
      if (panel.cellType == wjGrid.CellType.ColumnHeader) {
        for (let i = 0; i < rngArr.length; i++) {
          if (r >= 0 && rngArr[i].contains(r, c)) {
            return rngArr[i];
          }
        }

      } else if (r > 1 && c > 0 && c % 3 === 0) {
        let colGroup = c / 3,
          roomNumbers = this.roomDs.getRoomNumbers(),
          roomNumber = roomNumbers[r - 2],
          date = this.dates[c],
          prevDate = this.dates[c - 3],
          prevBooking: Booking | null = null,
          entries = this.bookings.getEntries(),
          i = 0,
          booking: Booking;

        for (i; i < entries.length; i++) {
          if (entries[i].getRoomNumber() === roomNumber) {
            let bookedDates = entries[i].getBookedDates(),
            prevBookingDate = bookedDates[this.dateDs.toString(this.dateDs.getDateBefore(new Date(date)))];
            bookedDates[date] && (booking = bookedDates[date].getBooking());
            prevBookingDate && (prevBooking = prevBookingDate.getBooking());
            break;
          };
        };


        if (booking &&
          (!prevBooking || this.prevBookingString !== JSON.stringify(booking))) {
          return new wjGrid.CellRange(r, c, r, c + booking.getDuration())
        }
      }
      return null;
    }.bind(this);
    s.mergeManager = mm;
  }

  dayOfWeekAsString(dayIndex) {
    return ["Su", "M", "Tue", "Wed", "Th", "F", "Sa"][dayIndex];
  }

  getDayColumnData(): {} {
    let ret = {},
      i = 0;

    this.dates.forEach((val) => {
      ret[i] = this.dayOfWeekAsString(new Date(val).getDay());
      ret[i + 1] = this.dayOfWeekAsString(new Date(val).getDay());
      ret[i + 2] = this.dayOfWeekAsString(new Date(val).getDay());

      i = i + 3
    });

    return ret;
  }

  /** 
   * Modal Controls
   */
  launchRoomInfo(id) {
    let roomDict = new RoomDictionary(),
      room: Room = roomDict.getRoom(id);

    this.roomModal.setData(room);
    this.roomModal.modalShow();
  }
  launchBookingInfo() {
    this.bookingModal.show();
    setTimeout(() => {
      this.bookingGrid.refreshGrid();
    }, 200)
  }


  public hideBookingModal(): void {
    this.bookingModal.hide();
  }


  /**
   * Column Visuals Stuff
   */
  public getBackgroundColor(date: string, item: BookingEntry, column: string) {
    let ret = '',
      bookedDate = this.getBookedDates(item, date);

    if (bookedDate && bookedDate[column]) {
      ret = this.colorDict.getColor(bookedDate[column].colorId)
    }

    return ret;
  }

  public getBookedDates(item, date) {
    return item.getBookedDates()[date];
  }

  public getText(date: string, item: BookingEntry, column: string) {
    let ret = '',
      bookedDate = this.getBookedDates(item, date);

    if (bookedDate && bookedDate[column]) {
      ret = bookedDate[column].text;
    }

    return ret;
  }
}
