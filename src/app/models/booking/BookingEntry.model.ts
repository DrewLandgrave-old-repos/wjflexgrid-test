import { Person } from "../person/Person.model";


export class BookingEntry {
    constructor(private roomNumber: number, private bookedDates: {}) { }

    getRoomNumber() {
        return this.roomNumber;
    }

    getBookedDates() {
        return this.bookedDates;
    }
}