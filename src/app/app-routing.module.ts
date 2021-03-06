import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'release-notes',
    loadChildren: () => import('./release-notes/release-notes.module').then(m => m.ReleaseNotesModule)
  },
  {
    path: 'custom-required-validator-overview',
    loadChildren: () => import('./custom-required-validator/custom-required-validator.module')
      .then(m => m.CustomRequiredValidatorModule)
  },
  {
    path: 'phone-number-validator-overview',
    loadChildren: () => import('./phone-number-validator/phone-number-validator.module')
      .then(m => m.PhoneNumberValidatorModule)
  },
  {
    path: 'custom-email-validator-overview',
    loadChildren: () => import('./custom-email-validator/custom-email-validator.module')
      .then(m => m.CustomEmailValidatorModule)
  },
  {
    path: 'number-comparator-validator-overview',
    loadChildren: () => import('./number-comparator-validator/number-comparator-validator.module')
      .then(m => m.NumberComparatorValidatorModule)
  },
  {
    path: 'number-in-range-validator-overview',
    loadChildren: () => import('./number-in-range-validator/number-in-range-validator.module')
      .then(m => m.NumberInRangeValidatorModule)
  },
  {
    path: 'date-comparator-validator-overview',
    loadChildren: () => import('./date-comparator-validator/date-comparator-validator.module')
      .then(m => m.DateComparatorValidatorModule)
  },
  {
    path: 'date-in-range-validator-overview',
    loadChildren: () => import('./date-in-range-validator/date-in-range-validator.module')
      .then(m => m.DateInRangeValidatorModule)
  },
  {
    path: 'custom-credit-card-overview',
    loadChildren: () => import('./custom-credit-card-validator/custom-credit-card-validator.module')
      .then(m => m.CustomCreditCardValidatorModule)
  },
  {
    path: 'password-validator-overview',
    loadChildren: () => import('./custom-password-validator/custom-password-validator.module')
      .then(m => m.CustomPasswordValidatorModule)
  },
  {
    path: 'post-code-validator-overview',
    loadChildren: () => import('./post-code-validator/post-code-validator.module')
      .then(m => m.PostCodeValidatorModule)
  },
  {
    path: 'number-decimal-places-validator-overview',
    loadChildren: () => import('./number-decimal-places-validator/number-decimal-places-validator.module')
      .then(m => m.NumberDecimalPlacesValidatorModule)
  },
  {
    path: 'url-validator-overview',
    loadChildren: () => import('./url-validator/url-validator.module').then(m => m.UrlValidatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
