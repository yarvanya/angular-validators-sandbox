import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomCreditCardApiComponent} from './custom-credit-card-api.component';

@NgModule({
  declarations: [CustomCreditCardApiComponent],
  exports: [CustomCreditCardApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomCreditCardApiModule {}
