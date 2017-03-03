import { BookingEntry } from "./BookingEntry.model";



export class BookingGrid {
    constructor(private entries: BookingEntry[], private dates: string[]) { }

    getEntries(): BookingEntry[] {
        return this.entries;
    }

    getDates(): string[] {
        return this.dates
    }

}