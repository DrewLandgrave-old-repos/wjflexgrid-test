import { Component, OnInit } from '@angular/core';
import { RoomDictionary } from "../../models/room/RoomDictionary.model";
import { PersonDictionary } from "../../models/person/PersonDictionary.model";


@Component({
  selector: 'filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.css']
})
export class FilterRowComponent implements OnInit {
  rooms: string[];
  persons: string[];
  allPersons: {};
  bookingFilter: string;
  roomFilter: string;
  personFilter: string;

  roomDict: RoomDictionary = new RoomDictionary();
  personDict: PersonDictionary = new PersonDictionary();
  constructor() {
    this.rooms = Object.keys(this.roomDict.getAllRooms());
    this.persons = Object.keys(this.personDict.getAllPersons());
    this.allPersons = this.personDict.getAllPersons();
   }

  ngOnInit() {
  }

}
