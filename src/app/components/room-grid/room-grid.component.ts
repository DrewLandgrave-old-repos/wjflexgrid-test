import { Component, ViewChild, OnInit, Inject, AfterViewChecked } from '@angular/core';
import { WjGridModule, WjFlexGrid, } from 'wijmo/wijmo.angular2.grid'
import { RoomDataService } from "../../dataservices/room.dataservice";

import { TierDataService } from "../../dataservices/tier.dataservices";
import * as wjCore from 'wijmo/wijmo';
import * as grid from 'wijmo/wijmo.grid';
import * as Room from '../../models/room/Room.model';
import { Tier } from '../../models/room/Tier.model';


@Component({
  selector: 'room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit, AfterViewChecked {
  protected dataSvc: RoomDataService;
  protected tierDataSvc: TierDataService = new TierDataService();
  data: wjCore.CollectionView;
  selectionMode = 'Cell';
  tiers: grid.DataMap;

  constructor(
    @Inject(RoomDataService) dataSvc: RoomDataService,
  ) {
    this.dataSvc = dataSvc;
    this.data = new wjCore.CollectionView(this.dataSvc.getAllRooms());
    this.tiers = new grid.DataMap(this.tierDataSvc.getAllTiers(), "id", "type");
  }
  @ViewChild(WjFlexGrid) flex: WjFlexGrid;

  ngOnInit() {
  }

  setData(data){
    this.data = data;
  }

  ngAfterViewChecked() {
    this.highlightIrisCells();
    this.highlightCleaningCells();
  }

  refresh(){
    this.flex.refresh();
  }

  highlightCleaningCells(){
    let cells = document.querySelectorAll('.cleaningColumn'),
      length = cells.length,
      background,
      i, cell;

    if (length) {
      for (i = 0; i < length; i++) {
        cell = cells[i];
        background = '#38761d';

        if (cell.textContent.trim() === 'Healing' || cell.textContent.trim() === 'SMMs') {
          background = '#000000';
          cell.style.color = 'grey';
        }
        cell.style.backgroundColor = background;
      }
    }
  }

  highlightIrisCells() {
    let cells = document.querySelectorAll('.irisReadyColumn'),
      length = cells.length,
      background,
      i, cell;

    if (length) {
      for (i = 0; i < length; i++) {
        cell = cells[i];
        background = '#00ff00';

        if (cell.textContent.trim() !== 'Yes') {
          background = '#cc0000';
        }
        cell.style.backgroundColor = background;
      }
    }
  }

  irisReadyColor(green: boolean) {
    if (green) {
      console.log(this);
    }
  }

}
