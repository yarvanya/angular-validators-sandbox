import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {PhoneNumberValidatorComponent} from './phone-number-validator.component';
import {PhoneNumberOverviewModule} from './phone-number-overview/phone-number-overview.module';
import {PhoneNumberExamplesModule} from './phone-number-examples/phone-number-examples.module';
import {PhoneNumberApiModule} from './phone-number-api/phone-number-api.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PhoneNumberValidatorComponent
  }
];

@NgModule({
  declarations: [PhoneNumberValidatorComponent],
  exports: [PhoneNumberValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    PhoneNumberOverviewModule,
    PhoneNumberExamplesModule,
    PhoneNumberApiModule
  ]
})
export class PhoneNumberValidatorModule {}
