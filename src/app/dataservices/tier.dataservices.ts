import { Injectable } from "@angular/core";
import * as wjCore from "wijmo/wijmo";
import { Room } from "../models/room/Room.model";
import { CleaningStaff } from "../models/cleaning/CleaningStaff.model";
import { Tier } from "../models/room/Tier.model";

@Injectable()
export class TierDataService {
    tiers: {} = {
        'BIG': new Tier(1, 'BIG', 900),
        'BIGHCA': new Tier(2, 'BIGHCA', 900),
        'BIGGER': new Tier(3, 'BIGGER', 1200),
        'BIGGEST': new Tier(4, 'BIGGEST', 1400),
        'GIANT': new Tier(5, 'GIANT', 1700),
        'GIANTPLUS': new Tier(6, 'GIANTPLUS', 1900)
    };

    getAllTiers(): Tier[] {
        let tierArr = [];
        for (let i in this.tiers) {
            tierArr.push(this.tiers[i]);
        }
        return tierArr;

    }

    getTier(tier: string): Tier {
        return this.tiers[tier];
    }
}