import { Person } from "./Person.model";


export class PersonDictionary {
    private persons: {} = {};

    constructor() {

        this.addPerson(1, new Person(1, "Drew", "Landgrave", '555-555-5551', 'test1@test.com'));
        this.addPerson(2, new Person(2, "John", "Landgrave", '555-555-5552', 'test2@test.com'));
        this.addPerson(3, new Person(3, "Ben", "Landgrave", '555-555-5553', 'test3@test.com'));
        this.addPerson(4, new Person(4, "Kevin", "Landgrave", '555-555-5554', 'test4@test.com'));
        this.addPerson(5, new Person(5, "Barbara", "Landgrave", '555-555-5555', 'test5@test.com'));
        this.addPerson(6, new Person(6, "Eevee", "Landgrave", '555-555-5556', 'test6@test.com'));
        this.addPerson(7, new Person(7, "Mary", "Landgrave", '555-555-5557', 'test7@test.com'));
        this.addPerson(8, new Person(8, "Makenna", "Landgrave", '555-555-5558', 'test8@test.com'));
        this.addPerson(9, new Person(9, "Chris", "Thurman", '555-555-5559', 'test9@test.com'));
        this.addPerson(10, new Person(10, "Kristen", "Thurman", '555-555-5510', 'test10@test.com'));
        this.addPerson(11, new Person(11, "Addison", "Thurman", '555-555-5511', 'test11@test.com'));
        this.addPerson(12, new Person(12, "Jacob", "Thurman", '555-555-5512', 'test12@test.com'));
        this.addPerson(13, new Person(13, "Matt", "Thurman", '555-555-5513', 'test13@test.com'));
        this.addPerson(14, new Person(14, "Kayla", "Thurman", '555-555-5514', 'test14@test.com'));
        this.addPerson(15, new Person(15, "Jeffrey", "Landgrave", '555-555-5515', 'test15@test.com'));
        this.addPerson(16, new Person(16, "Katie", "Landgrave", '555-555-5516', 'test16@test.com'));
        this.addPerson(17, new Person(17, "John", "Doe", '555-555-5516', 'test16@test.com'));
        this.addPerson(18, new Person(18, "Juliann", "Pritts", "555-555-5555", "test@test.com"));
        this.addPerson(19, new Person(19, "Gwen", "Litherland", "555-555-5555", "test@test.com"));
        this.addPerson(20, new Person(20, "Lauretta", "Kimberly", "555-555-5555", "test@test.com"));
        this.addPerson(21, new Person(21, "Leatha", "Marquez", "555-555-5555", "test@test.com"));
        this.addPerson(22, new Person(22, "Taunya", "Boynton", "555-555-5555", "test@test.com"));
        this.addPerson(23, new Person(23, "Chun", "Banaszak", "555-555-5555", "test@test.com"));
        this.addPerson(24, new Person(24, "Quinn", "Vannostrand", "555-555-5555", "test@test.com"));
        this.addPerson(25, new Person(25, "Alease", "Monsen", "555-555-5555", "test@test.com"));
        this.addPerson(26, new Person(26, "Kali", "Chaffin", "555-555-5555", "test@test.com"));
        this.addPerson(27, new Person(27, "Tamara", "Mor", "555-555-5555", "test@test.com"));
        this.addPerson(28, new Person(28, "Aura", "Przybyla", "555-555-5555", "test@test.com"));
        this.addPerson(29, new Person(29, "Jone", "Magar", "555-555-5555", "test@test.com"));
        this.addPerson(30, new Person(30, "Tammi", "Shinkle", "555-555-5555", "test@test.com"));
        this.addPerson(31, new Person(31, "Regenia", "Kapoor", "555-555-5555", "test@test.com"));
        this.addPerson(32, new Person(32, "Nelson", "Gillette", "555-555-5555", "test@test.com"));
        this.addPerson(33, new Person(33, "Rachael", "Puskar", "555-555-5555", "test@test.com"));
        this.addPerson(34, new Person(34, "Iraida", "Holloman", "555-555-5555", "test@test.com"));
        this.addPerson(35, new Person(35, "Jamie", "Sidler", "555-555-5555", "test@test.com"));
        this.addPerson(36, new Person(36, "Marci", "Drew", "555-555-5555", "test@test.com"));
        this.addPerson(37, new Person(37, "Johnson", "Batiste", "555-555-5555", "test@test.com"));
        this.addPerson(38, new Person(38, "Ivan", "Huebner", "555-555-5555", "test@test.com"));
        this.addPerson(39, new Person(39, "Lela", "Colter", "555-555-5555", "test@test.com"));
        this.addPerson(40, new Person(40, "Lady", "Revel", "555-555-5555", "test@test.com"));
        this.addPerson(41, new Person(41, "Lucy", "Myhre", "555-555-5555", "test@test.com"));
        this.addPerson(42, new Person(42, "Suzy", "Bleakley", "555-555-5555", "test@test.com"));
        this.addPerson(43, new Person(43, "Paulene", "Hinze", "555-555-5555", "test@test.com"));
        this.addPerson(44, new Person(44, "Keenan", "Cornelison", "555-555-5555", "test@test.com"));
        this.addPerson(45, new Person(45, "Maragaret", "Sears", "555-555-5555", "test@test.com"));
        this.addPerson(46, new Person(46, "Gilberto", "Connolly", "555-555-5555", "test@test.com"));
        this.addPerson(47, new Person(47, "Ardelia", "Cuevas", "555-555-5555", "test@test.com"));
        this.addPerson(48, new Person(48, "Aron", "Shead", "555-555-5555", "test@test.com"));
        this.addPerson(49, new Person(49, "Buck", "Lomas", "555-555-5555", "test@test.com"));
        this.addPerson(50, new Person(50, "Wendi", "Marino", "555-555-5555", "test@test.com"));
        this.addPerson(51, new Person(51, "Lieselotte", "Coolidge", "555-555-5555", "test@test.com"));
        this.addPerson(52, new Person(52, "Pamelia", "Deak", "555-555-5555", "test@test.com"));
        this.addPerson(53, new Person(53, "Kathyrn", "Mcgavock", "555-555-5555", "test@test.com"));
        this.addPerson(54, new Person(54, "Kermit", "Hilliard", "555-555-5555", "test@test.com"));
        this.addPerson(55, new Person(55, "Nikki", "Rodas", "555-555-5555", "test@test.com"));
        this.addPerson(56, new Person(56, "Carlo", "Tusa", "555-555-5555", "test@test.com"));
        this.addPerson(57, new Person(57, "Isadora", "Thrift", "555-555-5555", "test@test.com"));
        this.addPerson(58, new Person(58, "Francesca", "Patten", "555-555-5555", "test@test.com"));
        this.addPerson(59, new Person(59, "Un", "Slane", "555-555-5555", "test@test.com"));
        this.addPerson(60, new Person(60, "Joanie", "Lile", "555-555-5555", "test@test.com"));
        this.addPerson(61, new Person(61, "Ellamae", "Kesner", "555-555-5555", "test@test.com"));
        this.addPerson(62, new Person(62, "Emmy", "Leadbetter", "555-555-5555", "test@test.com"));
        this.addPerson(63, new Person(63, "Imelda", "Tylor", "555-555-5555", "test@test.com"));
        this.addPerson(64, new Person(64, "Vennie", "Guidroz", "555-555-5555", "test@test.com"));
        this.addPerson(65, new Person(65, "Shea", "Pegram", "555-555-5555", "test@test.com"));
        this.addPerson(66, new Person(66, "Suk", "Boller", "555-555-5555", "test@test.com"));
        this.addPerson(67, new Person(67, "Adalberto", "Coday", "555-555-5555", "test@test.com"));
    }

    addPerson(id: number, person: Person) {
        this.persons[id] = person;
    }
    getPerson(id: number) {
        return this.persons[id];
    }
    getAllPersons(): {} {
        return this.persons;
    }

}