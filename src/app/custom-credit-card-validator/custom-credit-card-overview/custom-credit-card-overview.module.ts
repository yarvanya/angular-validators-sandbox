import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomCreditCardOverviewComponent} from './custom-credit-card-overview.component';

@NgModule({
  declarations: [CustomCreditCardOverviewComponent],
  exports: [CustomCreditCardOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomCreditCardOverviewModule {}
