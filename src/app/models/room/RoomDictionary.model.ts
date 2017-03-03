import { Room } from "./Room.model";
import { CleaningStaff } from "../cleaning/CleaningStaff.model";


export class RoomDictionary {
    private rooms: {} = {};

    constructor() {
        var maria = new CleaningStaff('Maria'),
            juana = new CleaningStaff('Juana'),
            aluska = new CleaningStaff('Aluska'),
            healing = new CleaningStaff('Healing'),
            smms = new CleaningStaff('SMMs');

        this.addRoom(701, new Room(701, 3, 7, 4, 'BIGGEST', true, maria));
        this.addRoom(703, new Room(703, 0, 8, 0, 'BIGGER', true, maria));
        this.addRoom(704, new Room(704, 3, 7, 4, 'BIGGEST', true, maria));
        this.addRoom(707, new Room(707, 4, 9, 6, 'GIANTPLUS', true, juana));
        this.addRoom(708, new Room(708, 0, 6, 0, 'BIGHCA', true, juana));
        this.addRoom(711, new Room(711, 0, 6, 0, 'BIG', true, maria));
        this.addRoom(712, new Room(712, 0, 6, 0, 'BIG', true, healing));
        this.addRoom(714, new Room(714, 3, 12, 4, 'GIANTPLUS', true, aluska));
        this.addRoom(801, new Room(801, 3, 7, 4, 'BIGGEST', true, juana));
        this.addRoom(803, new Room(803, 0, 8, 0, 'BIGGER', true, aluska));
        this.addRoom(804, new Room(804, 3, 7, 4, 'BIGGEST', true, aluska));
        this.addRoom(805, new Room(805, 1, 5, 0, 'BIG', false, maria));
        this.addRoom(809, new Room(809, 0, 6, 0, 'BIG', true, maria));
        this.addRoom(811, new Room(811, 0, 6, 0, 'BIG', true, smms));
        this.addRoom(812, new Room(812, 6, 5, 5, 'GIANT', true, aluska));
    }

    addRoom(roomNumber: number, room: Room) {
        this.rooms[roomNumber] = room;
    }
    getRoom(roomNumber: number) {
        return this.rooms[roomNumber];
    }
    getAllRooms(): {} {
        return this.rooms;
    }

}