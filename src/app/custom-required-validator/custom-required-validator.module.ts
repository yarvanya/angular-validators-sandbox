import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomRequiredValidatorComponent} from './custom-required-validator.component';
import {CustomPasswordValidatorModule} from './custom-required-overview/custom-required-overview.module';
import {CustomRequiredApiModule} from './custom-required-api/custom-required-api.module';
import {CustomRequiredExamplesModule} from './custom-required-examples/custom-required-examples.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomRequiredValidatorComponent
  }
];

@NgModule({
  declarations: [CustomRequiredValidatorComponent],
  exports: [CustomRequiredValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CustomPasswordValidatorModule,
    CustomRequiredApiModule,
    CustomRequiredExamplesModule,
  ]
})
export class CustomRequiredValidatorModule {}
