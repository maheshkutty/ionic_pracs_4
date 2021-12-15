import { Component, OnInit } from '@angular/core';
import timetable from "./timetable.json";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {
  type:String = 'fymca';

  days = [{
    value: 1,
    title: "Monday",
    show: "block"
  },
  {
    value: 2,
    title: "Tuesday",
    show: "none"
  },
  {
    value: 3,
    title: "Wendsday",
    show: "none"
  },
  {
    value: 4,
    title: "Thursday",
    show: "none"
  },
  {
    value: 5,
    title: "Friday",
    show: "none"
  }
  ]
  todaySchedule : any;
  d: Date;
  todaydate = ""
  daysValue:number
  selectDaysNum: number

  constructor() { 
    this.d = new Date();
    this.todaydate = this.d.toISOString();
    this.daysValue = this.d.getUTCDay();
    console.log("this.daysValue",this.daysValue)
    this.selectDaysNum = this.daysValue
    this.todaySchedule = timetable[this.daysValue];
  }

  ngOnInit() {
    //this.type = 'fymca';
  }

  onDaysChange(event) {
    console.log(event.target.value)
    this.selectDaysNum = event.target.value
    this.todaySchedule = timetable[this.selectDaysNum.toString()];
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
