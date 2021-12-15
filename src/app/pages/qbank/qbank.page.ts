import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qbank',
  templateUrl: './qbank.page.html',
  styleUrls: ['./qbank.page.scss'],
})
export class QbankPage implements OnInit {

  qbankData = {
    engg: [{ class: "FE Sem I-II ", src: "https://library.spit.ac.in/qpfe.html" }, { class: "SE Sem III", src: "https://library.spit.ac.in/qpse1.html" }, { class: "SE Sem IV", src: "https://library.spit.ac.in/qpse2.html" }, { class: "TE SEM V", src: "https://library.spit.ac.in/qpte1.html" }, { class: "TE Sem VI", src: "https://library.spit.ac.in/qpte2.html" }],
    pg: [{ class: "ME electronic paper", src: "https://library.spit.ac.in/qpme.html" }, { class: "ME Extc paper", src: "https://library.spit.ac.in/qpme-extc.html" }, { class: "ME computer science", src: "https://library.spit.ac.in/qpme-com.html" }],
    mca: [{ class: "All MCA paper", src: "https://library.spit.ac.in/qpmca.html" }]
  }

  constructor() { }

  ngOnInit() {
  }

}
