import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public router: Router) { }

  ngOnInit() {
  }

  async handleButtonClick() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Stream',
      buttons: [
        {
          text: 'Computer Engg', role: 'destructive', icon:"reader",  handler: () => {
            this.router.navigate(["syllabus", "comps"])
          }
        },
        {
          text: 'Electronic & Tele Engg', icon:"reader", handler: () => {
            this.router.navigate(["syllabus", "extc"])
          }
        },
        {
          text: 'Electronic Engg', icon:"reader", handler: () => {
            this.router.navigate(["syllabus", "elect"])
          }
        },
        {
          text: 'MCA', icon:"reader", handler: () => {
            this.router.navigate(["syllabus", "mca"])
          }
        },
        { text: 'Cancel', role: 'cancel', icon: 'close' }
      ]
    });

    await actionSheet.present();
  }
}
