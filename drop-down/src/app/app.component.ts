import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit() {

  }
  expand: boolean = false;

  showHide(visible: boolean) {
    visible = visible? false: true;
  }
  rows = [
    { id: 1, desc: "foo", showDetail: true },
    { id: 2, desc: "bar", showDetail: false },
  ]

  pointsTable = [{
    pos: 1,
    team: "Australia",
    matches: 10,
    won: 6,
    lost: 1,
    drawn: 3,
    NR: 0,
    points: 84,
    pct: 70,
    visible: false
  },
  {
    pos: 2,
    team: "South africa",
    matches: 6,
    won: 4,
    lost: 0,
    drawn: 0,
    NR: 0,
    points: 72,
    pct: 60.0,
    visible: false
  },
  {
    pos: 3,
    team: "Sri Lanka",
    matches: 5,
    won: 4,
    lost: 1,
    drawn: 0,
    NR: 0,
    points: 64,
    pct: 53.3,
    visible: false
  },
  {
    pos: 4,
    team: "India",
    matches: 12,
    won: 6,
    lost: 4,
    drawn: 2,
    NR: 0,
    points: 75,
    pct: 52.08,
    visible: false
  },
  {
    pos: 5,
    team: "Pakistan",
    matches: 9,
    won: 4,
    lost: 3,
    drawn: 2,
    NR: 0,
    points: 56,
    pct: 51.85,
    visible: false
  },
  {
    pos: 6,
    team: "West indies",
    matches: 9,
    won: 4,
    lost: 3,
    drawn: 2,
    NR: 0,
    points: 54,
    pct: 50.0,
    visible: false
  }]
}
