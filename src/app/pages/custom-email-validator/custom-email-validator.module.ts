import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {CustomEmailValidatorComponent} from './custom-email-validator.component';
import {CustomEmailApiModule} from './custom-email-api/custom-email-api.module';
import {CustomEmailExamplesModule} from './custom-email-examples/custom-email-examples.module';
import {CustomEmailOverviewModule} from './custom-email-overview/custom-email-overview.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomEmailValidatorComponent
  }
];

@NgModule({
  declarations: [CustomEmailValidatorComponent],
  exports: [CustomEmailValidatorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CustomEmailApiModule,
    CustomEmailExamplesModule,
    CustomEmailOverviewModule
  ]
})
export class CustomEmailValidatorModule {}
