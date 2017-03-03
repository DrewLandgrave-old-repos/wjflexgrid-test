import { Injectable } from "@angular/core";
import * as wjCore from "wijmo/wijmo";
import { Room } from "../models/room/Room.model";
import { CleaningStaff } from "../models/cleaning/CleaningStaff.model";
import { RoomDictionary } from "../models/room/RoomDictionary.model";



@Injectable()
export class RoomDataService {
    getAllRooms(): wjCore.ObservableArray {
        var data = new wjCore.ObservableArray(),
            roomDict = new RoomDictionary(),
            rooms = roomDict.getAllRooms(),
            i;

        for (i in rooms) {
            data.push(rooms[i]);
        }

        return data;
    }

    getSpecificRoom(): Room {
        var rooms = this.getAllRooms();

        return rooms[0];
    }

    getRoomNumbers(): number[] {
        return [701, 703, 704, 707, 708, 711, 712, 714, 801, 803, 804, 805, 809, 811, 812]
    }
}