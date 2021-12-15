import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QbankPageRoutingModule } from './qbank-routing.module';

import { QbankPage } from './qbank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QbankPageRoutingModule
  ],
  declarations: [QbankPage]
})
export class QbankPageModule {}
