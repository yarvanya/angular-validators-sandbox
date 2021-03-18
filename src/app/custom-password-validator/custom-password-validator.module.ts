import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPasswordValidatorComponent} from './custom-password-validator.component';
import {CustomPasswordOverviewModule} from './custom-password-overview/custom-password-overview.module';
import {CustomPasswordApiModule} from './custom-password-api/custom-password-api.module';
import {CustomPasswordExamplesModule} from './custom-password-examples/custom-password-examples.module';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomPasswordValidatorComponent
  }
];

@NgModule({
  declarations: [CustomPasswordValidatorComponent],
  exports: [CustomPasswordValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CustomPasswordApiModule,
    CustomPasswordExamplesModule,
    CustomPasswordOverviewModule,
  ]
})
export class CustomPasswordValidatorModule {}
