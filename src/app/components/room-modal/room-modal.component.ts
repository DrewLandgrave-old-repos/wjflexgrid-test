import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ModalDirective } from "ng2-bootstrap";
import { Room } from "../../models/room/Room.model";
import { WjGridModule, WjFlexGrid, } from 'wijmo/wijmo.angular2.grid'
import * as wjCore from "wijmo/wijmo";
import { CleaningStaff } from "../../models/cleaning/CleaningStaff.model";
import { RoomGridComponent } from "../room-grid/room-grid.component";




@Component({
  selector: 'room-modal',
  templateUrl: './room-modal.component.html',
  styleUrls: ['./room-modal.component.css']
})
export class RoomModalComponent implements OnInit, AfterViewChecked {

  constructor() {

  }

  ngOnInit() {
  }

  setData(room) {
    this.roomGrid.setData([room]);
  }

  @ViewChild('roomModal') modal: ModalDirective;
  @ViewChild('roomGrid') roomGrid: RoomGridComponent;

  modalShow() {
    this.modal.show();
    setTimeout(() => {
      this.roomGrid.refresh();
    }, 200)
  }

  modalHide() {
    this.modal.hide();
  }

  ngAfterViewChecked() {
    this.highlightIrisCells();
    this.highlightCleaningCells();
  }

  highlightCleaningCells() {
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
}
