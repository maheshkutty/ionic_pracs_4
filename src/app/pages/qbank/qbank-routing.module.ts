import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QbankPage } from './qbank.page';

const routes: Routes = [
  {
    path: '',
    component: QbankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QbankPageRoutingModule {}
