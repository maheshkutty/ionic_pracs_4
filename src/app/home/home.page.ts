import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore, { Autoplay, Zoom } from 'swiper';

SwiperCore.use([IonicSwiper, Autoplay, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  announcement = [
    {
      ref: "https://www.spit.ac.in/2021/10/29/pre-admission-interactive-session/",
      title: " Pre-admission Interactive Session"
    }, {
      ref: "https://www.spit.ac.in/2021/10/29/two-weeks-online-credit-course-on-research-and-publication-ethics-for-ph-d-students/"
      , title: " Two weeks online credit course on Research and Publication Ethics for Ph.D. Students"
    }, {
      ref: "https://www.spit.ac.in/wp-content/uploads/2021/10/B-tech-sem-VII-IT-Aug-2021-re-exam-Gazette.pdf",
      title: "Result August 2021 Re-examination"
    },
    {
      ref: "https://www.spit.ac.in/2021/10/07/counseling-webinar-for-12th-standard-students-on-placements-internship-entrepreneurship/"
      , title: "Counseling webinar for prospective students on Placements, Internship & amp; Entrepreneurship"
    },
    {
      ref: "https://www.spit.ac.in/wp-content/uploads/2021/08/ESE-time-table-repeated-regular-21st-August-21.pdf",
      title: "ESE Examination Timetable"
    },
    {
      ref: "https://conference.spit.ac.in/",
      title: "International Conference on Communication, Information & amp; Computing Technology, 25 - 27th June, 2021"
    },
    {
      ref: "https://www.spit.ac.in/2021/04/28/first-year-even-semester-ii-re-exam-gazettes-november-2020-2018-19-batch/"
      , title: "First Year Even Semester II Re - exam Gazettes November 2020(2018 - 19 Batch)"
    },
    {
      ref: "https://www.spit.ac.in/2021/04/28/first-year-odd-semester-i-re-exam-gazettes-november-2020-2019-20-batch/"
      , title: "First Year Odd Semester I Re - exam Gazettes November 2020(2019 - 20 Batch)"
    },
    {
      ref: "https://www.spit.ac.in/2021/04/28/second-year-odd-semester-iii-re-exam-gazettes-november-2020-2019-20-batch/"
      , title: "Second Year Odd Semester III Re - exam Gazettes November 2020(2019 - 20 Batch)"
    },
    {
      ref: "https://www.spit.ac.in/2021/04/25/final-odd-semester-result-december-2020/"
      , title: "Final Odd Semester Result December 2020"
    },
    {
      ref: "https://www.spit.ac.in/wp-content/uploads/2021/06/Extension-Advt-Ph.D-20-21.pdf",
      title: "Ph.D.Programme admission date extended till 19th June 2021"
    }
  ]

  constructor(private menu: MenuController) { }
  introImg = ["https://www.spit.ac.in/wp-content/uploads/2021/08/artwork-Web-banner-2021-22-opt-C-e1629187129457.jpg", "https://www.spit.ac.in/wp-content/uploads/2021/08/artwork-Web-banner-2021-22-opt-D-e1629187028798.jpg"]

  _OpenSideNav() {
    this.menu.enable(true);
    this.menu.open();
  }
}
