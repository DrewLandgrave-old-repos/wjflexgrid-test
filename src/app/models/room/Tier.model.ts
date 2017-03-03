export class Tier {
    constructor(private id: number, private type: string, private squareFeet: number) { }

    getType(): string {
        return this.type;
    }

    getSquareFeet(): number {
        return this.squareFeet;
    }
}