import { Booking } from "./Booking.model";
import { Person } from "../person/Person.model";
import { PersonDictionary } from "../person/PersonDictionary.model";
import { RoomDictionary } from "../room/RoomDictionary.model";
import { Comment } from "../comment/comment.model";
import * as wjCore from "wijmo/wijmo";
import { DateDataservice } from "../../dataservices/date.dataservice";
import { RoomDataService } from "../../dataservices/room.dataservice";




export class BookingDictionary {
    private dict: {} = {};
    private dateDs: DateDataservice = new DateDataservice();
    private dateBookings = {};
    constructor(private startDate, private endDate) {
        for (let i = 0; i < 500; i++) {
            this.generateBookings(i);
        }

    }

    generateBookings(i: number) {
        let personDict = new PersonDictionary(),
            roomDs = new RoomDataService(),
            roomNumbers = roomDs.getRoomNumbers(),
            roomDict = new RoomDictionary(),
            bookingStart = this.dateDs.getDateBetween(this.startDate, this.endDate),
            primaryId = Math.floor(Math.random() * 67) + 1,
            primary: Person = personDict.getPerson(primaryId),
            bookingDateRef, newBooking;

        bookingDateRef = this.dateBookings[this.dateDs.toString(bookingStart)];

        newBooking = new Booking(primary.getId(),
            roomDict.getRoom(roomNumbers[Math.floor(Math.random() * 15)]),
            bookingStart,
            this.dateDs.getDateBetween(bookingStart, this.dateDs.getDateBetween(bookingStart, this.endDate)),
            primary,
            [
                personDict.getPerson(Math.floor(Math.random() * 67) + 1),
                personDict.getPerson(Math.floor(Math.random() * 67) + 1),
                personDict.getPerson(Math.floor(Math.random() * 67) + 1),
            ],
            [
                new Comment(new Date(), primary, 'Initial Contact'),
                new Comment(new Date(), primary, 'Booking Confirmed'),
                new Comment(new Date(), primary, 'Ameneties ordered'),
            ],
        )

        this.addBooking(i, newBooking)

        if (bookingDateRef) {
            bookingDateRef.push(newBooking);
        } else {
            this.dateBookings[this.dateDs.toString(bookingStart)] = [newBooking];
        }

    }

    getBookingForRoomNumber(): Booking {
        return this.dict[1];
    }

    getBookingForDate(date: string): Booking | null {
        let length = this.dateBookings[date] && this.dateBookings[date].length,
            random = Math.floor(Math.random() * length);

        if (length > 0) {
            return this.dateBookings[date][random];
        }

        return null;
    }

    addBooking(id: number, obj: Booking) {
        this.dict[id] = obj;
    }

    getBooking(id: number) {
        return this.dict[id];
    }

    getAllBookings(): {} {
        return this.dict;
    }

    getAllBookingsAsArray(): wjCore.ObservableArray {
        let ret = new wjCore.ObservableArray();
        for (let key in this.dict) {
            ret.push(this.dict[key]);
        }

        return ret;
    }
}