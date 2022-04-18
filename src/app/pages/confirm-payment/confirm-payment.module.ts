import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPaymentPageRoutingModule } from './confirm-payment-routing.module';

import { ConfirmPaymentPage } from './confirm-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPaymentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConfirmPaymentPage]
})
export class ConfirmPaymentPageModule {}
