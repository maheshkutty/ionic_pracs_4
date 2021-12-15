import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/tabs/aboutus',
      icon: 'information-circle'
    },
    {
      title: 'Feedback',
      url: '/feedback',
      icon: 'chatbox'
    },
    {
      title: 'Photogallery',
      url: '/photogallery',
      icon: 'camera'
    },
    {
      title: 'Timetable',
      url: '/tabs/timetable',
      icon: 'calendar-clear'
    },
    {
      title: 'Library',
      url: '/library',
      icon: 'reader'
    }
  ];
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    //SplashScreen.hide();
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
