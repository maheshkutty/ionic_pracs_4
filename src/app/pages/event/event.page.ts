import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  type: String;

  eventData = {
    "upcoming":[
      { 
        name:"A guest session on Entrepreneurship",
        date:"2021-10-30",
        mode:"Online",
        speaker:["Mr. Udit Goenka"],
        organizer:"ACE Committee",
        eventImg:"/assets/event3.jpeg"
      },
      {
        name:"Rock_In_Color",
        date:"2021-10-21",
        mode:"Online",

        speaker:null,
        organizer:"ACE Committee",
        eventImg:null,
        desc:"It's simple! All you have to do is click a selfie wearing a dress that matches the color code of that day. There will be 9 different color codes for 9 days starting from today. (The Ace will provide you the color code of the day) "
      },
      {
        name:"A Webinar on Competitive Programming ",
        date:"2021-10-02",
        mode:"Online",
        speaker:["Mahipal Purohit","Bhavya Shah","Sahil Marwaha"],
        organizer:"Coding Club",
        eventImg:"/assets/Coding_club1.jpg",
        desc:"Competitive Coding Guildelines"
      },
      {
        name:"A hands-on session on Git/Github by Mr. Jaspreet Singh",
        date:"2021-09-19",
        mode:"Online",
        speaker:["Mr. Jaspreet Singh"],
        organizer:"ACE Committee",
        eventImg:"/assets/GitEvent.jpg"
      },
    ],
    "previous":[

    ]
  }

  constructor() {}

  simpleNotification(){
  
  }

  ngOnInit() {
    this.type = 'upcoming';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
