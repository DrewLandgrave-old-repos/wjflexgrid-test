export class Person {
    private fullName: string;
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string,
        private phone: string,
        private email: string,
    ) {
        this.fullName = firstName + " " + lastName;
    }

    public getFullName(): string {
        return this.fullName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getId(): number{
        return this.id;
    }
}