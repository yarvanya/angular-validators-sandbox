import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomRequiredValidatorComponent} from './custom-required-validator/custom-required-validator.component';
import {PhoneNumberValidatorComponent} from './phone-number-validator/phone-number-validator.component';
import {CustomEmailValidatorComponent} from './custom-email-validator/custom-email-validator.component';
import {GreaterThanNumberValidatorComponent} from './greater-than-number-validator/greater-than-number-validator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'custom-required-validator-overview',
    component: CustomRequiredValidatorComponent
  },
  {
    path: 'phone-number-validator-overview',
    component: PhoneNumberValidatorComponent
  },
  {
    path: 'custom-email-validator-overview',
    component: CustomEmailValidatorComponent
  },
  {
    path: 'greater-than-number-validator-overview',
    component: GreaterThanNumberValidatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
