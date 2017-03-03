import { Injectable } from "@angular/core";
import * as wjCore from "wijmo/wijmo";
import { Person } from "../models/person/Person.model";
import { PersonDictionary } from "../models/person/PersonDictionary.model";



@Injectable()
export class PersonDataService {
    dict: PersonDictionary = new PersonDictionary();
    getAllPersons(): {} {
        return this.dict.getAllPersons();
    }

    getSpecificPerson(id): Person {
        return this.dict.getPerson(id);
    }
}