import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'event',
        loadChildren: () => import('../pages/event/event.module').then(m => m.EventPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'aboutus',
        loadChildren: () => import('../pages/aboutus/aboutus.module').then(m => m.AboutusPageModule)
      },
      {
        path:'timetable',
        loadChildren: () => import('../pages/timetable/timetable.module').then(m => m.TimetablePageModule)
      },
      {
        path:'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
