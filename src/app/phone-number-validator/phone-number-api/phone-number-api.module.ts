import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared';
import {PhoneNumberApiComponent} from './phone-number-api.component';

@NgModule({
  declarations: [PhoneNumberApiComponent],
  exports: [PhoneNumberApiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PhoneNumberApiModule {}
