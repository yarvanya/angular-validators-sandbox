import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomCreditCardValidatorComponent} from './custom-credit-card-validator.component';
import {CustomCreditCardExamplesModule} from './custom-credit-card-examples/custom-credit-card-examples.module';
import {CustomCreditCardOverviewModule} from './custom-credit-card-overview/custom-credit-card-overview.module';
import {CustomCreditCardApiModule} from './custom-credit-card-api/custom-credit-card-api.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomCreditCardValidatorComponent
  }
];

@NgModule({
  declarations: [CustomCreditCardValidatorComponent],
  exports: [CustomCreditCardValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CustomCreditCardExamplesModule,
    CustomCreditCardOverviewModule,
    CustomCreditCardApiModule
  ]
})
export class CustomCreditCardValidatorModule {}
