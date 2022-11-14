import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log(this.pointsTable);
    // this.pointsTable.map(p => {
  
    // })
  }

  pointsTable = [{
    pos: 1,
    team: "SriLanka(Q)",
    matches: 10,
    won: 6,
    lost: 1,
    drawn: 3,
    NR: 0,
    points: 84,
    pct: 70,
    visible: false,
    dropDown: [
      { oppo: "Namibia", description: "1st Match, Group A", date: "16 Oct", result: "Loss by 55 runs" },
      { oppo: "United Arab Emirates", description: "6th Match, Group A", date: "18 Oct", result: "Won by 79 runs" },
      { oppo: "Netherlands", description: "9th Match, Group A", date: "20 Oct", result: "Won by 16 runs" }
    ]
  },
  {
    pos: 2,
    team: "Netherlands(Q)",
    matches: 6,
    won: 4,
    lost: 0,
    drawn: 0,
    NR: 0,
    points: 72,
    pct: 60.0,
    visible: false,
    dropDown: [
      { oppo: "United Arab Emirate", description: "2st Match, Group A", date: "16 Oct", result: "Won by 3 wkts" },
      { oppo: "Namibia", description: "5th Match, Group A", date: "18 Oct", result: "Won by 5 wkts" },
      { oppo: "SriLanka", description: "9th Match, Group A", date: "20 Oct", result: "Won by 16 runs" }
    ]
  },
  {
    pos: 3,
    team: "Namibia(E)",
    matches: 5,
    won: 4,
    lost: 1,
    drawn: 0,
    NR: 0,
    points: 64,
    pct: 53.3,
    visible: false,
    dropDown: [
      { oppo: "SriLanka", description: "1st Match, Group A", date: "16 Oct", result: "Won by 55 runs" },
      { oppo: "Netherlands", description: "5th Match, Group A", date: "18 Oct", result: "Loss by 5 wkts" },
      { oppo: "United Arab Emirate", description: "10th Match, Group A", date: "20 Oct", result: "Loss by 7 runs" }
    ]
  },
  {
    pos: 4,
    team: "United Arab Emirates(E)",
    matches: 12,
    won: 6,
    lost: 4,
    drawn: 2,
    NR: 0,
    points: 75,
    pct: 52.08,
    visible: false,
    dropDown: [
      { oppo: "Netherlands", description: "2st Match, Group A", date: "16 Oct", result: "Loss by 3 wkts" },
      { oppo: "SriLanka", description: "6th Match, Group A", date: "18 Oct", result: "Loss by 79 runs" },
      { oppo: "Namibia", description: "10th Match, Group A", date: "20 Oct", result: "Won by 7 runs" },
      // { oppo: "United Arab Emirate", description: "10th Match, Group A", date: "20 Oct", result: "Loss by 7 runs" }
    ]
  }]
  expand: boolean = false;

  arrow(i: number) {
    if (this.pointsTable[i].visible)
      this.pointsTable[i].visible = false;
    else
      this.pointsTable[i].visible = true;
  }
  
}

