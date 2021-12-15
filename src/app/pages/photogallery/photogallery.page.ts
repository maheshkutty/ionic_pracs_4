import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Zoom } from 'swiper';
import { IonicSwiper } from '@ionic/angular';

SwiperCore.use([IonicSwiper, Autoplay, Zoom]);


@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.page.html',
  styleUrls: ['./photogallery.page.scss'],
})
export class PhotogalleryPage implements OnInit {
  fabListStyle = {
    social: 'block',
    cultural: 'none',
    alumi: 'none'
  }

  introPhotoList = [
    {
      src: "http://mca.spit.ac.in/images/banner/banner1.jpg"
    },
    {
      src: "http://mca.spit.ac.in/images/banner/banner2.jpg"
    },
    {
      src: "http://mca.spit.ac.in/images/banner/july2019TYMCA.jpg"
    },
    {
      src: "http://mca.spit.ac.in/images/banner/banner3.jpg"
    },
    {
      src: "http://mca.spit.ac.in/images/banner/spit-min.jpg"
    },
    {
      src: "http://mca.spit.ac.in/images/banner/staff-min.jpg"
    },
  ]

  secPhotos = {
    social: [{
      src: "http://mca.spit.ac.in/images/Social/1.jpg"
    },{
      src:"http://mca.spit.ac.in/images/Social/3.jpg"
    },{
      src:"http://mca.spit.ac.in/images/Social/6.jpg"
    }],
    cultural: [{
      src: "http://mca.spit.ac.in/images/cultural/Pooja3.jpg"
    },{
      src:"http://mca.spit.ac.in/images/cultural/Pooja2.jpg"
    },{
      src:"http://mca.spit.ac.in/images/cultural/eventsPic2.jpg"
    }],
    alumi: [{
      src: "http://mca.spit.ac.in/images/Alumni/1.jpg"
    },{
      src:"http://mca.spit.ac.in/images/Alumni/2.jpg"
    }]
  }

  constructor() { }

  ngOnInit() {
  }

  onChangeFab(chk) {
    console.log("fab Called:" + chk)
    for (let item in this.fabListStyle) {
      if (chk === item)
        this.fabListStyle[item] = 'block';
      else
        this.fabListStyle[item] = 'none';
    }
  }
}
