import { Person } from "../person/Person.model";

export class Comment {
    constructor(private date: Date, private contact: Person, private notes: string) {

    }

    getDate(): Date {
        return this.date;
    }
    getContact(): Person {
        return this.contact;
    }

    getNotes(): string {
        return this.notes;
    }
}
