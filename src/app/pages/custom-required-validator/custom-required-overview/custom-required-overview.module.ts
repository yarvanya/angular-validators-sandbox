import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomRequiredOverviewComponent} from './custom-required-overview.component';
import {SharedModule} from '@shared';

@NgModule({
  declarations: [CustomRequiredOverviewComponent],
  exports: [CustomRequiredOverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CustomPasswordValidatorModule {}
