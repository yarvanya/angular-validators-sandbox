import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomRequiredValidatorComponent} from './custom-required-validator/custom-required-validator.component';
import {PhoneNumberValidatorComponent} from './phone-number-validator/phone-number-validator.component';
import {CustomEmailValidatorComponent} from './custom-email-validator/custom-email-validator.component';
import {NumberComparatorValidatorComponent} from './number-comparator-validator/number-comparator-validator.component';
import {CustomCreditCardValidatorComponent} from './custom-credit-card-validator/custom-credit-card-validator.component';

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
    path: 'number-comparator-validator-overview',
    component: NumberComparatorValidatorComponent
  },
  {
    path: 'custom-credit-card-overview',
    component: CustomCreditCardValidatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}