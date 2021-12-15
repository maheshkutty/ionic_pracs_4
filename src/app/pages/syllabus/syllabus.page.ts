import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {

  name: String = "comps";
  syllabusData = {
    comps:{
      ug:[{title:"Computer Enggineering Scheme", year: "2021-25", src:"https://library.spit.ac.in/AS2021-22/CE-2021-25.pdf", mode:"Online"},{title:"Computer Enggineering Scheme", year: "2021-22", src:"https://library.spit.ac.in/AS2021-22/COMP-2020-24.pdf", mode:"Online"}],
      pg:[{title:"M.Tech. Computer Scheme", year: "2020-21", src:"https://library.spit.ac.in/AS2020-21/mtech-com-scheme-2020.pdf", mode:"Online"}],
      name:"Computer Enggineering Syllabus",
    },
    it:{
      ug:[{title:"Information Technology Enggineering Scheme", year: "2020-24", src:"https://library.spit.ac.in/AS2021-22/IT-2020-24.pdf", mode:"Online"}],
      pg:null,
      name:"Information Technology Enggineering Syllabus",
    },
    elect:{
      ug:[{title:"Electronic Enggineering Scheme", year: "2020-24", src:"https://library.spit.ac.in/AS2021-22/ETRX-2020-24.pdf", mode:"Online"}],
      pg:null,
      name:"Electronic Enggineering Syllabus",
    },
    extc:{
      ug:[{title:"Electronic and Telecommunication Enggineering Scheme", year: "2021-25", src:"https://library.spit.ac.in/AS2021-22/EXTC-2021-25.pdf", mode:"Online"}],
      pg:[{title:"M.Tech. Computer Scheme", year: "", src:"https://library.spit.ac.in/AS2021-22/EXTC-2021-25.pdf"}],
      name:"Electronic and Telecommunication Syllabus",
    },
    mca:{
      ug: null,
      pg:[{title:"MCA Scheme For Semester 1 and 2", year: "2021-22", src:"https://library.spit.ac.in/AS2021-22/mca-1-2-2021-22.pdf", mode:"Online"}, {title:"MCA Scheme For Semester 3 and 4", year: "2021-22", src:"https://library.spit.ac.in/AS2021-22/mca-1-2-2021-22.pdf", mode:"On-Campus"}],
      name:"Master of Computer Application Syllabus",
    }
  }
  constructor(private activatedRoute :ActivatedRoute ) { 

  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    console.log(this.name)
  }

}
