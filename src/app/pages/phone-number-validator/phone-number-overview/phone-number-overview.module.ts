import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {PhoneNumberOverviewComponent} from './phone-number-overview.component';

@NgModule({
  declarations: [PhoneNumberOverviewComponent],
  exports: [PhoneNumberOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class PhoneNumberOverviewModule {}
