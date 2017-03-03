import { Room } from "../room/Room.model";
import { Person } from "../person/Person.model"
import { Comment } from "../comment/comment.model";
import { DateDataservice } from "../../dataservices/date.dataservice";


export class Booking {
    private dateDs: DateDataservice = new DateDataservice
    private duration: number

    constructor(
        private id: number,
        private room: Room,
        private startDate: Date,
        private endDate: Date,
        private primaryContact: Person,
        private additionalContacts: Person[],
        private comments: Comment[]
    ) {
        this.duration = this.dateDs.getDaysBetween(this.startDate, this.endDate);
    }

    getDuration(): number{
        return this.duration;
    }

    getId(): number {
        return this.id;
    }

    getRoom(): Room {
        return this.room;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getPrimaryContact(): Person {
        return this.primaryContact;
    }

    getAdditionalContact(): Person[] {
        return this.additionalContacts;
    }

    getComments(): Comment[] {
        return this.comments;
    }

}