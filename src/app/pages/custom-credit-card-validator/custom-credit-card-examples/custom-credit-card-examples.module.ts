import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomCreditCardExamplesComponent} from './custom-credit-card-examples.component';

@NgModule({
  declarations: [CustomCreditCardExamplesComponent],
  exports: [CustomCreditCardExamplesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomCreditCardExamplesModule {}
