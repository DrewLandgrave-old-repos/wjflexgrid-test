import { Person } from "../person/Person.model";
import { Booking } from "./Booking.model";


export class BookingDate {
    public first: {}|null = null;
    public middle: {}|null = null;
    public last: {} |null;
    constructor(private active: boolean, private booking: Booking | null) {
        if (!this.active || !this.booking) {
            this.booking = null;
            this.last = null;
        }
        else{
            this.last = {
                text: booking.getPrimaryContact().getFullName(),
                colorId: booking.getPrimaryContact().getId()
            }
        }
    }

    getActive(): boolean {
        return this.active;
    }

    getBooking(): Booking {
        return this.booking;
    }

    setFirst(val: {}) {
        this.first = val;
    }

    setMiddle(val: {}) {
        this.middle = val;
    }

    setLast(val: {}) {
        this.last = val;
    }

}