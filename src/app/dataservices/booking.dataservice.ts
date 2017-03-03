import { Injectable } from "@angular/core";
import { BookingGrid } from "../models/booking/BookingGrid.model";
import { BookingDate } from "../models/booking/BookingDate.model";
import { BookingEntry } from "../models/booking/BookingEntry.model";
import { BookingDictionary } from "../models/booking/BookingDictionary.model";
import { Booking } from "../models/booking/Booking.model";
import { Room } from "../models/room/Room.model";
import { RoomDictionary } from "../models/room/RoomDictionary.model";
import { DateDataservice } from "./date.dataservice";
import { RoomDataService } from "./room.dataservice";




@Injectable()
export class BookingDataservice {

    dateDataService = new DateDataservice();
    bookingDict: BookingDictionary;
    roomDs: RoomDataService;
    roomDict: RoomDictionary;
    constructor(private startDate: Date = new Date(), private endDate: Date = new Date()) {
        this.bookingDict = new BookingDictionary(startDate, endDate);
        this.roomDs= new RoomDataService();
        this.roomDict = new RoomDictionary();
    }

    getBookings(): BookingGrid {
        let dates = this.dateDataService.getDateRange(this.startDate, this.endDate),
            entries: BookingEntry[];

        entries = this.getBookingEntries(dates);

        return new BookingGrid(entries, dates)
    }

    getBookingEntries(dates: string[]): BookingEntry[] {
        let entries = [],
            rooms = this.roomDict.getAllRooms(),
            entry, i;

        for (i in rooms) {
            entries.push(this.getBookingsForRoom(rooms[i], dates))
        }


        return entries;
    }

    getBookingsForRoom(room: Room, dates: string[]): BookingEntry {
        let bookedDates = this.getBookedDates(dates);

        return new BookingEntry(room.getRoomNumber(), bookedDates)

    }

    getBookedDates(dates: string[]): {} {
        let bookedDates = {};

        dates.forEach((val) => {
            if (!bookedDates[val]) {
                let booking = this.bookingDict.getBookingForDate(val),
                    dateRange = booking && this.dateDataService.getDateRange(booking.getStartDate(), booking.getEndDate());

                if (Math.random() >= .05 && dateRange) {
                    dateRange.forEach((val) => {
                        bookedDates[val] = new BookingDate(true, booking);
                    })                
                } else {
                    return;
                }
            }
        })

        bookedDates = this.cleanBookedDates(dates, bookedDates);

        return bookedDates;
    }

    cleanBookedDates(dates: string[], bookedDates: {}): {} {

        dates.forEach((val) => {
            let prevDate = this.dateDataService.getDateBefore(new Date(val)),
                thisBookedDate: BookingDate = bookedDates[val],
                thisBookedBooking: Booking | null = thisBookedDate ? bookedDates[val].getBooking(): null,
                prevBookedDate: BookingDate | null = bookedDates[this.dateDataService.toString(prevDate)],
                prevBookedBooking;

            prevBookedBooking = prevBookedDate && prevBookedDate.getBooking();

            if(!thisBookedDate){
                thisBookedDate = bookedDates[val] = new BookingDate(false, null);
            }

            if (thisBookedDate
                && prevBookedDate
                && prevBookedBooking
                && thisBookedBooking
                && (prevBookedBooking.getId() === thisBookedBooking.getId())) {
                thisBookedDate.setMiddle({
                    text: thisBookedBooking.getPrimaryContact().getFullName(),
                    colorId: thisBookedBooking.getPrimaryContact().getId()
                });
            }

            if (thisBookedDate && prevBookedDate && prevBookedBooking) {
                thisBookedDate.setFirst({
                    text: prevBookedBooking.getPrimaryContact().getFullName(),
                    colorId: prevBookedBooking.getPrimaryContact().getId()
                });
            }
        })

        return bookedDates;
    }
}

