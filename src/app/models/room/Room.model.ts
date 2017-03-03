import { CleaningStaff } from "../cleaning/CleaningStaff.model";
import { TierDataService } from "../../dataservices/tier.dataservices";
import { Inject } from "@angular/core";

export class Room {
    private totalOccupancy: number;
    private squareFeet: number;
    protected tierSvc: TierDataService = new TierDataService();

    constructor(
        private roomNumber: number,
        private ikeaBeds: number,
        private zBeds: number,
        private maxExtra: number,
        private tier: string,
        private irisReady: boolean,
        private cleaningStaff: CleaningStaff | null,
    ) {
        this.totalOccupancy = this.ikeaBeds + this.zBeds + this.maxExtra;
        this.squareFeet = this.tierSvc.getTier(this.tier).getSquareFeet();
    }

    getRoomNumber(): number {
        return this.roomNumber;
    }

    getIkeaBeds(): number {
        return this.ikeaBeds;
    }
    getZBeds(): number {
        return this.zBeds;
    }
    getMaxExtra(): number {
        return this.maxExtra;
    }
    getTier(): string {
        return this.tier;
    }
    isIrisReady(): boolean {
        return this.irisReady
    }
    getCleaningStaff(): CleaningStaff {
        return this.cleaningStaff
    }

    getTotalOccupancy(): number {
        return this.totalOccupancy;
    }

    getSquareFeet(): number {
        return this.squareFeet;
    }


}