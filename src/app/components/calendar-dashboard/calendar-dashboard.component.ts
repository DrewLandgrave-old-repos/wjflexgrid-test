import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ColorDict } from "../../models/colors/ColorDict.model";


@Component({
  selector: 'app-calendar-dashboard',
  templateUrl: './calendar-dashboard.component.html',
  styleUrls: ['./calendar-dashboard.component.css']
})
export class CalendarDashboardComponent implements OnInit, AfterViewChecked {
 paint: boolean = true;
  constructor() { }

  ngOnInit() {
  }

    ngAfterViewChecked() {
    this.setBackgroundColor();
  }

  setBackgroundColor() {

    let cells = document.querySelectorAll('td:not(.wj-state-selected)'),
      length = cells.length,
      colors = new ColorDict(),
      i, cell, child;

    if (length && this.paint) {
      for (i = 0; i < length; i++) {
        cell = cells[i];
        child = cell.querySelector('span');
        if (cell.classList.contains('wj-state-selected')) {
          cell.style.backgroundColor = "#0085c7"
        }

        else if (Math.random() >= 0.5) {
          cell.style.backgroundColor = colors.getColor(Math.floor(Math.random() * 16) + 1);
        }
        else {
          cell.style.backgroundColor = "#fff";
        }
        let headers = document.querySelectorAll('.wj-header > td');
        for (let k = 0; k < headers.length; k++){
          let t : any = headers[k];
          t.style.backgroundColor = "#EAEAEA";
          
        }

        this.paint = false;

      }
    }

  }

}
